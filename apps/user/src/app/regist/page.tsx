'use client';

import {
  Explain,
  FileUploader,
  RegistFormLoader,
  SubmitButton,
} from '@/components/regist';
import { useOpenFileUploader } from '@/hooks';
import { AppLayout } from '@/layouts';
import { useRegistFormValueStore } from '@/store/regist/registForm';
import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import { useChangeFormEnterAction, useInput } from './regist.hooks';
import { useBooleanState } from '@maru/hooks';
import { useFormStatusQuery } from '@/services/form/queries';

const RegistPage = () => {
  const registForm = useRegistFormValueStore();
  const { data } = useFormStatusQuery();
  const { handleChangeFormEnter } = useChangeFormEnterAction();

  const { setTrue: openPdfGeneratedLoader, setFalse: closePdfGeneratedLoader } =
    useBooleanState();
  const { openFileUploader: openPdfFileUploader, ref: pdfFileUploaderRef } =
    useOpenFileUploader();

  const { handleFormDocumentChange, isUploadSuccessful, isLoading } = useInput(
    openPdfGeneratedLoader,
    closePdfGeneratedLoader
  );

  const onCheckPassFileUploader = () => {
    if (!(data?.status === 'PASSED')) {
      alert('최종 합격자만 업로드 가능합니다.');
    } else {
      openPdfFileUploader();
    }
  };

  return (
    <AppLayout header footer>
      <RegistFormLoader isOpen={isLoading} />
      <StyledRegistPage>
        <Column alignItems="left" gap={64}>
          <Explain />
          <Column alignItems="left" gap={100}>
            <FileUploader
              onClick={onCheckPassFileUploader}
              onChange={handleFormDocumentChange}
              document={registForm.fileName}
              ref={pdfFileUploaderRef}
            />
            <SubmitButton
              onClick={handleChangeFormEnter}
              styleType={
                !registForm.fileName || !isUploadSuccessful ? 'DISABLED' : 'PRIMARY'
              }
            />
          </Column>
        </Column>
      </StyledRegistPage>
    </AppLayout>
  );
};

export default RegistPage;

const StyledRegistPage = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 82px 20% 240px;
`;
