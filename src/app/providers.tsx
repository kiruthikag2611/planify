"use client";

import { QuestionnaireProvider } from '@/context/QuestionnaireProvider';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QuestionnaireProvider>
      {children}
    </QuestionnaireProvider>
  );
}
