import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const isSecondPassResultEditingAtomState = atom<boolean>({
    key: 'is-editing',
    default: false,
});

export const useIsSecondPassResultEditingStore = () =>
    useRecoilState(isSecondPassResultEditingAtomState);
export const useIsSecondPassResultEditingValueStore = () =>
    useRecoilValue(isSecondPassResultEditingAtomState);
export const useSetIsSecondPassResultEditingStore = () =>
    useSetRecoilState(isSecondPassResultEditingAtomState);
