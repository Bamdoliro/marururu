'use client';

import LeftArrowIcon from '@/components/common/Icons/LeftArrow';
import NoticeHeader from '@/components/notice/NoticeHeader/NoticeHeader';
import { NOTICE_PAGE_ROUTE } from '@/constants/routes';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { Link } from '@maru/ui';
import { styled } from 'styled-components';
import AppLayout from '@/layouts/AppLayout';

const NoticeDetailPage = () => {
    const router = useRouter();

    return (
        <AppLayout style={{ padding: '0px 207px' }}>
            <StyledNoticeDetailPage>
                <Link onClick={() => router.push(NOTICE_PAGE_ROUTE)} gap="2px">
                    <LeftArrowIcon color={color.gray600} size={24} />
                    <Title>공지사항</Title>
                </Link>
                <ContentsBox>
                    <NoticeHeader title="테스트" date="2023.11.05" />
                    <Content>이것은 테스트 입니다</Content>
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

const Title = styled.p`
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
