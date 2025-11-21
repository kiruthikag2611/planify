'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUser } from '@/firebase/auth/use-user';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const { status } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  const backgroundImage = PlaceHolderImages.find(img => img.id === 'warm-study-desk');

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
  );
}
