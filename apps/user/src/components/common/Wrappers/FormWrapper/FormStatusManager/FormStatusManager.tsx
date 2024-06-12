import { useEffect } from 'react';
import { useFormStatusQuery } from '@/services/form/queries';
import { useSetFormStepStore } from '@/store';

const FormStatusManager = () => {
  const { data: formStatusData } = useFormStatusQuery();
  const setFormStep = useSetFormStepStore();

  useEffect(() => {
    if (formStatusData) {
      const { status } = formStatusData;
      switch (status) {
        case 'SUBMITTED':
          setFormStep('초안제출완료');
          break;
        case 'FINAL_SUBMITTED':
          setFormStep('최종제출완료');
          break;
        default:
          break;
      }
    }
  }, [formStatusData, setFormStep]);

  return null;
};

export default FormStatusManager;
