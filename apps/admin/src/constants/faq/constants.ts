import type { Category } from '@/types/faq/client';

export const FAQ_CATEGORY: Record<Category, string> = {
  SCHOOL_LIFE: '학교생활',
  SUBMIT_DOCUMENT: '관련 제출 서류',
  ADMISSION_PROCESS: '입학 과정',
  TOP_QUESTION: '질문 TOP',
} as const;
