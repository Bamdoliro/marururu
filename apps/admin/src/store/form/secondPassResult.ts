import { PassStatusType } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const secondPassResultAtomState = atom<Record<number, PassStatusType>>({
    key: 'second-pass-result',
    default: {},
});

export const useSecondPassResultStore = () => useRecoilState(secondPassResultAtomState);
export const useSecondPassResultValueStore = () => useRecoilValue(secondPassResultAtomState);
export const useSetSecondPassResultStore = () => useSetRecoilState(secondPassResultAtomState);
