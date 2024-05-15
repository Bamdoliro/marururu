import { useFirstResultQuery } from '@/services/result/queries';
import { Column } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import FirstResultTableFooter from '../ResultTableFooter/first/ResultTableFooter';
import FirstResultTableItem from '../FirstResultTableItem/FirstResultTableItem';

const FirstResultTable = () => {
  const { data: firstResultData } = useFirstResultQuery();

  return firstResultData ? (
    <StyledFirstResultTable isPassed={firstResultData.passed}>
      <Column gap={20} width={816}>
        <FirstResultTableItem
          type={firstResultData.type}
          isPassed={firstResultData.passed}
        />
        <FirstResultTableFooter
          option="FIRST"
          isPassed={firstResultData.passed}
          id={firstResultData.id}
        />
      </Column>
    </StyledFirstResultTable>
  ) : null;
};

export default FirstResultTable;

const StyledFirstResultTable = styled.div<{ isPassed: boolean }>`
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
  gap: ${(props) => (props.isPassed ? '10px' : '120px')};
`;
