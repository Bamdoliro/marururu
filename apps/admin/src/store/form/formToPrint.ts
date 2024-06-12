import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const formToPrintAtomState = atom<Record<number, boolean>>({
  key: 'form-to-print',
  default: {},
});

export const useFormToPrintStore = () => useRecoilState(formToPrintAtomState);
export const useFormToPrintValueStore = () => useRecoilValue(formToPrintAtomState);
export const useSetFormToPrintStore = () => useSetRecoilState(formToPrintAtomState);
