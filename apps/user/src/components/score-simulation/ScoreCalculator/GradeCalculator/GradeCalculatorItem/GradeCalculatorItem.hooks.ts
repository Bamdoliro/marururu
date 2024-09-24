import { useSetSubjectListStore } from '@/store';

export const useInput = (id: number) => {
  const setSubjectList = useSetSubjectListStore();

  const handleSubjectChange = (data: string, name: string) => {
    setSubjectList((prev) => {
      const updatedData = [...prev];
      updatedData[id] = {
        ...updatedData[id],
        [name]: data === '미이수' ? null : data,
      };
      return updatedData;
    });
  };

  return { handleSubjectChange };
};
