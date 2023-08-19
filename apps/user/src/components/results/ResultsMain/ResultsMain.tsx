import { color } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const ResultsMain = () => {
    return (
        <StyledResultsMain>
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
        </StyledResultsMain>
    );
};

export default ResultsMain;

const StyledResultsMain = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })}
    gap: 48px;
`;

const InfoBox = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 12px;
    width: 600px;
    padding: 24px 36px;
    background-color: ${color.gray50};
`;
