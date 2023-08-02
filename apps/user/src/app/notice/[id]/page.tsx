'use client';

import { IconArrowLeft } from '@maru/icon';
import ROUTES from '@/constants/routes';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { Link } from '@maru/ui';
import { AppLayout } from '@/layouts';
import { useNoticeDetailQuery } from '@/services/notice/queries';
import { NoticeDetailContent } from '@/components/notice';
import styled from 'styled-components';

interface PropsType {
    params: { id: number };
}

const NoticeDetailPage = ({ params: { id } }: PropsType) => {
    const router = useRouter();

    const { data: noticeDetailData } = useNoticeDetailQuery(id);

    if (!noticeDetailData) return null;

    return (
        <AppLayout header={true} footer={true} style={{ padding: '0px 207px' }}>
            <StyledNoticeDetailPage>
                <Link onClick={() => router.push(ROUTES.NOTICE)} gap="2px">
                    <IconArrowLeft color={color.gray600} width={24} height={24} />
                    <Path>공지사항</Path>
                </Link>
                <NoticeDetailContent noticeDetailData={noticeDetailData} />
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
