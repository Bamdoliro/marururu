import { useFinalResultQuery } from '@/services/result/queries';
import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ResultTableFooter from '../ResultTableFooter/final/ResultTableFooter';
import FinalResultTableItem from '../FinalResultTableItem/FinalResultTableItem';

const FinalResultTable = () => {
  const { data: finalResultData } = useFinalResultQuery();

  return finalResultData ? (
    <StyledFinalResultTable isPassed={finalResultData.passed}>
      <Column gap={20} width={816}>
        <FinalResultTableItem
          type={finalResultData.type}
          isPassed={finalResultData.passed}
        />
        <ResultTableFooter option="FINAL" isPassed={finalResultData.passed} />
      </Column>
    </StyledFinalResultTable>
  ) : null;
};

export default FinalResultTable;

const StyledFinalResultTable = styled.div<{ isPassed: boolean }>`
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
  gap: ${(props) => (props.isPassed ? '1px' : '120px')};
`;
