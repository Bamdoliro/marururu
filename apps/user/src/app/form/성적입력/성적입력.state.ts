import { SUBJECT_LIST_DATA } from '@/constants/service/form';
import { Subject } from '@/types/form/client';
import { atom, useRecoilState } from 'recoil';

const subjectListAtomState = atom<Subject[]>({
    key: 'subject-list',
    default: [...SUBJECT_LIST_DATA],
});

const newSubjectListAtomState = atom<Subject[]>({
    key: 'new-subject-list',
    default: [],
});

export const useStudentSubjectListState = () => {
    const [subjectList, setSubjectList] = useRecoilState(subjectListAtomState);
    const [newSubjectList, setNewSubjectList] = useRecoilState(newSubjectListAtomState);

    return { subjectList, setSubjectList, newSubjectList, setNewSubjectList };
};
