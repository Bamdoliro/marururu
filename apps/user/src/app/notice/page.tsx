'use client';

import { NoticeList } from '@/components/notice';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { AppLayout } from '@/layouts';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Loader } from '@/components/common';

const NoticePage = () => {
    return (
        <AppLayout header={true} footer={true} style={{ padding: '0px 207px' }}>
            <StyledNoticePage>
                <Title>공지사항</Title>
                <Suspense fallback={<Loader />}>
                    <NoticeList />
                </Suspense>
            </StyledNoticePage>
        </AppLayout>
    );
};

export default NoticePage;

const StyledNoticePage = styled.div`
    position: relative;
    ${flex({ flexDirection: 'column' })}
    gap: 48px;
    width: 100%;
    height: 100%;
`;

const Title = styled.p`
    ${font.H2}
    color: ${color.gray900};
`;
