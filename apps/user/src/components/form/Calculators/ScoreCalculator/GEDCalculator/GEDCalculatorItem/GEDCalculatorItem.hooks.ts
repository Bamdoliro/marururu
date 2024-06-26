import { useSetGEDSubjectListStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = (id: number) => {
  const setGEDSubjectList = useSetGEDSubjectListStore();

  const handleGEDSubjectChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.replace(/^0+/, '');

    const processValue =
      Number(value) == 100
        ? 100
        : value.length > 2
        ? Number(trimmedValue.slice(1))
        : Number(trimmedValue);

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
