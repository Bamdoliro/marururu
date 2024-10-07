import { useSetSubjectListStore } from '@/store';

const CORE_SUBJECTS = ['국어', '영어', '수학'];

export const useInput = (id: number) => {
  const setSubjectList = useSetSubjectListStore();

  const handleSubjectChange = (data: string, name: string) => {
    setSubjectList((prev) => {
      const updatedData = [...prev];
      const subject = updatedData[id];

      let newValue: string | null;
      let is미이수 = false;
      if (data === '미이수') {
        if (CORE_SUBJECTS.includes(subject.subjectName)) {
          newValue = 'C';
          is미이수 = true;
        } else {
          newValue = null;
        }
      } else {
        newValue = data;
      }

      updatedData[id] = {
        ...subject,
        [name]: newValue,
        is미이수: is미이수,
      };
      return updatedData;
    });
  };

  return { handleSubjectChange };
};
