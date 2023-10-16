import { useFinalResultQuery } from '@/services/result/queries';
import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ResultTableFooter from '../ResultTableFooter/ResultTableFooter';
import ResultTableHeader from '../ResultTableHeader/ResultTableHeader';
import ResultTableItem from '../ResultTableItem/ResultTableItem';

const FinalResultTable = () => {
    const { data: finalResultData } = useFinalResultQuery();

    return finalResultData ? (
        <StyledFinalResultTable isPassed={finalResultData.passed}>
            <Column gap={12} width={816}>
                <ResultTableHeader />
                <ResultTableItem
                    id={finalResultData.id}
                    name={finalResultData.name}
                    type={finalResultData.type}
                    isPassed={finalResultData.passed}
                />
            </Column>
            <ResultTableFooter option="FINAL" isPassed={finalResultData.passed} />
        </StyledFinalResultTable>
    ) : null;
};

export default FinalResultTable;

const StyledFinalResultTable = styled.div<{ isPassed: boolean }>`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: ${(props) => (props.isPassed ? '64px' : '120px')};
`;
