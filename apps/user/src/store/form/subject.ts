import { SUBJECT_LIST_DATA } from '@/constants/service/form';
import { Subject } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const subjectListAtomState = atom<Subject[]>({
    key: 'subject-list',
    default: [...SUBJECT_LIST_DATA],
});

const newSubjectListAtomState = atom<Subject[]>({
    key: 'new-subject-list',
    default: [],
});

export const useNewSubjectStore = () => useRecoilState(newSubjectListAtomState);
export const useNewSubjectValueStore = () => useRecoilValue(newSubjectListAtomState);
export const useNewSubjectSetStore = () => useRecoilValue(newSubjectListAtomState);

export const useSubjectStore = () => useRecoilState(subjectListAtomState);
export const useSubjectValueStore = () => useRecoilValue(subjectListAtomState);
export const useSubjectSetStore = () => useRecoilValue(subjectListAtomState);
