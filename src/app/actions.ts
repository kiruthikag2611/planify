'use server';

import { generatePersonalizedSchedule, PersonalizedScheduleGenerationInput, PersonalizedScheduleGenerationOutput } from '@/ai/flows/personalized-schedule-generation';
import { suggestScheduleOptimizations, SuggestScheduleOptimizationsInput } from '@/ai/flows/schedule-optimization-suggestions';

export async function createSchedule(data: any) {
  try {
    const result = await generatePersonalizedSchedule(data as PersonalizedScheduleGenerationInput);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating schedule:', error);
    return { success: false, error: 'Failed to generate schedule.' };
  }
}

export async function optimizeSchedule(data: SuggestScheduleOptimizationsInput) {
  try {
    const result = await suggestScheduleOptimizations(data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error optimizing schedule:', error);
    return { success: false, error: 'Failed to optimize schedule.' };
  }
}
