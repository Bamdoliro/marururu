import { useSetNewGEDSubjectListStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = (newGEDSubjectIndex: number) => {
  const setNewGEDSubjectList = useSetNewGEDSubjectListStore();

  const handleNewGEDSubjectChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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

  return { handleNewGEDSubjectChange };
};

export const useDeleteNewGEDSubject = () => {
  const setNewGEDSubjectList = useSetNewGEDSubjectListStore();

  const handleDeleteNewGEDSubject = (id: number) => {
    setNewGEDSubjectList((prev) => prev.filter((item) => item.id !== id));
  };

  return { handleDeleteNewGEDSubject };
};
