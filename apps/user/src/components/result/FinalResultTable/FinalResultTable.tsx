import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ResultTableFooter from '../ResultTableFooter/ResultTableFooter';
import ResultTableHeader from '../ResultTableHeader/ResultTableHeader';
import ResultTableItem from '../ResultTableItem/ResultTableItem';

const FinalResultTable = () => {
    const is합격 = true;

    return (
        <StyledFinalResultTable is합격={is합격}>
            <Column gap={12} width={816}>
                <ResultTableHeader />
                <ResultTableItem />
            </Column>
            <ResultTableFooter option="FINAL" />
        </StyledFinalResultTable>
    );
};

export default FinalResultTable;

const StyledFinalResultTable = styled.div<{ is합격: boolean }>`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: ${(props) => (props.is합격 ? '64px' : '120px')};
`;
