'use client';

import { NotFoundIcon } from '@/components/common/Icons';
import { AppLayout } from '@/layouts';
import { color, font } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const NotFound = () => {
    const router = useRouter();

    return (
        <AppLayout>
            <StyledNotFound>
                <NotFoundIcon />
                <Title>페이지를 찾을 수 없습니다</Title>
                <Desc>
                    요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.
                    <br />
                    걱정 마세요, 최고의 탐험가도 때로는 길을 잃을 때가 있죠.
                </Desc>
                <Button width="max-content" onClick={() => router.back()}>
                    이전 페이지로 돌아가기
                </Button>
            </StyledNotFound>
        </AppLayout>
    );
};

export default NotFound;

const StyledNotFound = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })}
    margin: 82px auto 0;
    width: fit-content;
`;

const Title = styled.p`
    ${font.H1}
    color: ${color.gray900};
    margin: 56px 0 24px;
`;

const Desc = styled.p`
    ${font.p2}
    color: ${color.gray600};
    margin-bottom: 56px;
`;
