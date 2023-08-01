'use client';

import { IconArrowLeft } from '@maru/icon';
import ROUTES from '@/constants/routes';
import { color, font } from '@maru/theme';
import { flex, formatCreatedAt } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { Column, Link } from '@maru/ui';
import { styled } from 'styled-components';
import { AppLayout } from '@/layouts';
import { useNoticeDetailQuery } from '@/services/notice/queries';

interface PropsType {
    params: { id: number };
}

const NoticeDetailPage = ({ params: { id } }: PropsType) => {
    const router = useRouter();

    const { data: noticeDetail, isLoading } = useNoticeDetailQuery(id);

    if (isLoading || noticeDetail === undefined) {
        return null;
    }

    return (
        <AppLayout header={true} footer={true} style={{ padding: '0px 207px' }}>
            <StyledNoticeDetailPage>
                <Link onClick={() => router.push(ROUTES.NOTICE)} gap="2px">
                    <IconArrowLeft color={color.gray600} width={24} height={24} />
                    <Path>공지사항</Path>
                </Link>
                <ContentsBox>
                    <NoticeHeader>
                        <Column gap="16px" height="72px">
                            <Title>{noticeDetail.title}</Title>
                            <Date>{formatCreatedAt(noticeDetail.createdAt)}</Date>
                        </Column>
                    </NoticeHeader>
                    <Content>{noticeDetail.content}</Content>
                </ContentsBox>
            </StyledNoticeDetailPage>
        </AppLayout>
    );
};

export default NoticeDetailPage;

const StyledNoticeDetailPage = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 36px;
    width: 100%;
    height: 100%;
`;

const Path = styled.p`
    ${font.H5}
    color: ${color.gray900};
`;

const ContentsBox = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 24px;
    padding: 0px 7px;
`;

const Content = styled.pre`
    ${font.p2}
    color: ${color.gray900};
`;

const NoticeHeader = styled.div`
    ${flex({ justifyContent: 'space-between' })}
    width: 100%;
    height: 80px;
    border-bottom: 1px solid ${color.gray300};
    margin-bottom: 8px;
`;

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;

const Date = styled.p`
    ${font.p3}
    color: ${color.gray750};
`;
