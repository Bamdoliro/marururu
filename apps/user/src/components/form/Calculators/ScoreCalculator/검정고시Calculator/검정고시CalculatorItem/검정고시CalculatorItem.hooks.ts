import { useSet검정고시SubjectListStore } from '@/store';
import { ChangeEventHandler } from 'react';

export const useInput = (id: number) => {
  const set검정고시SubjectList = useSet검정고시SubjectListStore();

  const handle검정고시SubjectDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    set검정고시SubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[id] = {
        ...updatedData[id],
        [name]: value,
      };
      return updatedData;
    });
  };

  return { handle검정고시SubjectDataChange };
};
