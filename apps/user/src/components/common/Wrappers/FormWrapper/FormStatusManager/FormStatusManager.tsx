import { useEffect } from 'react';
import { useFormStatusQuery } from '@/services/form/queries';
import { useSetFormStepStore } from '@/store';

const FormStatusManager = () => {
  const { data: formStatusData } = useFormStatusQuery();
  const setFormStep = useSetFormStepStore();

  useEffect(() => {
    if (formStatusData) {
      const { status } = formStatusData;
      if (status === 'SUBMITTED') setFormStep('초안제출완료');
      else if (
        status === 'RECEIVED' ||
        status === 'APPROVED' ||
        status === 'FINAL_SUBMITTED'
      )
        setFormStep('최종제출완료');
    }
  }, [formStatusData, setFormStep]);

  return null;
};

export default FormStatusManager;
