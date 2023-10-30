import { GED_SUBJECT_LIST } from '@/constants/form/data';
import type { Subject } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const GEDSubjectListAtomState = atom<Subject[]>({
  key: 'GED-subject-list',
  default: GED_SUBJECT_LIST,
});

const newGEDSubjectListAtomState = atom<Subject[]>({
  key: 'new-GED-subject-list',
  default: [],
});

export const useGEDSubjectListStore = () => useRecoilState(GEDSubjectListAtomState);
export const useGEDSubjectListValueStore = () => useRecoilValue(GEDSubjectListAtomState);
export const useSetGEDSubjectListStore = () => useSetRecoilState(GEDSubjectListAtomState);

export const useNewGEDSubjectListStore = () => useRecoilState(newGEDSubjectListAtomState);
export const useNewGEDSubjectListValueStore = () =>
  useRecoilValue(newGEDSubjectListAtomState);
export const useSetNewGEDSubjectListStore = () =>
  useSetRecoilState(newGEDSubjectListAtomState);
