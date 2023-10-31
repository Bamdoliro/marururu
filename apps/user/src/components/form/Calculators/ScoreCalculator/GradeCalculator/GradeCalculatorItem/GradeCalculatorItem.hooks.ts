import { useSetSubjectListStore } from '@/store';

export const useInput = (id: number) => {
  const setSubjectList = useSetSubjectListStore();

  const handleSubjectChange = (data: string, name: string) => {
    setSubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[id] = {
        ...updatedData[id],
        [name]: data === '-' ? null : data,
      };
      return updatedData;
    });
  };

  return { handleSubjectChange };
};
