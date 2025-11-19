export type Question = {
  id: string;
  question: string;
  type: 'text' | 'email' | 'number';
};

type QuestionSet = {
  [key: string]: {
    [key: string]: Question[];
  };
};

export const questions: QuestionSet = {
  personal: {
    student: [
      { id: 'careerPath', question: 'What career path are you interested in?', type: 'text' },
      { id: 'workHours', question: 'How many extra hours do you work for?', type: 'text' },
      { id: 'preferredTime', question: 'Preferred time?', type: 'text' },
    ],
  },
  academics: {
    student: [
      { id: 'collegeName', question: 'College name?', type: 'text' },
      { id: 'rollNumber', question: 'Roll number', type: 'text' },
      { id: 'emailId', question: 'Email ID', type: 'email' },
      { id: 'department', question: 'Department', type: 'text' },
      { id: 'hardSubject', question: 'Which subject is hard for you?', type: 'text' },
    ],
    professor: [
      { id: 'collegeName', question: 'College name', type: 'text' },
      { id: 'subjectHandled', question: 'What subject do you handle?', type: 'text' },
      { id: 'emailId', question: 'Email ID', type: 'email' },
      { id: 'availableDays', question: 'What days of the week are you available?', type: 'text' },
      { id: 'preferredTimeSlots', question: 'Preferred time slots? (Morning / Afternoon)', type: 'text' },
      { id: 'hoursPerWeek', question: 'How many hours per week do you need?', type: 'text' },
      { id: 'specialLabHours', question: 'Do you need special lab hours?', type: 'text' },
      { id: 'otherDepartmentClasses', question: 'Do you handle other department classes?', type: 'text' },
      { id: 'regularDuties', question: 'Any regular duties? (NSS, NCC, Exam Cell, Counseling Hour)', type: 'text' },
    ],
    management: [
      { id: 'collegeName', question: 'College name', type: 'text' },
      { id: 'university', question: 'Under which university', type: 'text' },
      { id: 'coursesOffered', question: 'Courses offered', type: 'text' },
      { id: 'numberOfDepartments', question: 'Number of departments', type: 'text' },
      { id: 'workingDays', question: 'Working days in semester', type: 'text' },
      { id: 'sectionsPerDepartment', question: 'Sections per department', type: 'text' },
      { id: 'staffAllocation', question: 'Staff allocation per department', type: 'text' },
      { id: 'collegeTiming', question: 'College timing', type: 'text' },
      { id: 'hoursPerDay', question: 'Hours per day', type: 'text' },
      { id: 'periodDuration', question: 'Duration of each period', type: 'text' },
      { id: 'breakLunchTime', question: 'Break + lunch time', type: 'text' },
      { id: 'numberOfClassrooms', question: 'Number of classrooms', type: 'text' },
      { id: 'studentsPerClassroom', question: 'Students per classroom', type: 'text' },
    ],
  },
};
