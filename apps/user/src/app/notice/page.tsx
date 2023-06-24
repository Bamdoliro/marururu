'use client';

import NoticeItem from '@/components/notice/NoticeItem';
import NoticeLayout from '@/layouts/NoticeLayout';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useNoticeListQuery } from '@/services/notice/queries';

const NoticePage = () => {
    const { data: noticeListData } = useNoticeListQuery();

    return (
        <NoticeLayout>
            <StyledNoticePage>
                <Title>공지사항</Title>
                <NoticeList>
                    {noticeListData.map((item) => (
                        <NoticeItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            date={item.date}
                        />
                    ))}
                </NoticeList>
            </StyledNoticePage>
        </NoticeLayout>
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
