import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ResultsTableFooter from '../ResultsTableFooter/ResultsTableFooter';
import ResultsTableHeader from '../ResultsTableHeader/ResultsTableHeader';
import ResultsTableItem from '../ResultsTableItem/ResultsTableItem';

const FinalResultsTable = () => {
    const is합격 = true;

    return (
        <StyledFinalResultsTable is합격={is합격}>
            <Column gap={12} width={816}>
                <ResultsTableHeader />
                <ResultsTableItem />
            </Column>
            <ResultsTableFooter option="FINAL" />
        </StyledFinalResultsTable>
    );
};

export default FinalResultsTable;

const StyledFinalResultsTable = styled.div<{ is합격: boolean }>`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: ${(props) => (props.is합격 ? '64px' : '120px')};
`;
