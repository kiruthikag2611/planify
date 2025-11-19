'use client';

import * as React from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
} from 'lucide-react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  getDay,
  startOfWeek,
  addDays,
} from 'date-fns';

import { useUser } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import { collection, query, where, orderBy } from 'firebase/firestore';
import { useFirestore } from '@/firebase';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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

const eventColorMapping: { [key: string]: string } = {
  Class: 'bg-blue-500/20 text-blue-700 border-blue-500/50',
  Assignment: 'bg-yellow-500/20 text-yellow-700 border-yellow-500/50',
  Exam: 'bg-red-500/20 text-red-700 border-red-500/50',
  Task: 'bg-green-500/20 text-green-700 border-green-500/50',
  Custom: 'bg-gray-500/20 text-gray-700 border-gray-500/50',
};

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [selectedDay, setSelectedDay] = React.useState<Date | null>(new Date());
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState<CalendarEvent | null>(null);

  const { user, status } = useUser();
  const firestore = useFirestore();

  const eventsQuery = React.useMemo(() => {
    if (!user || !firestore) return null;
    return query(
      collection(firestore, 'calendarEvents'),
      where('userId', '==', user.uid),
      orderBy('startTime', 'asc')
    );
  }, [user, firestore]);

  const { data: events, loading } = useCollection<CalendarEvent>(eventsQuery);

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: startOfWeek(addDays(endOfMonth(currentMonth), 6)),
  });

  const dayEvents = (day: Date) =>
    events?.filter((e) => isSameDay(new Date(e.date), day)) || [];

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsSheetOpen(true);
  };
  
  const handleAddEvent = () => {
    setSelectedEvent(null);
    setIsSheetOpen(true);
  }

  const renderEvent = (event: CalendarEvent) => (
    <div
      key={event.eventId}
      onClick={() => handleEventClick(event)}
      className={cn(
        'p-1 text-xs rounded-md truncate cursor-pointer border-l-2 mb-1',
        eventColorMapping[event.type] || eventColorMapping['Custom']
      )}
    >
      <span className="font-semibold">{event.startTime}</span> {event.title}
    </div>
  );

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button onClick={handleAddEvent}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Event
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-lg">
            <SheetHeader>
              <SheetTitle>{selectedEvent ? 'Edit Event' : 'Add New Event'}</SheetTitle>
            </SheetHeader>
            <EventForm event={selectedEvent} onSave={() => setIsSheetOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-xl font-semibold">
              {format(currentMonth, 'MMMM yyyy')}
            </h2>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" onClick={() => setCurrentMonth(new Date())}>
            Today
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 text-center font-semibold text-sm text-muted-foreground border-b">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 h-[60vh]">
            {days.map((day) => (
              <div
                key={day.toString()}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  'border-r border-b p-2 flex flex-col',
                  !isSameMonth(day, currentMonth) && 'bg-muted/50 text-muted-foreground',
                  isToday(day) && 'bg-blue-500/10'
                )}
              >
                <span
                  className={cn(
                    'font-semibold mb-2',
                    isToday(day) && 'text-blue-600'
                  )}
                >
                  {format(day, 'd')}
                </span>
                <div className="flex-grow overflow-y-auto">
                   {loading && <Skeleton className="h-4 w-full mb-1" />}
                   {dayEvents(day).slice(0, 3).map(renderEvent)}
                   {dayEvents(day).length > 3 && <div className="text-xs text-muted-foreground mt-1">+{dayEvents(day).length - 3} more</div>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
