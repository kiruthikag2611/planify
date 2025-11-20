'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase/auth/use-user';
import { Button } from '@/components/ui/button';
import { PlanifyLogo } from '@/components/logo';
import { useEffect } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const { user, status } = useUser();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  if (status === 'loading' || status === 'authenticated') {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-transparent">
        <PlanifyLogo className="h-20 w-20 text-primary animate-pulse" />
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex items-center justify-center relative bg-transparent overflow-hidden">
      <div className="relative z-20 flex flex-col items-center gap-6 text-center p-8 max-w-sm w-full bg-background/30 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20">
        <PlanifyLogo className="h-20 w-20 text-primary" />
        <div>
          <h1 className="text-4xl font-bold font-headline text-primary">
            Welcome Back
          </h1>
          <p className="text-md text-muted-foreground">
            Let's get your schedule organized.
          </p>
        </div>
        <div className="w-full space-y-4 mt-4">
          <Button className="w-full" size="lg" asChild>
            <Link href="/category">START</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
