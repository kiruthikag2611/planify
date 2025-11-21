
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  const backgroundImage = PlaceHolderImages.find(
    (img) => img.id === 'warm-study-desk'
  );

  if (status === 'loading' || status === 'authenticated') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
        <div className="h-32 w-auto animate-pulse" />
      </main>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
       {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          fill
          className="object-cover"
          data-ai-hint={backgroundImage.imageHint}
        />
      )}
      <main className="z-10 flex-1 flex flex-col items-center justify-center text-center p-4 sm:p-8 animate-fade-in">
        <div className="bg-background/80 backdrop-blur-sm border border-black/10 dark:border-white/10 shadow-2xl rounded-2xl p-8 sm:p-12">
            <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold tracking-tight mt-4 drop-shadow-md">Planify</h1>
            <p className="text-lg text-foreground/80 drop-shadow-md">Smarter Schedule, Smoother Days.</p>
            <div className="mt-8">
              <Button asChild size="lg" className="shadow-lg shadow-black/20 hover:shadow-black/30 transition-shadow">
                <Link href="/category">Start</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
