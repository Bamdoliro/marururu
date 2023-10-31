'use client';

import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore } from '@/store';
import { useInterval } from '@toss/react';
import type { ReactNode } from 'react';
import FormStatusManager from './FormStatusManager/FormStatusManager';
import SaveFormManager from './SaveFormManager/SaveFormManager';

interface Props {
  children: ReactNode;
}

const FormWrapper = ({ children }: Props) => {
  const { saveFormMutate } = useSaveFormMutation();
  const form = useFormValueStore();

  useInterval(() => {
    saveFormMutate(form);
  }, 6000 * 10 * 2);

  return (
    <>
      <FormStatusManager />
      <SaveFormManager />
      {children}
    </>
  );
};

export default FormWrapper;
