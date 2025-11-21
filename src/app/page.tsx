
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  const backgroundImage = PlaceHolderImages.find(p => p.id === 'cozy-study-ambience');

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/category');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
        <div className="h-16 w-16 border-4 border-dashed rounded-full animate-spin border-primary/20"></div>
      </div>
    );
  }
  
  if (status === 'authenticated') {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4">
      {backgroundImage && (
         <Image
            src={backgroundImage.imageUrl}
            alt={backgroundImage.description}
            fill
            className="object-cover"
            data-ai-hint={backgroundImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/30"></div>
      <main className="z-10 flex flex-col items-center justify-center text-center text-white animate-fade-in">
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10 shadow-[0_0_40px_8px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:shadow-[0_0_50px_15px_hsl(var(--primary)/0.6)]">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-headline">Planify</h1>
          <p className="text-lg md:text-xl mt-4 max-w-md">
            Smarter Schedule, Smoother Days.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
