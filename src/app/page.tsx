
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

// This is a simplified root layout specifically for the landing page.
function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}


export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      // When authenticated, redirect to the dashboard which uses the main layout
      router.replace('/dashboard');
    }
  }, [status, router]);

  const backgroundImage = PlaceHolderImages.find(img => img.id === 'warm-study-desk');

  if (status === 'loading' || status === 'authenticated') {
    return (
       <LandingPageLayout>
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
          <div className="h-16 w-16 border-4 border-dashed rounded-full animate-spin border-gray-300"></div>
        </main>
      </LandingPageLayout>
    );
  }

  return (
    <LandingPageLayout>
        <div 
        className="flex flex-col min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage?.imageUrl})` }}
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
        </div>
    </LandingPageLayout>
  );
}
