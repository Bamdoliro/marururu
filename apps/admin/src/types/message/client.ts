export type Category =
  | 'APPROVED'
  | 'REJECTED'
  | 'FIRST_PASSED'
  | 'MEISTER_TALENT'
  | 'TRUE_REGULAR'
  | 'FALSE_REGULAR'
  | 'FINAL_SUBMITTED'
  | 'TOTAL_SCORE_DESC';

export interface Message {
  title: string;
  text: string;
  status: Category;
}
