'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { Toaster } from '@/components/ui/toaster';
import { WelcomeBackground } from '@/components/WelcomeBackground';

// This is a self-contained welcome page component that includes its own layout logic
// to avoid conflicts with the main application layout.
export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      // When authenticated, redirect to the dashboard which uses the main app layout.
      router.replace('/dashboard');
    }
  }, [status, router]);

  if (status === 'loading' || status === 'authenticated') {
    // Show a loading spinner while checking auth status or when redirecting.
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
        <div className="h-16 w-16 border-4 border-dashed rounded-full animate-spin border-primary/20"></div>
      </div>
    );
  }

  // Render the welcome page for unauthenticated users.
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
        <WelcomeBackground />
        <main className="z-10 absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-8 animate-fade-in">
            <div className="bg-background/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">Planify</h1>
                <p className="text-lg text-muted-foreground mt-2">Smarter Schedule, Smoother Days.</p>
                <div className="mt-8">
                    <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                        <Link href="/category">Start</Link>
                    </Button>
                </div>
            </div>
        </main>
        <Toaster />
    </div>
  );
}
