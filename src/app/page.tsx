'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { PlanifyLogo } from '@/components/logo';

export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  if (status === 'loading' || status === 'authenticated') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-transparent">
        <PlanifyLogo className="h-32 w-auto text-primary animate-pulse" />
      </main>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4 sm:p-8 animate-fade-in">
        <div className="z-10 flex flex-col items-center gap-6">
          <PlanifyLogo className="w-[320px] h-auto" />
          <p className="max-w-2xl text-lg text-foreground/80 mt-[-20px]">
            Smarter Schedule, Smoother Days.
          </p>
        </div>
        <div className="absolute bottom-16 z-10">
            <Button asChild size="lg" className="shadow-lg shadow-black/20 hover:shadow-black/30 transition-shadow">
              <Link href="/category">Start</Link>
            </Button>
        </div>
      </main>
    </div>
  );
}
