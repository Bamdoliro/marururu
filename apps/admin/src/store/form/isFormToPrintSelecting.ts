import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const isFormToPrintSelectingAtomState = atom<boolean>({
  key: 'is-form-to-print-selecting',
  default: false,
});

export const useIsFormToPrintSelectingStore = () =>
  useRecoilState(isFormToPrintSelectingAtomState);
export const useIsFormToPrintSelectingValueStore = () =>
  useRecoilValue(isFormToPrintSelectingAtomState);
export const useSetIsFormToPrintSelectingStore = () =>
  useSetRecoilState(isFormToPrintSelectingAtomState);
