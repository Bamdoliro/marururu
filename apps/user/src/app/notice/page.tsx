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
        <AppLayout header={true} footer={true} style={{ padding: '0px 207px', marginTop: 82 }}>
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
    height: 100%;
`;
