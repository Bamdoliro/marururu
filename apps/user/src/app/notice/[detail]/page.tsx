'use client';

import { LeftArrowIcon } from '@/components/common/Icons';
import { NoticeHeader } from '@/components/notice';
import ROUTES from '@/constants/routes';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { Link } from '@maru/ui';
import { styled } from 'styled-components';
import { AppLayout } from '@/layouts';

const NoticeDetailPage = () => {
    const router = useRouter();

    return (
        <AppLayout style={{ padding: '0px 207px' }}>
            <StyledNoticeDetailPage>
                <Link onClick={() => router.push(ROUTES.NOTICE)} gap="2px">
                    <LeftArrowIcon color={color.gray600} size={24} />
                    <Title>공지사항</Title>
                </Link>
                <ContentsBox>
                    <NoticeHeader title="2023학년도 2차전형 일정 안내" date="2023.5.10" />
                    <Content>
                        1차 원서접수: 10월 16일 (월) ~ 19일 (목)
                        <br />
                        1차 합격자 발표: 10월 23일 (월)
                        <br />
                        2차 전형: 10월 27일 (금)
                        <br />
                        11월 2일 (목): 최종 합격자 발표
                    </Content>
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
