
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/firebase/provider';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useUser } from '@/firebase/auth/use-user';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

const GoogleIcon = () => (
    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
        <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
        />
        <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.8 0-5.18-1.88-6.04-4.42H2.34v2.84C4.13 20.98 7.79 23 12 23z"
        fill="#34A853"
        />
        <path
        d="M5.96 14.25c-.2-.6-.31-1.24-.31-1.9s.11-1.3.31-1.9V7.61H2.34c-.77 1.52-1.22 3.24-1.22 5.14s.45 3.62 1.22 5.14l3.62-2.84z"
        fill="#FBBC05"
        />
        <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.79 1 4.13 3.02 2.34 5.86l3.62 2.84c.86-2.54 3.24-4.42 6.04-4.42z"
        fill="#EA4335"
        />
    </svg>
);

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
    const auth = useAuth();
    const router = useRouter();
    const { toast } = useToast();
    const { user, status } = useUser();
    const [isLoading, setIsLoading] = useState(false);
    
    const backgroundImage = PlaceHolderImages.find(p => p.id === 'login-background');

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        if (status === 'authenticated') {
            router.replace('/category');
        }
    }, [status, router]);

    const handleEmailSubmit = async (data: FormValues, action: 'signIn' | 'signUp') => {
        if (!auth) return;
        setIsLoading(true);
        try {
            if (action === 'signIn') {
                await signInWithEmailAndPassword(auth, data.email, data.password);
                toast({ title: 'Login Successful', description: 'Welcome back!' });
            } else {
                await createUserWithEmailAndPassword(auth, data.email, data.password);
                toast({ title: 'Account Created', description: 'Welcome to Planify!' });
            }
            router.push('/category');
        } catch (error: any) {
            console.error('Email/Password Error:', error);
            toast({
                variant: 'destructive',
                title: action === 'signIn' ? 'Login Failed' : 'Sign Up Failed',
                description: error.message || 'An unexpected error occurred. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        if (!auth) return;
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            toast({ title: 'Login Successful', description: 'Welcome back!' });
            router.push('/category');
        } catch (error) {
            console.error('Google Sign-In Error:', error);
            toast({
                variant: 'destructive',
                title: 'Login Failed',
                description: 'Could not sign in with Google. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    if (status === 'loading' || status === 'authenticated') {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
          <div className="h-16 w-16 border-4 border-dashed rounded-full animate-spin border-primary/20"></div>
        </div>
      );
    }

    return (
        <div className="relative min-h-screen w-full">
            {backgroundImage && (
                <Image
                    src={backgroundImage.imageUrl}
                    alt={backgroundImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={backgroundImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative flex min-h-screen items-center justify-center p-4">
                <Card className="w-full max-w-sm animate-fade-in shadow-2xl border-white/20 bg-black/40 text-white backdrop-blur-sm">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Welcome!</CardTitle>
                        <CardDescription className="text-white/80">Sign in or create an account to continue.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="signin" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-white/10 text-white/70">
                                <TabsTrigger value="signin">Sign In</TabsTrigger>
                                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                            </TabsList>
                            <Form {...form}>
                                <TabsContent value="signin">
                                    <form onSubmit={form.handleSubmit(data => handleEmailSubmit(data, 'signIn'))} className="space-y-4 mt-4">
                                        <EmailPasswordFields />
                                        <Button type="submit" className="w-full" disabled={isLoading}>
                                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                            Sign In
                                        </Button>
                                    </form>
                                </TabsContent>
                                <TabsContent value="signup">
                                     <form onSubmit={form.handleSubmit(data => handleEmailSubmit(data, 'signUp'))} className="space-y-4 mt-4">
                                        <EmailPasswordFields />
                                        <Button type="submit" className="w-full" disabled={isLoading}>
                                           {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                            Sign Up
                                        </Button>
                                    </form>
                                </TabsContent>
                            </Form>
                        </Tabs>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/30" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-black/40 px-2 text-white/80">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <Button onClick={handleGoogleSignIn} className="w-full bg-white text-black hover:bg-gray-200" disabled={isLoading}>
                           <GoogleIcon />
                            Sign in with Google
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

const EmailPasswordFields = () => {
    const { control } = useFormContext();
    return (
        <>
            <FormField
                control={control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-white/80">Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-white/80">Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};
