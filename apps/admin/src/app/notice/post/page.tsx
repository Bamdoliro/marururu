'use client';

import NoticePost from '@/components/notice/NoticePost/NoticePost';
import AppLayout from '@/layouts/AppLayout';
import { IconArrowLeft } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Loader } from '@maru/ui';
import { flex } from '@maru/utils';
import Link from 'next/link';
import { Suspense } from 'react';
import styled from 'styled-components';

const NoticePostPage = () => {
    return (
        <AppLayout>
            <StyledNoticeDetail>
                <DirectLink href="/notice">
                    <IconArrowLeft width={18} height={18} />
                    돌아가기
                </DirectLink>
                <Suspense fallback={<Loader />}>
                    <NoticePost />
                </Suspense>
            </StyledNoticeDetail>
        </AppLayout>
    );
};

export default NoticePostPage;

const StyledNoticeDetail = styled.div`
    position: relative;
    ${flex({ flexDirection: 'column' })}
    gap: 24px;
    width: 100%;
    min-height: 100vh;
    padding: 64px 75px;
`;

const DirectLink = styled(Link)`
    ${flex({ alignItems: 'center' })}
    gap: 2px;
    ${font.p3}
    color: ${color.gray600};
`;
