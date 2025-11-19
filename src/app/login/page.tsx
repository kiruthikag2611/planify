'use client';

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@/firebase';
import { Button } from '@/components/ui/button';
import { PlanifyLogo } from '@/components/logo';
import { Chrome, Github } from 'lucide-react';
import { useEffect } from 'react';

export default function LoginPage() {
  const auth = useAuth();
  const router = useRouter();
  const { user, status } = useUser();

  const handleSignIn = async (provider: GoogleAuthProvider | GithubAuthProvider) => {
    if (!auth) return;
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Sign-in error', error);
    }
  };
  
  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  },[status, router])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 text-center p-8 max-w-sm w-full">
        <PlanifyLogo className="h-20 w-20 text-primary" />
        <div>
          <h1 className="text-4xl font-bold font-headline text-primary">Welcome to Planify</h1>
          <p className="mt-2 text-md text-muted-foreground">
            Sign in to manage your schedule.
          </p>
        </div>
        <div className="w-full space-y-4 mt-4">
          <Button
            className="w-full"
            onClick={() => handleSignIn(new GoogleAuthProvider())}
          >
            <Chrome className="mr-2 h-4 w-4" /> Sign in with Google
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => handleSignIn(new GithubAuthProvider())}
          >
            <Github className="mr-2 h-4 w-4" /> Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
