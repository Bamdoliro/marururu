import { FormListType } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const formListTypeAtomState = atom<FormListType>({
    key: 'form-type',
    default: '모두 보기',
});

export const useFormListTypeStore = () => useRecoilState(formListTypeAtomState);
export const useFormListTypeValueStore = () => useRecoilValue(formListTypeAtomState);
export const useSetFormListTypeStore = () => useSetRecoilState(formListTypeAtomState);
