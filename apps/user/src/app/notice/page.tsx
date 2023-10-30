'use client';

import { NoticeList } from '@/components/notice';
import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Loader, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { Suspense } from '@suspensive/react';
import styled from 'styled-components';

const NoticePage = () => {
    return (
        <AppLayout header footer>
            <StyledNoticePage>
                <Text fontType="H1" color={color.gray900}>
                    공지사항
                </Text>
                <Suspense.CSROnly>
                    <NoticeList />
                </Suspense.CSROnly>
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
    margin: 0 auto;
    padding: 82px 204px 240px;
`;
