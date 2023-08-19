'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const FirstResultsPage = () => {
    return (
        <AppLayout header footer>
            <StyledFirstResultsPage>
                <Column gap={48} alignItems="center">
                    <Column gap={12} alignItems="center">
                        <Text fontType="H5" color={color.gray900}>
                            2024학년도 부산소프트웨어마이스터고등학교
                        </Text>
                        <Text fontType="D3" color={color.gray900}>
                            1차 합격자 발표
                        </Text>
                    </Column>
                    <InfoBox>
                        <Text fontType="p2" color={color.gray700}>
                            일시: 2023년 10월 23일 (월) 15:00
                        </Text>
                        <Text fontType="p2" color={color.gray700}>
                            모집 정원: 일반전형 및 특별전형 각각 모집정원의 130% 이내{' '}
                        </Text>
                        <Text fontType="p2" color={color.gray700}>
                            장소: 본교 입학전형 서비스 (마루)
                        </Text>
                    </InfoBox>
                    <Button size="LARGE">결과 확인하기</Button>
                </Column>
            </StyledFirstResultsPage>
        </AppLayout>
    );
};

export default FirstResultsPage;

const StyledFirstResultsPage = styled.div`
    padding-top: 82px;
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: 48px;
    width: 100%;
    height: 100%;
`;

const InfoBox = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 12px;
    width: 600px;
    padding: 24px 36px;
    background-color: ${color.gray50};
`;
