import { useSetSubjectListStore } from '@/store';
import { useSetmSubjectIncompleteStore } from '@/store';

const CORE_SUBJECTS = ['국어', '영어', '수학'];

export const useInput = (id: number) => {
  const setSubjectList = useSetSubjectListStore();
  const setSubjectIncomplete = useSetmSubjectIncompleteStore();

  const handleSubjectChange = (data: string, name: string) => {
    let isIncomplete = false;
    let subjectName = '';
    setSubjectList((prev) => {
      const updatedData = [...prev];
      const subject = updatedData[id];

      let newValue: string | null;
      subjectName = subject.subjectName;
      if (data === '미이수') {
        if (CORE_SUBJECTS.includes(subjectName)) {
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
      [subjectName]: {
        ...prev[subjectName],
        [name === 'achievementLevel21'
          ? 'isIncomplete21'
          : name === 'achievementLevel22'
          ? 'isIncomplete22'
          : 'isIncomplete31']: isIncomplete,
      },
    }));
  };

  return { handleSubjectChange };
};
