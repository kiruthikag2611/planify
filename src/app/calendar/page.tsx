
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
} from 'lucide-react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  isSameMonth,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
  isSameDay,
} from 'date-fns';

import { useUser } from '@/firebase/auth/use-user';
import { useCollection } from '@/firebase/firestore/use-collection';
import { collection, query, where } from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { EventForm } from '@/components/calendar/EventForm';
import { cn } from '@/lib/utils';
import type { CalendarEvent } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [today, setToday] = React.useState<Date | null>(null);

  const { user } = useUser();
  const firestore = useFirestore();
  const router = useRouter();

  React.useEffect(() => {
    // Set today on the client-side to avoid hydration mismatch
    setToday(new Date());
  }, []);

  const eventsQuery = React.useMemo(() => {
    if (!user || !firestore) return null;
    return query(
      collection(firestore, 'calendarEvents'),
      where('userId', '==', user.uid)
    );
  }, [user, firestore]);

  const { data: events, loading } = useCollection<CalendarEvent>(eventsQuery);

  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: startOfWeek(addDays(lastDayOfMonth, 6)),
  });

  const hasEvents = (day: Date) => {
    return events?.some((e) => isSameDay(new Date(e.date), day)) || false;
  };
  
  const isDayToday = (day: Date) => {
    return today ? isSameDay(day, today) : false;
  }

  const handleAddEvent = () => {
    setIsSheetOpen(true);
  };
  
  const handleDateClick = (day: Date) => {
    router.push(`/calendar/${format(day, 'yyyy-MM-dd')}`);
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
            <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date())}>
                Today
            </Button>
            <div className="flex items-center gap-1">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <h3 className="text-xl font-semibold w-32 text-center">
                    {format(currentMonth, 'MMMM yyyy')}
                </h3>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                >
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button onClick={handleAddEvent}>
              <Plus className="mr-2 h-4 w-4" /> Add Event
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-lg">
            <SheetHeader>
              <SheetTitle>Add New Event</SheetTitle>
            </SheetHeader>
            <EventForm onSave={() => setIsSheetOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      <div className="rounded-lg border shadow-sm">
        <div className="grid grid-cols-7 text-center font-semibold text-sm text-muted-foreground border-b">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="py-3">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 h-[calc(100vh-220px)]">
          {days.map((day) => (
            <div
              key={day.toString()}
              onClick={() => handleDateClick(day)}
              className={cn(
                'border-r border-b p-2 flex flex-col items-center cursor-pointer transition-colors hover:bg-accent',
                !isSameMonth(day, currentMonth) && 'text-muted-foreground',
                isDayToday(day) && 'bg-blue-500/10'
              )}
            >
              <span
                className={cn(
                  'h-8 w-8 flex items-center justify-center rounded-full font-medium',
                  isDayToday(day) && 'bg-primary text-primary-foreground'
                )}
              >
                {format(day, 'd')}
              </span>
              <div className="mt-2 flex-grow w-full flex justify-center">
                 {loading && <Skeleton className="h-2 w-2 rounded-full mt-1" />}
                 {hasEvents(day) && (
                    <div className="h-2 w-2 rounded-full bg-red-500 mt-1"></div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
