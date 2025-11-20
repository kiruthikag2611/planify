'use client';

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAuth, useFirestore } from '@/firebase/provider';
import { useUser } from '@/firebase/auth/use-user';
import { Button } from '@/components/ui/button';
import { PlanifyLogo } from '@/components/logo';
import { Chrome, Github, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

type Provider = 'google' | 'github' | null;

export default function LoginPage() {
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const { user, status } = useUser();
  const [isSigningIn, setIsSigningIn] = useState<Provider>(null);

  const handleSignIn = async (providerType: 'google' | 'github') => {
    if (!auth) return;
    
    setIsSigningIn(providerType);

    const provider = providerType === 'google' ? new GoogleAuthProvider() : new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // After sign-in, the useEffect will handle redirection.
      // The user object from the result can be used for immediate actions if needed.
       if (result.user && firestore) {
          const userRef = doc(firestore, 'users', result.user.uid);
          const userDoc = await getDoc(userRef);
          if (!userDoc.exists()) {
            // This is a new user, create their document immediately
             await setDoc(userRef, {
              uid: result.user.uid,
              email: result.user.email,
              displayName: result.user.displayName,
              photoURL: result.user.photoURL,
              lastLogin: serverTimestamp(),
              createdAt: serverTimestamp(),
            }, { merge: true });
          }
       }
    } catch (error) {
      console.error('Sign-in error', error);
      setIsSigningIn(null);
    }
  };
  
  useEffect(() => {
    if (status === 'authenticated' && user && firestore) {
        const checkUserOnboarding = async () => {
            const userDocRef = doc(firestore, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);
            
            // A user is considered "new" if they don't have a profile document yet,
            // or if the document exists but they haven't completed onboarding (e.g. no role set).
            // A simple way to check is to see if a field that's set after onboarding exists.
            // For now, checking if creation time is the same as last sign-in is a good proxy.
            const creationTime = user.metadata.creationTime ? new Date(user.metadata.creationTime).getTime() : 0;
            const lastSignInTime = user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).getTime() : 0;
            
            const isNewUser = !userDoc.exists() || (Math.abs(lastSignInTime - creationTime) < 2000);

            if (isNewUser) {
                router.replace('/category');
            } else {
                router.replace('/dashboard');
            }
        };
        checkUserOnboarding();
    }
  }, [status, user, router, firestore]);

  // Show full-page loader ONLY if we are already authenticated and waiting for redirect.
  // Otherwise, show the login buttons.
  if (status === 'loading' || status === 'authenticated') {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-background">
            <PlanifyLogo className="h-20 w-20 text-primary animate-pulse" />
        </div>
    );
  }

  return (
    <div className="h-screen w-full flex items-center justify-center relative bg-background">
       <Image
        src={PlaceHolderImages[1].imageUrl}
        alt={PlaceHolderImages[1].description}
        data-ai-hint={PlaceHolderImages[1].imageHint}
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center gap-6 text-center p-8 max-w-sm w-full bg-background/80 backdrop-blur-sm rounded-xl shadow-2xl">
        <PlanifyLogo className="h-20 w-20 text-primary" />
        <div>
          <h1 className="text-4xl font-bold font-headline text-primary">Welcome Back</h1>
          <p className="text-md text-muted-foreground">
            Sign in to get started.
          </p>
        </div>
        <div className="w-full space-y-4 mt-4">
          <Button
            className="w-full"
            onClick={() => handleSignIn('google')}
            disabled={!!isSigningIn}
          >
            {isSigningIn === 'google' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Chrome className="mr-2 h-4 w-4" />} 
            Sign in with Google
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => handleSignIn('github')}
            disabled={!!isSigningIn}
          >
            {isSigningIn === 'github' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Github className="mr-2 h-4 w-4" />}
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
