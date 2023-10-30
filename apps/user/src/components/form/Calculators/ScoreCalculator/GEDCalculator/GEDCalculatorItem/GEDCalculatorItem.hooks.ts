import { useSetGEDSubjectListStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = (id: number) => {
  const setGEDSubjectList = useSetGEDSubjectListStore();

  const handleGEDSubjectDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setGEDSubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[id] = {
        ...updatedData[id],
        [name]: value,
      };
      return updatedData;
    });
  };

  return { handleGEDSubjectDataChange };
};
