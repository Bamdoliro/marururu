import type { RegistFormDocument } from '@/types/regist/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const registFormAtomState = atom<RegistFormDocument>({
  key: 'regist-form',
  default: {
    fileName: '',
    formUrl: '',
  },
});

export const useRegistFormStore = () => useRecoilState(registFormAtomState);
export const useRegistFormValueStore = () => useRecoilValue(registFormAtomState);
export const useSetRegistFormStore = () => useSetRecoilState(registFormAtomState);
