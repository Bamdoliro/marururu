export type Category =
  | 'SCHOOL_LIFE'
  | 'SUBMIT_DOCUMENT'
  | 'ADMISSION_PROCESS'
  | 'TOP_QUESTION';

export interface Faq {
  id: number;
  title: string;
  content: string;
  category: Category;
  createdAt: string;
}

export interface FaqDetail {
  title: string;
  content: string;
  category: string;
  createdAt: string;
}

export type FaqCategory =
  | 'BOARD_ALL'
  | 'SCHOOL_LIFE'
  | 'SUBMIT_DOCUMENT'
  | 'ADMISSION_PROCESS'
  | 'TOP_QUESTION';
