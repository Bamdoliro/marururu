export type ResultStep = 'MAIN' | 'RESULT';

export type ResultOption = 'FIRST' | 'FINAL';

export interface Result {
  id: number;
  name: string;
  type: string;
  passed: boolean;
  changedToRegular: boolean;
}
