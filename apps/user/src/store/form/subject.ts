import { Subject } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const newSubjectListAtomState = atom<Subject[]>({
    key: 'new-subject-list',
    default: [],
});

export const useNewSubjectStore = () => useRecoilState(newSubjectListAtomState);
export const useNewSubjectValueStore = () => useRecoilValue(newSubjectListAtomState);
export const useNewSubjectSetStore = () => useRecoilValue(newSubjectListAtomState);
