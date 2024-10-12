'use client';

import styled from 'styled-components';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { useFormStatusQuery } from '@/services/form/queries';
import dayjs from 'dayjs';
import { Suspense } from '@suspensive/react';
import {
  BigFormStatus,
  CallForInquiries,
  CheckForm,
  DownloadRecipt,
  FormStatus,
  PrintAdmission,
  SmallCallForInquiries,
  WriteNextForm,
} from '@/components/form-management';
import isBetween from 'dayjs/plugin/isBetween';
import {
  이차_전형_시작,
  일차_합격_발표,
  입학_등록_기간_마감,
  제출_시작_날짜,
} from '@/constants/form/constant';
import { AppLayout } from '@/layouts';
import { flex } from '@maru/utils';
import { useEffect, useState } from 'react';
import { Cookie } from '@/apis/cookie/cookie';
import { refreshToken } from '@/apis/token';
import { useRouter } from 'next/navigation';

dayjs.extend(isBetween);

const FormManagementPage = () => {
  const { data: handleFormStatus } = useFormStatusQuery();
  const now = dayjs();
  const router = useRouter();
  const [hasRefreshed, setHasRefreshed] = useState(false);

  useEffect(() => {
    const refreshIfNeeded = async () => {
      if (hasRefreshed) return;

      const accessToken = localStorage.getItem('accessToken');
      const refreshTokenValue = Cookie.getItem('refresh-token');

      if (!accessToken && refreshTokenValue) {
        await refreshToken();
        setHasRefreshed(true);
      }
    };

    refreshIfNeeded();
  }, [router, hasRefreshed]);

  const FormManagementComponent = () => {
    if (now.isBetween(제출_시작_날짜, 일차_합격_발표)) {
      return (
        <Row alignItems="top" gap={30}>
          <Column alignItems="left" gap={26}>
            <FormStatus status={handleFormStatus?.status} />
            <SmallCallForInquiries />
          </Column>
          <Column alignItems="left" gap={26}>
            <WriteNextForm />
            <CheckForm />
            <DownloadRecipt />
          </Column>
        </Row>
      );
    } else if (now.isBetween(일차_합격_발표, 이차_전형_시작)) {
      return (
        <Row alignItems="top" gap={30}>
          <Column alignItems="left" gap={26}>
            <FormStatus status={handleFormStatus?.status} />
            <PrintAdmission />
          </Column>
          <CallForInquiries />
        </Row>
      );
    } else if (now.isBetween(이차_전형_시작, 입학_등록_기간_마감)) {
      return (
        <Row alignItems="top" gap={30}>
          <BigFormStatus status={handleFormStatus?.status} />
          <CallForInquiries />
        </Row>
      );
    }
    return null;
  };

  return (
    <AppLayout header footer>
      <StyledFormManagementPage>
        <Column alignItems="left">
          <Text fontType="H1" color={color.gray900}>
            원서 관리
          </Text>
          <Column height={36}> </Column>
          <Suspense.CSROnly>{FormManagementComponent()}</Suspense.CSROnly>
        </Column>
      </StyledFormManagementPage>
    </AppLayout>
  );
};

export default FormManagementPage;

const StyledFormManagementPage = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 82px 204px 240px;
`;
