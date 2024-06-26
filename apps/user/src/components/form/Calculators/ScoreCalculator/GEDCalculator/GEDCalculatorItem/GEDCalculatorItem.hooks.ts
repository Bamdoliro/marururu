import { useSetGEDSubjectListStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = (id: number) => {
  const setGEDSubjectList = useSetGEDSubjectListStore();

  const handleGEDSubjectChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const processValue = Math.min(Number(value), 100);
    setGEDSubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[id] = {
        ...updatedData[id],
        [name]: processValue,
      };
      return updatedData;
    });
  };

  return { handleGEDSubjectChange };
};
