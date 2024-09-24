import { useSetNewSubjectListStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = (newSubjectIndex: number) => {
  const setNewSubjectList = useSetNewSubjectListStore();

  const handleNewSubjectChange = (data: string, name: string) => {
    setNewSubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[newSubjectIndex] = {
        ...updatedData[newSubjectIndex],
        [name]: data === '미이수' || data === '-' ? null : data,
      };
      return updatedData;
    });
  };

  const handleNewSubjectNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setNewSubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[newSubjectIndex] = {
        ...updatedData[newSubjectIndex],
        [name]: value,
      };
      return updatedData;
    });
  };

  return { handleNewSubjectChange, handleNewSubjectNameChange };
};

export const useDeleteNewSubject = () => {
  const setNewSubjectList = useSetNewSubjectListStore();

  const handleDeleteNewSubject = (id: number) => {
    setNewSubjectList((prev) => prev.filter((item) => item.id !== id));
  };

  return { handleDeleteNewSubject };
};
