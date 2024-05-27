import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';

const FinalRoundPassedTable = () => {
  return (
    <TableBox>
      <Text fontType="H3" color={color.gray750} width={60}>
        모든 전형의 점수와 평균
      </Text>
      <Column>
        <Row>
          <Th width={120} height={56} borderTopLeftRadius={12}>
            ㅤ
          </Th>
          <Th width={120} height={56}>
            일반전형
          </Th>
          <Th width={120} height={56} borderTopRightRadius={12}>
            특별전형
          </Th>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={120} height={56}>
            최고 점수
          </Td>
          <Td width={120} height={56}>
            300.000
          </Td>
          <Td width={120} height={56}>
            240.000
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={120} height={56}>
            최하 점수
          </Td>
          <Td width={120} height={56}>
            192.000
          </Td>
          <Td width={120} height={56}>
            172.000
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={120} height={56} borderBottomLeftRadius={12}>
            평균
          </Td>
          <Td width={120} height={56}>
            210.000
          </Td>
          <Td width={120} height={56} borderBottomRightRadius={12}>
            190.000
          </Td>
        </Row>
      </Column>
    </TableBox>
  );
};

export default FinalRoundPassedTable;

const TableBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 24px;
`;
