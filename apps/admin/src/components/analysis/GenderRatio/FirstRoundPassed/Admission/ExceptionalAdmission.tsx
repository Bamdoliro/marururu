import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';

const FirstRoundPassedTable = () => {
  return (
    <TableBox>
      <Text fontType="H3" color={color.gray750} width={60}>
        특례입학대상자 성비
      </Text>
      <Column>
        <Row>
          <Th width={160} height={56} borderTopLeftRadius={12}>
            ㅤ
          </Th>
          <Th width={160} height={56}>
            남학생
          </Th>
          <Th width={160} height={56}>
            여학생
          </Th>
          <Th width={160} height={56} borderTopRightRadius={12}>
            합계
          </Th>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={160} height={56}>
            부산 지역
          </Td>
          <Td width={160} height={56}>
            0
          </Td>
          <Td width={160} height={56}>
            0
          </Td>
          <Td width={160} height={56}>
            0
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={160} height={56}>
            타 지역
          </Td>
          <Td width={160} height={56}>
            0
          </Td>
          <Td width={160} height={56} borderBottomRightRadius={12}>
            0
          </Td>
          <Td width={160} height={56} borderBottomRightRadius={12}>
            0
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={160} height={56} borderBottomLeftRadius={12}>
            지역 합계
          </Td>
          <Td width={480} height={56} borderBottomRightRadius={12}>
            0
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
