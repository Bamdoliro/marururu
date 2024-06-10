'use client';

import { AppLayout } from '@/layouts';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import {
  CallForInquiries,
  FormStatus,
  CheckForm,
  WriteNextForm,
} from '@/components/form-management';

const FormManagementPage = () => {
  return (
    <AppLayout header footer>
      <StyledFormManagementPage>
        <Text fontType="H1" color={color.gray900}>
          원서 관리
        </Text>
        <Row gap={48} alignItems="center">
          <Column gap={30}>
            <FormStatus />
            <CheckForm />
          </Column>
          <Column gap={30}>
            <WriteNextForm />
            <CallForInquiries />
          </Column>
        </Row>
      </StyledFormManagementPage>
    </AppLayout>
  );
};

export default FormManagementPage;

const StyledFormManagementPage = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  gap: 48px;
  width: 100%;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 82px 204px 240px;
`;
