import { useNewGEDSubjectListStore } from '@/store';
import type { Subject } from '@/types/form/client';
import { useRef } from 'react';

export const useAddNewGEDSubject = () => {
  const [newGEDSubjectList, setNewGEDSubjectList] = useNewGEDSubjectListStore();

  const newGEDSubjectIdRef = useRef(newGEDSubjectList.length);
  const handleAddNewGEDSubject = () => {
    if (newGEDSubjectList.length >= 1) {
      alert('선택과목은 하나만 추가할 수 있습니다.');
      return;
    }
    const newSubject: Subject = {
      id: newGEDSubjectIdRef.current++,
      subjectName: '',
      achievementLevel21: null,
      achievementLevel22: null,
      achievementLevel31: null,
      score: 0,
      is미이수: null,
    };
    setNewGEDSubjectList((prev) => [...prev, newSubject]);
  };

  return { handleAddNewGEDSubject };
};
