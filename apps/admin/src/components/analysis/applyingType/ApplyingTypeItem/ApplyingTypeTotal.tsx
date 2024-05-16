import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';

const ApplyingTypeTotal = () => {
  return (
    <TableBox>
      <Text fontType="H3" color={color.gray750} width={60}>
        전형별 지원자 수와 지원 비율
      </Text>
      <Column>
        <Row>
          <Th width={120} height={56} borderTopLeftRadius={12}>
            ㅤ
          </Th>
          <Th width={120} height={56}>
            일반 전형
          </Th>
          <Th width={120} height={56} borderTopRightRadius={12}>
            특별 전형
          </Th>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={120} height={56}>
            지원자 수
          </Td>
          <Td width={120} height={56}>
            300.000
          </Td>
          <Td width={120} height={56}>
            240.000
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={120} height={56} borderBottomLeftRadius={12}>
            지원 비율
          </Td>
          <Td width={120} height={56}>
            192.000
          </Td>
          <Td width={120} height={56} borderBottomRightRadius={12}>
            172.000
          </Td>
        </Row>
      </Column>
    </TableBox>
  );
};

export default ApplyingTypeTotal;

const TableBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 24px;
`;
