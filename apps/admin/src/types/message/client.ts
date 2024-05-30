export type Category = 'RECEIVED' | 'REJECTED' | 'FIRST_PASSED' | 'PASSED';

export interface Message {
  title: string;
  text: string;
  status: Category;
}

export interface MessageDetail {
  text: string;
  status: Category;
}

export type MessageCategory = 'RECEIVED' | 'REJECTED' | 'FIRST_PASSED' | 'PASSED';
