import { useNewSubjectListStore } from '@/store';
import { Subject } from '@/types/form/client';
import { useRef } from 'react';

export const useAddNewSubject = () => {
  const [newSubjectList, setNewSubjectList] = useNewSubjectListStore();

  const newSubjectIdRef = useRef(newSubjectList.length);
  const handleAddNewSubjectButtonClick = () => {
    const newSubject: Subject = {
      id: newSubjectIdRef.current++,
      subjectName: '',
      achievementLevel21: null,
      achievementLevel22: null,
      achievementLevel31: null,
      score: null,
    };
    setNewSubjectList((prev) => [...prev, newSubject]);
  };

  return { handleAddNewSubjectButtonClick };
};
