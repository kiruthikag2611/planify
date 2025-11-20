'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlanifyLogo } from '@/components/logo';
import { useUser } from '@/firebase/auth/use-user';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    } else if (status === 'unauthenticated') {
      router.replace('/login');
    }
  }, [status, router]);

  // Show a loading state while checking auth
  if (status === 'loading') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-transparent">
        <PlanifyLogo className="h-24 w-24 text-primary animate-pulse" />
      </main>
    );
  }

  // This content is primarily for users who land here before being redirected.
  // Or for scenarios where JavaScript is disabled.
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-transparent">
      <div className="flex flex-col items-center gap-6 text-center z-20 relative">
        <PlanifyLogo className="h-24 w-24 text-primary drop-shadow-lg transition-transform duration-300 hover:animate-wobble" />
        <div>
          <h1 className="text-5xl font-bold font-headline text-foreground">
            PLANIFY
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            SMARTER SCHEDULES! SMOOTHER DAYS!
          </p>
        </div>
        <Button asChild size="lg" className="mt-8 shadow-lg">
          <Link href="/category">Get Started</Link>
        </Button>
      </div>
    </main>
  );
}
