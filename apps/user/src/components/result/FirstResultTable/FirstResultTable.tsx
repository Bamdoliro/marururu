import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import ResultTableFooter from '../ResultTableFooter/ResultTableFooter';
import ResultTableHeader from '../ResultTableHeader/ResultTableHeader';
import ResultTableItem from '../ResultTableItem/ResultTableItem';
import styled from 'styled-components';
import { useFirstResultQuery } from '@/services/result/queries';

const FirstResultTable = () => {
    const { data: firstResultData } = useFirstResultQuery();

    return firstResultData ? (
        <StyledFirstResultTable is합격={firstResultData.passed}>
            <Column gap={12} width={816}>
                <ResultTableHeader />
                <ResultTableItem
                    id={firstResultData.id}
                    name={firstResultData.name}
                    type={firstResultData.type}
                    is합격={firstResultData.passed}
                />
            </Column>
            <ResultTableFooter option="FIRST" is합격={firstResultData.passed} />
        </StyledFirstResultTable>
    ) : null;
};

export default FirstResultTable;

const StyledFirstResultTable = styled.div<{ is합격: boolean }>`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    gap: ${(props) => (props.is합격 ? '64px' : '120px')};
`;
