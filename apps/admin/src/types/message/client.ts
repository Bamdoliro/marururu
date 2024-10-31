export type Category =
  | 'SUBMITTED'
  | 'APPROVED'
  | 'REJECTED'
  | 'RECEIVED'
  | 'FIRST_PASSED'
  | 'MEISTER_TALENT'
  | 'TRUE_REGULAR'
  | 'FALSE_REGULAR'
  | 'PASSED';

export interface Message {
  title: string;
  text: string;
  status: Category;
}
