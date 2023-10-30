import { useSetNew검정고시SubjectListStore } from '@/store';
import { ChangeEventHandler } from 'react';

export const useInput = (new검정고시SubjectIndex: number) => {
  const setNew검정고시SubjectList = useSetNew검정고시SubjectListStore();

  const handleNew검정고시SubjectDataChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { name, value } = e.target;

    setNew검정고시SubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[new검정고시SubjectIndex] = {
        ...updatedData[new검정고시SubjectIndex],
        [name]: value,
      };
      return updatedData;
    });
  };

  return { handleNew검정고시SubjectDataChange };
};

export const useDeleteNew검정고시Subject = () => {
  const setNew검정고시SubjectList = useSetNew검정고시SubjectListStore();

  const handleDeleteNew검정고시SubjectButtonClick = (id: number) => {
    setNew검정고시SubjectList((prev) => prev.filter((item) => item.id !== id));
  };

  return { handleDeleteNew검정고시SubjectButtonClick };
};
