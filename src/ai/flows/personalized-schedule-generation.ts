'use server';

/**
 * @fileOverview A personalized schedule generation AI agent.
 *
 * - generatePersonalizedSchedule - A function that handles the generation of a personalized schedule.
 * - PersonalizedScheduleGenerationInput - The input type for the generatePersonalizedSchedule function.
 * - PersonalizedScheduleGenerationOutput - The return type for the generatePersonalizedSchedule function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedScheduleGenerationInputSchema = z.union([
  z.object({
    category: z.literal('Personal'),
    careerPath: z.string().describe('The user\'s desired career path.'),
    workHours: z.string().describe('The number of extra hours the user works.'),
    preferredTime: z.string().describe('The user\'s preferred time for activities.'),
  }),
  z.object({
    category: z.literal('Academics'),
    subCategory: z.literal('Student'),
    collegeName: z.string().describe('The name of the college.'),
    rollNumber: z.string().describe('The student\'s roll number.'),
    emailId: z.string().describe('The student\'s email ID.'),
    department: z.string().describe('The student\'s department.'),
    hardSubject: z.string().describe('The subject the student finds difficult.'),
  }),
  z.object({
    category: z.literal('Academics'),
    subCategory: z.literal('Professor'),
    collegeName: z.string().describe('The name of the college.'),
    subjectHandled: z.string().describe('The subject the professor handles.'),
    emailId: z.string().describe('The professor\'s email ID.'),
    availableDays: z.string().describe('The days of the week the professor is available.'),
    preferredTimeSlots: z.string().describe('The preferred time slots for the professor (Morning/Afternoon).'),
    hoursPerWeek: z.string().describe('The number of hours per week the professor needs.'),
    specialLabHours: z.string().describe('Whether the professor needs special lab hours.'),
    otherDepartmentClasses: z.string().describe('Whether the professor handles other department classes.'),
    regularDuties: z
      .string()
      .describe('Any regular duties the professor has (NSS, NCC, Exam Cell, Counseling Hour).'),
  }),
  z.object({
    category: z.literal('Academics'),
    subCategory: z.literal('Management'),
    collegeName: z.string().describe('The name of the college.'),
    university: z.string().describe('The university under which the college falls.'),
    coursesOffered: z.string().describe('The courses offered by the college.'),
    numberOfDepartments: z.string().describe('The number of departments in the college.'),
    workingDays: z.string().describe('The number of working days in the semester.'),
    sectionsPerDepartment: z.string().describe('The number of sections per department.'),
    staffAllocation: z.string().describe('The staff allocation per department.'),
    collegeTiming: z.string().describe('The college timing.'),
    hoursPerDay: z.string().describe('The number of hours per day.'),
    periodDuration: z.string().describe('The duration of each period.'),
    breakLunchTime: z.string().describe('The break and lunch time.'),
    numberOfClassrooms: z.string().describe('The number of classrooms.'),
    studentsPerClassroom: z.string().describe('The number of students per classroom.'),
  }),
]);

export type PersonalizedScheduleGenerationInput = z.infer<typeof PersonalizedScheduleGenerationInputSchema>;

const PersonalizedScheduleGenerationOutputSchema = z.object({
  schedule: z.string().describe('The generated personalized schedule.'),
});

export type PersonalizedScheduleGenerationOutput = z.infer<typeof PersonalizedScheduleGenerationOutputSchema>;

export async function generatePersonalizedSchedule(
  input: PersonalizedScheduleGenerationInput
): Promise<PersonalizedScheduleGenerationOutput> {
  return personalizedScheduleGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedScheduleGenerationPrompt',
  input: {schema: PersonalizedScheduleGenerationInputSchema},
  output: {schema: PersonalizedScheduleGenerationOutputSchema},
  prompt: `You are an AI schedule generator. Based on the information provided, create a personalized schedule.

  Here is the information:
  {{#eq category "Personal"}}
  Career Path: {{{careerPath}}}
  Work Hours: {{{workHours}}}
  Preferred Time: {{{preferredTime}}}
  {{/eq}}
  {{#eq category "Academics"}}
    {{#eq subCategory "Student"}}
      College Name: {{{collegeName}}}
      Roll Number: {{{rollNumber}}}
      Email ID: {{{emailId}}}
      Department: {{{department}}}
      Hard Subject: {{{hardSubject}}}
    {{/eq}}
    {{#eq subCategory "Professor"}}
      College Name: {{{collegeName}}}
      Subject Handled: {{{subjectHandled}}}
      Email ID: {{{emailId}}}
      Available Days: {{{availableDays}}}
      Preferred Time Slots: {{{preferredTimeSlots}}}
      Hours Per Week: {{{hoursPerWeek}}}
      Special Lab Hours: {{{specialLabHours}}}
      Other Department Classes: {{{otherDepartmentClasses}}}
      Regular Duties: {{{regularDuties}}}
    {{/eq}}
    {{#eq subCategory "Management"}}
      College Name: {{{collegeName}}}
      University: {{{university}}}
      Courses Offered: {{{coursesOffered}}}
      Number of Departments: {{{numberOfDepartments}}}
      Working Days: {{{workingDays}}}
      Sections Per Department: {{{sectionsPerDepartment}}}
      Staff Allocation: {{{staffAllocation}}}
      College Timing: {{{collegeTiming}}}
      Hours Per Day: {{{hoursPerDay}}}
      Period Duration: {{{periodDuration}}}
      Break Lunch Time: {{{breakLunchTime}}}
      Number of Classrooms: {{{numberOfClassrooms}}}
      Students Per Classroom: {{{studentsPerClassroom}}}
    {{/eq}}
  {{/eq}}
  `,
});

const personalizedScheduleGenerationFlow = ai.defineFlow(
  {
    name: 'personalizedScheduleGenerationFlow',
    inputSchema: PersonalizedScheduleGenerationInputSchema,
    outputSchema: PersonalizedScheduleGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
