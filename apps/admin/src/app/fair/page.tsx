'use client';

import React, { useState, useEffect } from 'react';
import { Column, Text } from '@maru/ui';
import styled from 'styled-components';
import { Suspense } from '@suspensive/react';
import { ApplyingList, ClosedList, Header } from '@/components/fair';
import AppLayout from '@/layouts/AppLayout';
import withAuth from '@/hocs/withAuth';
import { flex } from '@maru/utils';

const FairPage = () => {
  const [status, setStatus] = useState('진행 중인 신청');

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
          <Column gap={16}>
            <Text fontType="H3">학생</Text>
            <ApplyingList fairType="STUDENT_AND_PARENT" />
            <Text fontType="H3">교사</Text>
            <ApplyingList fairType="TEACHER" />
          </Column>
        </>
      );
    } else if (status === '마감된 신청') {
      return (
        <>
          <Column gap={16}>
            <Text fontType="H3">학생</Text>
            <ClosedList fairType="STUDENT_AND_PARENT" />
            <Text fontType="H3">교사</Text>
            <ClosedList fairType="TEACHER" />
          </Column>
        </>
      );
    }
  };

  return (
    <AppLayout>
      <StyledFairPage>
        <Text fontType="H1">입학전형 설명회 관리</Text>
        <Header selectedTab={status} handleTabClick={handleTabClick} />
        <Suspense.CSROnly>{renderContent()}</Suspense.CSROnly>
      </StyledFairPage>
    </AppLayout>
  );
};

export default withAuth(FairPage);

const StyledFairPage = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;
