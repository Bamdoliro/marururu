import type { SortCategory } from '@/types/form/client';

export const FORM_SORTING_CATEGORY: Record<SortCategory, string> = {
  BOARD_ALL: '전형 별',
  SCHOOL_LIFE: '최종 점수 높은 순',
  TOP_QUESTION: '최종 점수 낮은 순',
} as const;
