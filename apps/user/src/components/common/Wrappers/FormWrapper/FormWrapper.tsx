'use client';

import type { ReactNode } from 'react';
import FormStatusManager from './FormStatusManager/FormStatusManager';
import SaveFormManager from './SaveFormManager/SaveFormManager';

interface Props {
  children: ReactNode;
}

const FormWrapper = ({ children }: Props) => {
  return (
    <>
      <FormStatusManager />
      <SaveFormManager />
      {children}
    </>
  );
};

export default FormWrapper;
