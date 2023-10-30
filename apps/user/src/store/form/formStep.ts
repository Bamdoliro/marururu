import type { FormStep } from '@/types/form/client';
import { useRecoilState, atom, useSetRecoilState, useRecoilValue } from 'recoil';

const formStepAtomState = atom<FormStep>({
  key: 'form-step',
  default: '지원자정보',
});

export const useFormStepStore = () => useRecoilState(formStepAtomState);
export const useSetFormStepStore = () => useSetRecoilState(formStepAtomState);
export const useFormStepValueStore = () => useRecoilValue(formStepAtomState);
