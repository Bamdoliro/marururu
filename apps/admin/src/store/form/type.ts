import type { FormListType, FormListSortingType } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const formListTypeAtomState = atom<FormListType>({
  key: 'form-type',
  default: '모두 보기',
});

const formListSortingTypeAtomState = atom<FormListSortingType>({
  key: 'form-sort-type',
  default: {
    status: null,
    type: null,
    sort: null,
  },
});

export const useFormListTypeStore = () => useRecoilState(formListTypeAtomState);
export const useFormListTypeValueStore = () => useRecoilValue(formListTypeAtomState);
export const useSetFormListTypeStore = () => useSetRecoilState(formListTypeAtomState);

export const useFormListSortingTypeStore = () =>
  useRecoilState(formListSortingTypeAtomState);
export const useFormListSortingTypeValueStore = () =>
  useRecoilValue(formListSortingTypeAtomState);
export const useSetFormListSortingTypeStore = () =>
  useSetRecoilState(formListSortingTypeAtomState);
