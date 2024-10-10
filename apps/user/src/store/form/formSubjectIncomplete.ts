import type { Incomplete } from '@/types/form/client';
import { useRecoilState, atom, useSetRecoilState, useRecoilValue } from 'recoil';

const formSubjectIncomplete = atom<Incomplete>({
  key: 'form-Subject-Incomplete',
  default: {
    isIncomplete21: null,
    isIncomplete22: null,
    isIncomplete31: null,
  },
});

export const useFormSubjectIncompleteStore = () => useRecoilState(formSubjectIncomplete);
export const useSetmSubjectIncompleteStore = () =>
  useSetRecoilState(formSubjectIncomplete);
export const useSubjectIncompleteValueStore = () => useRecoilValue(formSubjectIncomplete);
