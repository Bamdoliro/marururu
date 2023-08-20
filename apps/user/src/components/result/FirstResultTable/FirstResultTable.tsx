import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import ResultTableFooter from '../ResultTableFooter/ResultTableFooter';
import ResultTableHeader from '../ResultTableHeader/ResultTableHeader';
import ResultTableItem from '../ResultTableItem/ResultTableItem';
import styled from 'styled-components';

const FirstResultTable = () => {
    const is합격 = true;

    return (
        <StyledFirstResultTable is합격={is합격}>
            <Column gap={12} width={816}>
                <ResultTableHeader />
                <ResultTableItem />
            </Column>
            <ResultTableFooter option="FIRST" />
        </StyledFirstResultTable>
    );
};

export default FirstResultTable;

const StyledFirstResultTable = styled.div<{ is합격: boolean }>`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: ${(props) => (props.is합격 ? '64px' : '120px')};
`;
