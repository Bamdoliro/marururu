import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';

const FirstRoundPassedTable = () => {
  return (
    <TableLayout>
      <TableBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          마이스터 인재 전형 지역별 성비
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
              134
            </Td>
            <Td width={160} height={56}>
              12
            </Td>
            <Td width={160} height={56}>
              23
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              타 지역
            </Td>
            <Td width={160} height={56}>
              12
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              11
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              13
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56} borderBottomLeftRadius={12}>
              지역 합계
            </Td>
            <Td width={480} height={56} borderBottomRightRadius={12}>
              37
            </Td>
          </Row>
        </Column>
      </TableBox>
      <TableBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          사회통합 - 정원내 지역별 성비
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
              23
            </Td>
            <Td width={160} height={56}>
              112
            </Td>
            <Td width={160} height={56}>
              213
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              타 지역
            </Td>
            <Td width={160} height={56}>
              152
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              161
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              113
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56} borderBottomLeftRadius={12}>
              지역 합계
            </Td>
            <Td width={480} height={56} borderBottomRightRadius={12}>
              7
            </Td>
          </Row>
        </Column>
      </TableBox>
      <TableBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          사회통합 - 정원외 지역별 성비
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
    </TableLayout>
  );
};

export default FirstRoundPassedTable;

const TableBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 32px;
`;

const TableLayout = styled.section`
  ${flex({ flexDirection: 'column' })}
  gap: 64px;
`;
