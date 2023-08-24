'use client';

import NoticeList from '@/components/notice/NoticeList/NoticeList';
import AppLayout from '@/layouts/AppLayout';
import { Button, Column, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

const NoticePage = () => {
    return (
        <AppLayout>
            <StyledNoticePage>
                <Text fontType="H1">공지사항</Text>
                <Column gap={36}>
                    <Row justifyContent="space-between">
                        <Button size="SMALL" icon="ADD_ICON">
                            공지사항 작성
                        </Button>
                        <Row gap={8}>
                            <SearchInput placeholder="검색어를 입력하세요." />
                            <Button size="SMALL">검색</Button>
                        </Row>
                    </Row>
                    <NoticeList />
                </Column>
            </StyledNoticePage>
        </AppLayout>
    );
};

export default NoticePage;

const StyledNoticePage = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 40px;
    width: 100%;
    height: 100%;
    padding: 64px 75px;
`;
