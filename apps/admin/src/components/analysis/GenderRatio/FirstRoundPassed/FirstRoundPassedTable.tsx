import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';

const FirstRoundPassedTable = () => {
  return (
    <TableBox>
      <Text fontType="H3" color={color.gray750} width={60}>
        전형별 학생 성비
      </Text>
      <Column>
        <Row>
          <Th width={160} height={56} borderTopLeftRadius={12}>
            ㅤ
          </Th>
          <Th width={160} height={56}>
            남학생
          </Th>
          <Th width={160} height={56} borderTopRightRadius={12}>
            여학생
          </Th>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={160} height={56}>
            일반 전형
          </Td>
          <Td width={160} height={56}>
            134
          </Td>
          <Td width={160} height={56}>
            12
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={160} height={56}>
            특별 전형
          </Td>
          <Td width={160} height={56}>
            192
          </Td>
          <Td width={160} height={56}>
            34
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={160} height={56}>
            정원 외 전형
          </Td>
          <Td width={160} height={56}>
            12
          </Td>
          <Td width={160} height={56} borderBottomRightRadius={12}>
            11
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={160} height={56}>
            전체 (정원 외 제외)
          </Td>
          <Td width={160} height={56}>
            104
          </Td>
          <Td width={160} height={56} borderBottomRightRadius={12}>
            11
          </Td>
        </Row>
      </Column>
    </TableBox>
  );
};

export default FirstRoundPassedTable;

const TableBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 24px;
`;
