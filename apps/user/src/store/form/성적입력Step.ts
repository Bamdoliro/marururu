import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import type { 성적입력Step } from '@/types/form/client';

const 성적입력StepAtomState = atom<성적입력Step>({
  key: '성적입력-step',
  default: '교과성적',
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const use성적입력StepStore = () => useRecoilState(성적입력StepAtomState);
export const useSet성적입력StepStore = () => useSetRecoilState(성적입력StepAtomState);
