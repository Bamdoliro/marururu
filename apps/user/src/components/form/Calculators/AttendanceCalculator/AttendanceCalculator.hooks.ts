import { useSetFormStore } from '@/store';
import type { AttendanceName } from '@/types/form/client';
import type { ChangeEventHandler } from 'react';

export const useInput = () => {
  const setForm = useSetFormStore();

  const handleAttendanceInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const [attendanceName, countName] = name.split('-');

    setForm((prev) => ({
      ...prev,
      grade: {
        ...prev.grade,
        [attendanceName]: {
          ...prev.grade[attendanceName as AttendanceName],
          [countName]: Number(value),
        },
      },
    }));
  };

  return { handleAttendanceInfoDataChange };
};
