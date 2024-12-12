'use client';

import {
  Explain,
  FileUploader,
  RegistFormLoader,
  SubmitButton,
} from '@/components/regist';
import { useOpenFileUploader } from '@/hooks';
import { AppLayout } from '@/layouts';
import {
  useRegistFormValueStore,
  useSetRegistFormStore,
} from '@/store/regist/registForm';
import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import { useInput } from './regist.hooks';
import { useBooleanState } from '@maru/hooks';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/common/constant';
import { useFormStatusQuery } from '@/services/form/queries';

const RegistPage = () => {
  const router = useRouter();
  const registForm = useRegistFormValueStore();
  const setRegistForm = useSetRegistFormStore();
  const { data } = useFormStatusQuery();

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

  const handleButtonClick = () => {
    if (!isUploadSuccessful) {
      alert('파일을 업로드해주세요.');
    } else {
      alert('서류가 제출이 되었습니다.');
      router.replace(ROUTES.MAIN);
      setRegistForm({ fileName: '', formUrl: '' });
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
              onClick={handleButtonClick}
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
