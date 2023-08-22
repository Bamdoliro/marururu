'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const NotFound = () => {
    const router = useRouter();

    return (
        <AppLayout header footer>
            <StyledNotFound>
                <Image src="/svg/not_found.svg" alt="not-found" width={389} height={155} />
                <Column gap={24}>
                    <Text fontType="H1" color={color.gray900}>
                        페이지를 찾을 수 없습니다
                    </Text>
                    <Text fontType="p2" color={color.gray600}>
                        요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.
                        <br />
                        걱정 마세요, 최고의 탐험가도 때로는 길을 잃을 때가 있죠.
                    </Text>
                </Column>
                <Button width="fit-content" onClick={() => router.back()}>
                    이전 페이지로 돌아가기
                </Button>
            </StyledNotFound>
        </AppLayout>
    );
};

export default NotFound;

const StyledNotFound = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: 56px;
    margin: 82px auto 0;
    width: fit-content;
`;
