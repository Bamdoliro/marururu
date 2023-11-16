import { useFirstResultQuery } from '@/services/result/queries';
import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ResultTableFooter from '../ResultTableFooter/ResultTableFooter';
import ResultTableHeader from '../ResultTableHeader/ResultTableHeader';
import ResultTableItem from '../ResultTableItem/ResultTableItem';

const FirstResultTable = () => {
  const { data: firstResultData } = useFirstResultQuery();

  return firstResultData ? (
    <StyledFirstResultTable isPassed={firstResultData.passed}>
      <Column gap={12} width={816}>
        <ResultTableHeader />
        <ResultTableItem
          id={firstResultData.id}
          name={firstResultData.name}
          type={firstResultData.type}
          isPassed={firstResultData.passed}
        />
      </Column>
      <ResultTableFooter option="FIRST" isPassed={firstResultData.passed} />
    </StyledFirstResultTable>
  ) : null;
};

export default FirstResultTable;

const StyledFirstResultTable = styled.div<{ isPassed: boolean }>`
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
  gap: ${(props) => (props.isPassed ? '64px' : '120px')};
`;
