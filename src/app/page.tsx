'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from './providers';

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

  // The 'Home' component is wrapped in <Providers> higher up the tree.
  // We only need to provide a minimal HTML structure here.

  if (status === 'loading' || status === 'authenticated') {
    // Show a loading spinner while checking auth status or when redirecting.
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
        <div className="h-16 w-16 border-4 border-dashed rounded-full animate-spin border-gray-300"></div>
      </div>
    );
  }

  // Render the welcome page for unauthenticated users.
  return (
    <div 
        className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/bg.png)` }}
    >
        <main className="z-10 flex-1 flex flex-col items-center justify-center text-center p-4 sm:p-8 animate-fade-in">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-800">Planify</h1>
                <p className="text-lg text-gray-600 mt-2">Smarter Schedule, Smoother Days.</p>
                <div className="mt-8">
                    <Button asChild size="lg" className="shadow-lg bg-gray-700 hover:bg-gray-800 text-white shadow-black/20 hover:shadow-black/30 transition-shadow">
                        <Link href="/category">Start</Link>
                    </Button>
                </div>
            </div>
        </main>
        <Toaster />
    </div>
  );
}
