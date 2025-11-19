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
import { Loader2 } from 'lucide-react';
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
      const allAnswers = { ...answers, ...data };
      
      const formattedData = getFormattedAnswers();
      if (!formattedData) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not format data for submission.",
        });
        setIsLoading(false);
        return;
      }
      
      // The context already has all answers, so let's use what it provides after the final update.
      const finalPayload = { ...formattedData, ...data };

      const result = await createSchedule(finalPayload);
      setIsLoading(false);

      if (result.success && result.data) {
        // Storing schedule in session storage to be picked up by schedule page
        // to avoid long URL.
        sessionStorage.setItem('scheduleData', JSON.stringify(result.data));
        router.push(`/schedule`);
      } else {
        toast({
          variant: "destructive",
          title: "Generation Failed",
          description: result.error || "An unknown error occurred.",
        });
      }
    } else {
      router.push(`/q/${category}/${subCategory}/${questionIndex + 1}`);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 animate-fade-in">
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
              <div className="flex justify-between items-center">
                 <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  disabled={questionIndex === 0 || isLoading}
                >
                  Back
                </Button>
                <span className="text-sm text-muted-foreground">
                  {questionIndex + 1} / {totalQuestions}
                </span>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : isLastQuestion ? (
                    'Continue'
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
