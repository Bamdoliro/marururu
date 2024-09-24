import { SUBJECT_LIST } from '@/constants/form/data';
import type { Subject } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const subjectListAtomState = atom<Subject[]>({
  key: 'subject-list',
  default: SUBJECT_LIST,
});

const newSubjectListAtomState = atom<Subject[]>({
  key: 'new-subject-list',
  default: [],
});

export const useSubjectListStore = () => useRecoilState(subjectListAtomState);
export const useSubjectListValueStore = () => useRecoilValue(subjectListAtomState);
export const useSetSubjectListStore = () => useSetRecoilState(subjectListAtomState);

export const useNewSubjectListStore = () => {
  const [newSubjectList, setNewSubjectList] = useRecoilState(newSubjectListAtomState);

  const addNewSubject = (subjectName: string) => {
    const newSubject: Subject = {
      id: newSubjectList.length,
      subjectName: subjectName,
      achievementLevel21: '-',
      achievementLevel22: '-',
      achievementLevel31: '-',
      score: null,
    };

    setNewSubjectList((prevSubjects) => [...prevSubjects, newSubject]);
  };

  return [newSubjectList, addNewSubject];
};
export const useNewSubjectListValueStore = () => useRecoilValue(newSubjectListAtomState);
export const useSetNewSubjectListStore = () => useSetRecoilState(newSubjectListAtomState);
