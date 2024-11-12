'use client';

import {
  Explain,
  ExportFormButton,
  FileUploader,
  SubmitButton,
} from '@/components/regist';
import { AppLayout } from '@/layouts';
import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

const RegistPage = () => {
  return (
    <AppLayout header footer>
      <StyledRegistPage>
        <Column alignItems="left" gap={64}>
          <Column alignItems="left" gap={36}>
            <Explain />
            <ExportFormButton />
          </Column>
          <Column alignItems="left" gap={100}>
            <FileUploader />
            <SubmitButton />
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
