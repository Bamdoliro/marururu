import { useSetFormStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = () => {
  const setForm = useSetFormStore();

  const handleCertificateListChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked, value } = e.target;

    setForm((prev) => ({
      ...prev,
      grade: {
        ...prev.grade,
        certificateList: checked
          ? [...(prev.grade.certificateList ?? []), value]
          : prev.grade.certificateList.filter((certificate) => certificate !== value),
      },
    }));
  };

  return { handleCertificateListChange };
};
