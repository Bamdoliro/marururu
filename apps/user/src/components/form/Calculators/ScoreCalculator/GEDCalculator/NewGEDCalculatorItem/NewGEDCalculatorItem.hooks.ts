import { useSetNewGEDSubjectListStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = (newGEDSubjectIndex: number) => {
  const setNewGEDSubjectList = useSetNewGEDSubjectListStore();

  const handleNewGEDSubjectDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setNewGEDSubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[newGEDSubjectIndex] = {
        ...updatedData[newGEDSubjectIndex],
        [name]: value,
      };
      return updatedData;
    });
  };

  return { handleNewGEDSubjectDataChange };
};

export const useDeleteNewGEDSubject = () => {
  const setNewGEDSubjectList = useSetNewGEDSubjectListStore();

  const handleDeleteNewGEDSubjectButtonClick = (id: number) => {
    setNewGEDSubjectList((prev) => prev.filter((item) => item.id !== id));
  };

  return { handleDeleteNewGEDSubjectButtonClick };
};
