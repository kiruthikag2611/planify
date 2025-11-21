
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { Toaster } from '@/components/ui/toaster';

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
      <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
        <div className="h-16 w-16 border-4 border-dashed rounded-full animate-spin border-primary/20"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-indigo-950/50 to-background animate-gradient-pan"
      />
      <main className="z-10 flex flex-col items-center justify-center text-center p-4 sm:p-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">Planify</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-md">
          Smarter Schedule, Smoother Days.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <Link href="/category">Get Started</Link>
          </Button>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
