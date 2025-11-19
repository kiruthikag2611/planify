"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type Category = 'academics' | 'personal' | null;
type SubCategory = 'student' | 'professor' | 'management' | null;
type Answers = { [key: string]: string };

interface QuestionnaireContextType {
  category: Category;
  setCategory: (category: Category) => void;
  subCategory: SubCategory;
  setSubCategory: (subCategory: SubCategory) => void;
  answers: Answers;
  updateAnswer: (answer: Partial<Answers>) => void;
  reset: () => void;
  getFormattedAnswers: () => any;
}

const QuestionnaireContext = createContext<QuestionnaireContextType | undefined>(undefined);

export const QuestionnaireProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<Category>(null);
  const [subCategory, setSubCategory] = useState<SubCategory>(null);
  const [answers, setAnswers] = useState<Answers>({});

  const updateAnswer = (answer: Partial<Answers>) => {
    setAnswers(prev => ({ ...prev, ...answer }));
  };

  const reset = useCallback(() => {
    setCategory(null);
    setSubCategory(null);
    setAnswers({});
  }, []);

  const getFormattedAnswers = () => {
    if (!category) return null;

    if (category === 'personal') {
      return {
        category: 'Personal',
        ...answers,
      };
    }

    if (category === 'academics' && subCategory) {
      const subCategoryCapitalized = subCategory.charAt(0).toUpperCase() + subCategory.slice(1);
      return {
        category: 'Academics',
        subCategory: subCategoryCapitalized,
        ...answers,
      };
    }
    return null;
  };

  return (
    <QuestionnaireContext.Provider value={{
      category,
      setCategory,
      subCategory,
      setSubCategory,
      answers,
      updateAnswer,
      reset,
      getFormattedAnswers
    }}>
      {children}
    </QuestionnaireContext.Provider>
  );
};

export const useQuestionnaire = () => {
  const context = useContext(QuestionnaireContext);
  if (context === undefined) {
    throw new Error('useQuestionnaire must be used within a QuestionnaireProvider');
  }
  return context;
};
