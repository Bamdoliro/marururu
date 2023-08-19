import { color } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    option: '1st' | 'final';
}

const ResultsTable = ({ option }: PropsType) => {
    return (
        <StyledResultsTable>
            <Column gap={12} width={816}>
                <ResultsTableHeader>
                    <Row alignItems="center" gap={48}>
                        <Text fontType="p2" color={color.gray600}>
                            수험번호
                        </Text>
                        <Text fontType="p2" color={color.gray600}>
                            이름
                        </Text>
                        <Text fontType="p2" color={color.gray600}>
                            전형
                        </Text>
                    </Row>
                    <Text fontType="p2" color={color.gray600}>
                        합격 여부
                    </Text>
                </ResultsTableHeader>
                <ResultsTableItem>
                    <Row alignItems="center" gap={48}>
                        <Text fontType="p2" color={color.gray900}>
                            수험번호
                        </Text>
                        <Text fontType="p2" color={color.gray900}>
                            이름
                        </Text>
                        <Text fontType="p2" color={color.gray900}>
                            전형
                        </Text>
                    </Row>
                    <Text fontType="p2" color={color.gray900}>
                        합격 여부
                    </Text>
                </ResultsTableItem>
            </Column>
            <Button size="LARGE">홈으로 돌아가기</Button>
        </StyledResultsTable>
    );
};

export default ResultsTable;

const StyledResultsTable = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: 120px;
`;

const ResultsTableHeader = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    width: 100%;
    height: 64px;
    padding: 0px 64px 0px 32px;
    background-color: ${color.gray50};
    border-radius: 12px;
`;

const ResultsTableItem = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    width: 100%;
    height: 64px;
    padding: 0px 64px 0px 32px;
    background-color: ${color.white};
    border: 1px solid ${color.gray200};
    border-radius: 12px;
`;
