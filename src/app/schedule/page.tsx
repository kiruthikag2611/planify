import { Suspense } from 'react';
import { ScheduleDisplay } from '@/components/schedule/ScheduleDisplay';
import { Skeleton } from '@/components/ui/skeleton';

function ScheduleLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
      <div className="w-full max-w-4xl space-y-4">
        <Skeleton className="h-10 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
        <Skeleton className="h-64 w-full" />
        <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <Suspense fallback={<ScheduleLoading />}>
      <ScheduleDisplay />
    </Suspense>
  );
}
