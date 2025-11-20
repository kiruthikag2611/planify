'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlanifyLogo } from '@/components/logo';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If user is already logged in, skip the intro screens.
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);
  
  if (status === 'loading' || status === 'authenticated') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-transparent">
        <PlanifyLogo className="h-24 w-24 text-primary animate-pulse" />
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 overflow-hidden bg-transparent">
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full p-6 rounded-xl bg-transparent">
            <div className="animate-fade-in flex flex-col items-center gap-4" style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}>
                <PlanifyLogo className="h-24 w-24 text-primary" />
                <h1 className="text-5xl font-bold tracking-tight text-primary">
                    PLANIFY
                </h1>
                <p className="mt-2 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                    Smarter Schedule, Smoother Days.
                </p>
            </div>

            <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s', animationDuration: '0.8s' }}>
                <Button asChild size="lg" className="shadow-lg shadow-black/20 hover:shadow-black/30 transition-shadow">
                    <Link href="/category">START</Link>
                </Button>
            </div>
        </div>
    </main>
  );
}
