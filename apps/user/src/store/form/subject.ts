import { SUBJECT_LIST } from '@/constants/form/data';
import { Subject } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const subjectListAtomState = atom<Subject[]>({
    key: 'subject-list',
    default: [...SUBJECT_LIST],
});

const newSubjectListAtomState = atom<Subject[]>({
    key: 'new-subject-list',
    default: [],
});

export const useSubjectStore = () => useRecoilState(subjectListAtomState);
export const useSubjectValueStore = () => useRecoilValue(subjectListAtomState);
export const useSetSubjectStore = () => useSetRecoilState(subjectListAtomState);

export const useNewSubjectStore = () => useRecoilState(newSubjectListAtomState);
export const useNewSubjectValueStore = () => useRecoilValue(newSubjectListAtomState);
export const useSetNewSubjectStore = () => useSetRecoilState(newSubjectListAtomState);
