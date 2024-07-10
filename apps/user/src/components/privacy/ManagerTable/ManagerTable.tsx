import { Row, Td } from '@maru/ui';
import { styled } from 'styled-components';

interface ColumnProps {
  width?: string;
}

const ManagerTable = () => {
  return (
    <StyledManagerTableItem>
      <Table>
        <Row alignItems="center">
          <Td borderTopLeftRadius={12} width="calc(100% / 4.9)" height={112}>
            기숙사
          </Td>
          <Column width="calc(100% / 1.64)">
            <Td width="100%" height={56} borderTopRightRadius={12}>
              양성우 (051-970-1780)
            </Td>
            <Td width="100%" height={56}>
              염유정 (051-970-1779)
            </Td>
          </Column>
        </Row>
        <Row alignItems="center">
          <Td borderBottomLeftRadius={12} width="calc(100% / 4.9)" height={112}>
            경비원
          </Td>
          <Column width="calc(100% / 1.64)">
            <Td width="100%" height={56}>
              도상백 (051-970-1706)
            </Td>
            <Td width="100%" height={56} borderBottomRightRadius={12}>
              장원제 (051-970-1706)
            </Td>
          </Column>
        </Row>
      </Table>
    </StyledManagerTableItem>
  );
};

export default ManagerTable;

const StyledManagerTableItem = styled.div`
  width: 100%;
`;

const Table = styled.div`
  width: 100%;
`;

const Column = styled.div<ColumnProps>`
  width: ${(props) => props.width || '100%'};
`;
