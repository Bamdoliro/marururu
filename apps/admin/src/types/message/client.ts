export type Category =
  | 'APPROVED'
  | 'REJECTED'
  | 'FIRST_PASSED'
  | 'MEISTER_TALENT'
  | 'TRUE_REGULAR'
  | 'FALSE_REGULAR'
  | 'FINAL_SUBMITTED';

export interface Message {
  title: string;
  text: string;
  status: Category;
}