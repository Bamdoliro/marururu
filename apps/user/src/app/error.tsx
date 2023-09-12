'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Error = () => {
    const router = useRouter();

    return (
        <AppLayout header footer>
            <StyledErrorPage>
                <Image src="/svg/error.svg" alt="error" width={364} height={155} />
                <Column gap={24}>
                    <Text fontType="H1" color={color.gray900}>
                        페이지가 작동하지 않습니다
                    </Text>
                    <Text fontType="p2" color={color.gray600} textAlign="center">
                        이런! 우리 쪽에서 문제가 발생했습니다.
                        <br /> 지금 밤돌이로 팀이 문제를 해결하기 위해 열심히 노력하고 있습니다.
                        <br />
                        일시적인 문제이니 나중에 다시 시도해주세요.
                    </Text>
                </Column>
                <Row gap={16}>
                    <Button size="LARGE" width="fit-content" onClick={() => router.back()}>
                        이전 페이지로 돌아가기
                    </Button>
                    <Button
                        option="SECONDARY"
                        size="LARGE"
                        width="fit-content"
                        onClick={() => window.location.reload()}>
                        새로고침하기
                    </Button>
                </Row>
            </StyledErrorPage>
        </AppLayout>
    );
};

export default Error;

const StyledErrorPage = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: 56px;
    margin: 82px auto 0;
    width: fit-content;
`;
