import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const isSecondRoundResultEditingAtomState = atom<boolean>({
  key: 'is-second-round-result-editing',
  default: false,
});

export const useIsSecondRoundResultEditingStore = () =>
  useRecoilState(isSecondRoundResultEditingAtomState);
export const useIsSecondRoundResultEditingValueStore = () =>
  useRecoilValue(isSecondRoundResultEditingAtomState);
export const useSetIsSecondRoundResultEditingStore = () =>
  useSetRecoilState(isSecondRoundResultEditingAtomState);
