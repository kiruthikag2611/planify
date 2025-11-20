"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useQuestionnaire } from '@/context/QuestionnaireProvider';
import { optimizeSchedule } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import Link from 'next/link';

export function ScheduleDisplay() {
  const router = useRouter();
  const { reset, category, subCategory, answers } = useQuestionnaire();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [optimizations, setOptimizations] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('scheduleData');
    if (data) {
      try {
        setScheduleData(JSON.parse(data));
      } catch (e) {
        console.error("Failed to parse schedule data", e);
        setScheduleData({ schedule: "Error: Could not display schedule." });
      }
    }
  }, []);
  
  const lastQuestionIndex = Object.keys(answers).length - 1;
  const backLink = `/q/${category}/${subCategory}/${lastQuestionIndex >= 0 ? lastQuestionIndex : 0}`;

  const handleStartOver = () => {
    reset();
    router.push('/');
  };
  
  const handleGoToDashboard = () => {
    router.push('/dashboard');
  }

  const handleOptimize = async () => {
    if (!scheduleData || !category || !subCategory) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Missing data to perform optimization."
      });
      return;
    }
    
    setIsLoading(true);

    const input = {
      scheduleDetails: scheduleData.schedule,
      userCategory: subCategory.charAt(0).toUpperCase() + subCategory.slice(1) as "Student" | "Professor" | "Management",
    };

    const result = await optimizeSchedule(input);
    setIsLoading(false);

    if(result.success && result.data) {
      setOptimizations(result.data.optimizationSuggestions);
      setIsDialogOpen(true);
    } else {
      toast({
        variant: "destructive",
        title: "Optimization Failed",
        description: result.error || "An unknown error occurred."
      });
    }
  };

  if (!scheduleData) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-transparent">
            <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle>No Schedule Found</CardTitle>
                    <CardDescription>It seems there was an issue generating your schedule.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Please try again from the beginning.</p>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleStartOver} className="w-full">Start Over</Button>
                </CardFooter>
            </Card>
        </div>
    )
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 bg-transparent">
        <Link href={backLink} className="absolute top-8 left-8 flex items-center gap-2 text-primary">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
        </Link>
        <Card className="w-full max-w-4xl shadow-lg bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">Your Personalized Schedule</CardTitle>
            <CardDescription className="text-center">
              Here is the schedule generated just for you by Planify AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none bg-muted/30 p-6 rounded-lg whitespace-pre-wrap font-mono text-sm">
              {scheduleData.schedule}
            </div>
          </CardContent>
          <CardFooter className="flex-col sm:flex-row gap-4">
            <Button onClick={handleStartOver} variant="outline" className="w-full sm:w-auto">Start Over</Button>
            <Button onClick={handleOptimize} className="w-full sm:w-auto" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Optimizing...
                </>
              ) : (
                'Optimize Schedule'
              )}
            </Button>
             <Button onClick={handleGoToDashboard} className="w-full sm:w-auto">Go to Dashboard</Button>
          </CardFooter>
        </Card>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="bg-card/50 backdrop-blur-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Optimization Suggestions</AlertDialogTitle>
            <AlertDialogDescription>
              Here are some AI-powered suggestions to improve your schedule:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="max-h-60 overflow-y-auto pr-4">
            <p className="whitespace-pre-wrap text-sm">{optimizations}</p>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>Got it!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
