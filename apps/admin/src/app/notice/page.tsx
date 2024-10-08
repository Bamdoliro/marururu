'use client';

import NoticeTable from '@/components/notice/NoticeTable/NoticeTable';
import AppLayout from '@/layouts/AppLayout';
import { Button, Column, Loader, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { Suspense } from 'react';
import { styled } from 'styled-components';
import useCTAButton from './notice.hooks';

const NoticePage = () => {
  const { handleGoNoticePostPageButtonClick } = useCTAButton();

  return (
    <AppLayout>
      <StyledNoticePage>
        <Text fontType="H1">공지사항</Text>
        <Column gap={36}>
          <Row justifyContent="flex-end">
            <Button
              size="SMALL"
              icon="ADD_ICON"
              onClick={handleGoNoticePostPageButtonClick}
            >
              공지사항 작성
            </Button>
          </Row>
          <Suspense fallback={<Loader />}>
            <NoticeTable />
          </Suspense>
        </Column>
      </StyledNoticePage>
    </AppLayout>
  );
};

export default NoticePage;

const StyledNoticePage = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;
