import { 검정고시_SUBJECT_LIST } from '@/constants/form/data';
import { Subject } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const 검정고시SubjectListAtomState = atom<Subject[]>({
    key: '검정고시-subject-list',
    default: 검정고시_SUBJECT_LIST,
});

const new검정고시SubjectListAtomState = atom<Subject[]>({
    key: 'new-검정고시-subject-list',
    default: [],
});

export const use검정고시SubjectListStore = () => useRecoilState(검정고시SubjectListAtomState);
export const use검정고시SubjectListValueStore = () => useRecoilValue(검정고시SubjectListAtomState);
export const useSet검정고시SubjectListStore = () => useSetRecoilState(검정고시SubjectListAtomState);

export const useNew검정고시SubjectListStore = () => useRecoilState(new검정고시SubjectListAtomState);
export const useNew검정고시SubjectListValueStore = () =>
    useRecoilValue(new검정고시SubjectListAtomState);
export const useSetNew검정고시SubjectListStore = () =>
    useSetRecoilState(new검정고시SubjectListAtomState);
