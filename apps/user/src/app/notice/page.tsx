'use client';

import { Loader } from '@/components/common';
import { NoticeList } from '@/components/notice';
import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { Suspense } from 'react';
import styled from 'styled-components';

const NoticePage = () => {
    return (
        <AppLayout header footer>
            <StyledNoticePage>
                <Text fontType="H1" color={color.gray900}>
                    공지사항
                </Text>
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
    max-width: 1240px;
    height: 100%;
    margin-top: 52px;
    padding: 0 207px;
    margin: 0 auto;
`;
