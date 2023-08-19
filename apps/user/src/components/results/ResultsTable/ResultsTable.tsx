import { ResultsOption } from '@/types/results/client';
import { color, font } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ResultsTableFooter from './ResultsTableFooter/ResultsTableFooter';

interface PropsType {
    option: ResultsOption;
}

const ResultsTable = ({ option }: PropsType) => {
    const is합격 = true;

    return (
        <StyledResultsTable is합격={is합격}>
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
            <ResultsTableFooter option={option} />
        </StyledResultsTable>
    );
};

export default ResultsTable;

const StyledResultsTable = styled.div<{ is합격: boolean }>`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: ${(props) => (props.is합격 ? '64px' : '120px')};
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
