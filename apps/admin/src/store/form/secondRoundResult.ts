import type { PassStatusType } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const secondRoundResultAtomState = atom<Record<number, PassStatusType>>({
  key: 'second-round-result',
  default: {},
});

export const useSecondRoundResultStore = () => useRecoilState(secondRoundResultAtomState);
export const useSecondRoundResultValueStore = () =>
  useRecoilValue(secondRoundResultAtomState);
export const useSetSecondRoundResultStore = () =>
  useSetRecoilState(secondRoundResultAtomState);
