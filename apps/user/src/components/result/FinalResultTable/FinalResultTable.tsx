import { useFinalResultQuery } from '@/services/result/queries';
import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ResultTableFooter from '../ResultTableFooter/final/ResultTableFooter';
import FinalResultTableItem from '../FinalResultTableItem/FinalResultTableItem';

const FinalResultTable = () => {
  const { data: finalResultData } = useFinalResultQuery();

  return finalResultData ? (
    <StyledFinalResultTable>
      <Column gap={8} width={816}>
        <FinalResultTableItem isPassed={finalResultData.passed} />
        <ResultTableFooter option="FINAL" isPassed={finalResultData.passed} />
      </Column>
    </StyledFinalResultTable>
  ) : null;
};

export default FinalResultTable;

const StyledFinalResultTable = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
`;
