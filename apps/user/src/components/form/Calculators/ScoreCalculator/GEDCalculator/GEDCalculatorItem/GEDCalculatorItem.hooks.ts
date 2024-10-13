import { useSetGEDSubjectListStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = (id: number) => {
  const setGEDSubjectList = useSetGEDSubjectListStore();

  const handleGEDSubjectChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const numericValue = Number(value);

    if (numericValue > 100) return;

    const trimmedValue = numericValue !== 0 ? value.replace(/^0+/, '') : value;

    const processValue =
      numericValue === 100 ? 100 : numericValue >= 10 ? numericValue : trimmedValue;

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
