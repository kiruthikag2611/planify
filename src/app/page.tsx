'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { PlanifyLogo } from '@/components/logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  const backgroundImage = PlaceHolderImages.find(img => img.id === 'blurred-desk-background');

  if (status === 'loading' || status === 'authenticated') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <PlanifyLogo className="h-32 w-auto animate-pulse" />
      </main>
    );
  }

  return (
    <div className="flex flex-col min-h-screen" style={{
      backgroundImage: `url(${backgroundImage?.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <main className="z-10 flex-1 flex flex-col items-center justify-center text-center p-4 sm:p-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center gap-4">
          <PlanifyLogo className="h-48 w-auto" />
          <h1 className="text-4xl font-bold tracking-tight mt-4">Planify</h1>
          <p className="text-lg text-muted-foreground">Smarter Schedule, Smoother Days.</p>
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
