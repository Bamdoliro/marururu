import { useSetNewSubjectListStore } from '@/store';
import { ChangeEventHandler } from 'react';

export const useInput = (newSubjectIndex: number) => {
  const setNewSubjectList = useSetNewSubjectListStore();

  const handleNewSubjectDataChange = (data: string, name: string) => {
    setNewSubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[newSubjectIndex] = {
        ...updatedData[newSubjectIndex],
        [name]: data === '-' ? null : data,
      };
      return updatedData;
    });
  };

  const handleNewSubjectNameDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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

  return { handleNewSubjectDataChange, handleNewSubjectNameDataChange };
};

export const useDeleteNewSubject = () => {
  const setNewSubjectList = useSetNewSubjectListStore();

  const handleDeleteNewSubjectButtonClick = (id: number) => {
    setNewSubjectList((prev) => prev.filter((item) => item.id !== id));
  };

  return { handleDeleteNewSubjectButtonClick };
};
