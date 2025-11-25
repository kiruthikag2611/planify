
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useQuestionnaire } from '@/context/QuestionnaireProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createSchedule } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft } from 'lucide-react';
import type { Question } from '@/lib/questions';

type QuestionnaireClientPageProps = {
  category: string;
  subCategory: string;
  questionIndex: number;
  currentQuestion: Question;
  totalQuestions: number;
};

export function QuestionnaireClientPage({
  category,
  subCategory,
  questionIndex,
  currentQuestion,
  totalQuestions,
}: QuestionnaireClientPageProps) {
  const router = useRouter();
  const { answers, updateAnswer, getFormattedAnswers } = useQuestionnaire();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const isLastQuestion = questionIndex === totalQuestions - 1;
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  const FormSchema = z.object({
    [currentQuestion.id]: z.string().min(1, 'This field is required.'),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      [currentQuestion.id]: answers[currentQuestion.id] || '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    updateAnswer(data);

    if (isLastQuestion) {
       setIsLoading(true);
       const formattedAnswers = getFormattedAnswers();
       const allAnswers = { ...formattedAnswers, ...data };
       
       const result = await createSchedule(allAnswers);
       
       if (result.success) {
           sessionStorage.setItem('scheduleData', JSON.stringify(result.data));
           toast({ title: 'Schedule Generated!', description: 'Redirecting to your new timetable.' });
           router.push('/schedule');
       } else {
           toast({
               variant: 'destructive',
               title: 'Generation Failed',
               description: result.error,
           });
           setIsLoading(false);
       }
    } else {
      router.push(`/q/${category}/${subCategory}/${questionIndex + 1}`);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 animate-fade-in relative">
        <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            disabled={isLoading}
            className="absolute top-8 left-8"
        >
            <ArrowLeft className="h-5 w-5" />
        </Button>
      <Card className="w-full max-w-xl shadow-2xl">
        <CardHeader>
          <Progress value={progress} className="w-full mb-4" />
          <CardTitle className="text-center text-2xl font-headline">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name={currentQuestion.id}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">{currentQuestion.question}</FormLabel>
                    <FormControl>
                      <Input
                        type={currentQuestion.type}
                        placeholder="Type your answer here..."
                        {...field}
                        className="text-center text-lg py-6"
                      />
                    </FormControl>
                    <FormMessage className="text-center" />
                  </FormItem>
                )}
              />
              <div className="flex justify-end items-center">
                <span className="text-sm text-muted-foreground mr-auto">
                  {questionIndex + 1} / {totalQuestions}
                </span>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : isLastQuestion ? (
                    'Generate Schedule'
                  ) : (
                    'Next'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
