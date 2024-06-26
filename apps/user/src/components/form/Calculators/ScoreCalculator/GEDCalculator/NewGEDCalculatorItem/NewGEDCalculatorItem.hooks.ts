import { useSetNewGEDSubjectListStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = (newGEDSubjectIndex: number) => {
  const setNewGEDSubjectList = useSetNewGEDSubjectListStore();

  const handleNewGEDSubjectChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (name === 'subjectName') {
      setNewGEDSubjectList((prev) => {
        const updatedData = [...prev];
        updatedData[newGEDSubjectIndex] = {
          ...updatedData[newGEDSubjectIndex],
          [name]: value,
        };
        return updatedData;
      });
    } else if (name === 'score') {
      const trimmedValue = value.replace(/^0+/, '');

      const processValue =
        Number(value) == 100
          ? 100
          : value.length > 2
          ? Number(trimmedValue.slice(1))
          : Number(trimmedValue);

      setNewGEDSubjectList((prev) => {
        const updatedData = [...prev];
        updatedData[newGEDSubjectIndex] = {
          ...updatedData[newGEDSubjectIndex],
          [name]: processValue,
        };
        return updatedData;
      });
    }
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
