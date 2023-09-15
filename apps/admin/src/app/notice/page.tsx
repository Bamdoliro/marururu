'use client';

import NoticeList from '@/components/notice/NoticeList/NoticeList';
import { ROUTES } from '@/constants/common/constant';
import AppLayout from '@/layouts/AppLayout';
import { Button, Column, Loader, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { styled } from 'styled-components';

const NoticePage = () => {
    const router = useRouter();

    const handleGoNoticePostPageButtonClick = () => {
        router.push(ROUTES.NOTICE_POST);
    };

    return (
        <AppLayout>
            <StyledNoticePage>
                <Text fontType="H1">공지사항</Text>
                <Column gap={36}>
                    <Row justifyContent="space-between">
                        <Button
                            size="SMALL"
                            icon="ADD_ICON"
                            onClick={handleGoNoticePostPageButtonClick}>
                            공지사항 작성
                        </Button>
                        <Row gap={8}>
                            <SearchInput placeholder="검색어를 입력하세요." />
                            <Button size="SMALL">검색</Button>
                        </Row>
                    </Row>
                    <Suspense fallback={<Loader />}>
                        <NoticeList />
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
