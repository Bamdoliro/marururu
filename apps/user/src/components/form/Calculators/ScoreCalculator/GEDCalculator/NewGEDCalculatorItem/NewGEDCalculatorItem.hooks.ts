import { useSetNewGEDSubjectListStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = (newGEDSubjectIndex: number) => {
  const setNewGEDSubjectList = useSetNewGEDSubjectListStore();

  const handleNewGEDSubjectChange = (value: string) => {
    setNewGEDSubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[newGEDSubjectIndex] = {
        ...updatedData[newGEDSubjectIndex],
        subjectName: value,
      };
      return updatedData;
    });
  };

  const handleScoreChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.replace(/^0+/, '');

    const processValue =
      Number(value) === 100
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
  };

  return { handleNewGEDSubjectChange, handleScoreChange };
};

export const useDeleteNewGEDSubject = () => {
  const setNewGEDSubjectList = useSetNewGEDSubjectListStore();

  const handleDeleteNewGEDSubject = (id: number) => {
    setNewGEDSubjectList((prev) => prev.filter((item) => item.id !== id));
  };

  return { handleDeleteNewGEDSubject };
};
