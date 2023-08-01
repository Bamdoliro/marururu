'use client';

import { NoticeItem } from '@/components/notice';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { useNoticeListQuery } from '@/services/notice/queries';
import { AppLayout } from '@/layouts';
import styled from 'styled-components';

const NoticePage = () => {
    const { data: noticeList, isLoading } = useNoticeListQuery();

    if (isLoading || noticeList === undefined) {
        return null;
    }

    return (
        <AppLayout header={true} footer={true} style={{ padding: '0px 207px' }}>
            <StyledNoticePage>
                <Title>공지사항</Title>
                <NoticeList>
                    {noticeList.map((item) => (
                        <NoticeItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            createdAt={item.createdAt}
                        />
                    ))}
                </NoticeList>
            </StyledNoticePage>
        </AppLayout>
    );
};

export default NoticePage;

const StyledNoticePage = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 48px;
    width: 100%;
    height: 100%;
`;

const Title = styled.p`
    ${font.H2}
    color: ${color.gray900};
`;

const NoticeList = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 20px;
    width: 100%;
`;
