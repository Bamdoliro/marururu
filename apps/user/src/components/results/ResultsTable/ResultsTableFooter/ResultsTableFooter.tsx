import { ROUTES } from '@/constants/common/constant';
import { ResultsOption } from '@/types/results/client';
import { color, font } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface PropsType {
    option: ResultsOption;
}

const ResultsTableFooter = ({ option }: PropsType) => {
    const router = useRouter();
    const is합격 = true;

    const handleGoMainPageButtonClick = () => {
        router.push(ROUTES.MAIN);
    };

    return is합격 ? (
        <Column gap={64} alignItems="center">
            <Column gap={24}>
                <Text fontType="p2" color={color.gray900} textAlign="center">
                    신준서 님, 1차 합격을 축하드립니다!
                    <br /> 2단계 전형 응시를 위해 수험표를 출력하고 10월 27일에 본교에 방문해주시기
                    바랍니다.
                    <br /> 자세한 내용은 입학 요강에서 확인해주시기 바랍니다.
                </Text>
                <Export입학요강Button>입학 요강 다운로드</Export입학요강Button>
            </Column>
            <Row gap={16} alignItems="center">
                <Button size="LARGE">수험표 출력하기</Button>
                <Button onClick={handleGoMainPageButtonClick} option="SECONDARY" size="LARGE">
                    홈으로 돌아가기
                </Button>
            </Row>
        </Column>
    ) : (
        <Button onClick={handleGoMainPageButtonClick} size="LARGE">
            홈으로 돌아가기
        </Button>
    );
};

export default ResultsTableFooter;

const Export입학요강Button = styled.button`
    ${font.btn2};
    color: ${color.gray500};
`;
