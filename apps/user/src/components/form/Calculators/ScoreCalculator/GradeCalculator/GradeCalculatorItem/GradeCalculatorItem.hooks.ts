import { useSetSubjectListStore } from '@/store';
import { useSetmSubjectIncompleteStore } from '@/store';

const CORE_SUBJECTS = ['국어', '영어', '수학'];

export const useInput = (id: number) => {
  const setSubjectList = useSetSubjectListStore();
  const setSubjectIncomplete = useSetmSubjectIncompleteStore();
  console.log(id);

  const handleSubjectChange = (data: string, name: string) => {
    let isIncomplete = false;
    setSubjectList((prev) => {
      const updatedData = [...prev];
      const subject = updatedData[id];

      let newValue: string | null;
      if (data === '미이수') {
        if (CORE_SUBJECTS.includes(subject.subjectName)) {
          newValue = 'C';
          isIncomplete = true;
        } else {
          newValue = null;
        }
      } else {
        newValue = data;
      }

      updatedData[id] = {
        ...subject,
        [name]: newValue,
      };
      return updatedData;
    });

    setSubjectIncomplete((prev) => ({
      ...prev,
      [name === 'achievementLevel21'
        ? 'Incomplete21'
        : name === 'achievementLevel22'
        ? 'Incomplete22'
        : name === 'achievementLevel31'
        ? 'Incomplete31'
        : '']: isIncomplete,
    }));
  };

  return { handleSubjectChange };
};
