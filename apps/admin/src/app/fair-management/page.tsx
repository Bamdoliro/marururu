'use client';

import { ApplyingList, ClosedList, Header } from '@/components/fair-management';
import { ROUTES } from '@/constants/common/constant';
import withAuth from '@/hocs/withAuth';
import AppLayout from '@/layouts/AppLayout';
import { color } from '@maru/design-token';
import { IconAdd } from '@maru/icon';
import { Button, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { styled } from 'styled-components';

const FairManagementPage = () => {
  const [status, setStatus] = useState('진행 중인 신청');
  const routes = useRouter();

  useEffect(() => {
    const savedStatus = localStorage.getItem('selectedTab');
    if (savedStatus) {
      setStatus(savedStatus);
    }
  }, []);

  const handleTabClick = (name: string) => {
    setStatus(name);
    localStorage.setItem('selectedTab', name);
  };

  const renderContent = () => {
    if (status === '진행 중인 신청') {
      return (
        <>
          <ApplyingList fairType="STUDENT_AND_PARENT" />
          <ApplyingList fairType="TEACHER" />
        </>
      );
    } else if (status === '마감된 신청') {
      return (
        <>
          <ClosedList fairType="STUDENT_AND_PARENT" />
          <ClosedList fairType="TEACHER" />
        </>
      );
    }
  };

  return (
    <AppLayout>
      <StyledFairManagementPage>
        <Text fontType="H1">입학전형 설명회 관리</Text>
        <Row alignItems="center">
          <Header selectedTab={status} handleTabClick={handleTabClick} />
          <Button
            color={color.maruDefault}
            onClick={() => routes.push(ROUTES.CREATE_FAIR)}
          >
            <Row gap={1} alignItems="center">
              <IconAdd width={24} height={24} color={color.white} />
              <Text fontType="p2">입학 설명회 생성</Text>
            </Row>
          </Button>
        </Row>
        <Suspense fallback={' '}>{renderContent()}</Suspense>
      </StyledFairManagementPage>
    </AppLayout>
  );
};

export default withAuth(FairManagementPage);

const StyledFairManagementPage = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;
