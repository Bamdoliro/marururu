import { useSetFormStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = () => {
  const setForm = useSetFormStore();

  const handleCertificateListChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked, value } = e.target;

    setForm((prev) => {
      const { grade } = prev;
      const certificateList = checked
        ? [...grade.certificateList, value]
        : grade.certificateList.filter((certificate) => certificate !== value);

      return {
        ...prev,
        grade: {
          ...grade,
          certificateList,
        },
      };
    });
  };

  return { handleCertificateListChange };
};
