import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';
import useAdmissionData from '../../GenderRatio.hooks';

const GeneralAdmission = () => {
  const { data } = useAdmissionData(
    ['RECEIVED', 'FIRST_PASSED', 'FAILED', 'PASSED', 'FIRST_FAILED'],
    'REGULAR',
    'ORIGINAL'
  );

  const regularBusanMale = data.categories.REGULAR?.busanMale || 0;
  const regularBusanFemale = data.categories.REGULAR?.busanFemale || 0;
  const regularBusanTotal = regularBusanMale + regularBusanFemale;

  const regularOtherLocationMale = data.categories.REGULAR?.otherLocationMale || 0;
  const regularOtherLocationFemale = data.categories.REGULAR?.otherLocationFemale || 0;
  const regularOtherLocationTotal = regularOtherLocationMale + regularOtherLocationFemale;

  const regularTotal = regularBusanTotal + regularOtherLocationTotal;

  return (
    <TableBox>
      <Text fontType="H3" color={color.gray750} width={60}>
        일반 전형 지역별 성비
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
            {regularBusanMale}
          </Td>
          <Td width={160} height={56}>
            {regularBusanFemale}
          </Td>
          <Td width={160} height={56}>
            {regularBusanTotal}
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={160} height={56}>
            타 지역
          </Td>
          <Td width={160} height={56}>
            {regularOtherLocationMale}
          </Td>
          <Td width={160} height={56}>
            {regularOtherLocationFemale}
          </Td>
          <Td width={160} height={56}>
            {regularOtherLocationTotal}
          </Td>
        </Row>
        <Row>
          <Td styleType="SECONDARY" width={160} height={56} borderBottomLeftRadius={12}>
            지역 합계
          </Td>
          <Td width={480} height={56} borderBottomRightRadius={12}>
            {regularTotal}
          </Td>
        </Row>
      </Column>
    </TableBox>
  );
};

export default GeneralAdmission;

const TableBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 24px;
`;
