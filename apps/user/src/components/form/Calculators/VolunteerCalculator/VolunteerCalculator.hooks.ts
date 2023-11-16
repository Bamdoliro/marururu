import { useSetFormStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = () => {
  const setForm = useSetFormStore();

  const handleVolunteerTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, grade: { ...prev.grade, [name]: Number(value) } }));
  };
  return { handleVolunteerTimeChange };
};
