'use client';

import { AppLayout } from '@/layouts';
import styled from 'styled-components';
import { flex } from '@maru/utils';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { useFormStatusQuery } from '@/services/form/queries';
import {
  CallForInquiries,
  CheckForm,
  FormStatus,
  PrintAdmission,
  WriteNextForm,
} from '@/components/form-management';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import {
  이차_전형_끝,
  이차_전형_시작,
  일차_합격_발표,
  입학_등록_기간,
  제출_마감_날짜,
  제출_시작_날짜,
} from '@/constants/form/constant';
import { Suspense } from '@suspensive/react';

dayjs.extend(isBetween);

const FormManagementPage = () => {
  const { data: handleFormStatus } = useFormStatusQuery();
  const now = dayjs();

  const renderFormManager = () => {
    if (now.isBetween(제출_시작_날짜, 제출_마감_날짜)) {
      if (handleFormStatus?.status === 'RECEIVED') {
        return (
          <Row gap={24} alignItems="center">
            <Column gap={24}>
              <FormStatus status={handleFormStatus?.status} />
              <CheckForm />
            </Column>
            <CallForInquiries mode="long" />
          </Row>
        );
      }
      return (
        <Row gap={24} alignItems="center">
          <Column gap={24}>
            <FormStatus status={handleFormStatus?.status} />
            <CheckForm />
          </Column>
          <Column gap={24}>
            <WriteNextForm />
            <CallForInquiries mode="small" />
          </Column>
        </Row>
      );
    } else if (now.isBetween(일차_합격_발표, 이차_전형_시작)) {
      return (
        <Row gap={24} alignItems="center">
          <Column gap={24}>
            <FormStatus status={handleFormStatus?.status} />
            <PrintAdmission />
          </Column>
          <CallForInquiries mode="long" />
        </Row>
      );
    } else if (now.isBetween(이차_전형_끝, 입학_등록_기간)) {
      return (
        <Row gap={24} alignItems="center">
          <FormStatus status={handleFormStatus?.status} />
          <CallForInquiries mode="small" />
        </Row>
      );
    } else if (now.isBetween(제출_마감_날짜, 일차_합격_발표)) {
      return (
        <Row gap={24} alignItems="center">
          <FormStatus status={handleFormStatus?.status} />
          <CallForInquiries mode="small" />
        </Row>
      );
    }
    return null;
  };

  return (
    <AppLayout header footer>
      <StyledFormManagementPage>
        <Text fontType="H1" color={color.gray900}>
          원서 관리
        </Text>
        <Suspense.CSROnly>{renderFormManager()}</Suspense.CSROnly>
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
