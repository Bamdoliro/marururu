import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';
import useAdmissionData from '../../GenderRatio.hooks';

const ExceptionalAdmission = () => {
  const { data } = useAdmissionData(
    ['NO_SHOW', 'FIRST_PASSED', 'FAILED', 'PASSED'],
    'SUPERNUMERARY',
    'CURRENT'
  );

  const specialAdmissionBusanMale = data.categories.SPECIAL_ADMISSION?.busanMale || 0;
  const specialAdmissionBusanFemale = data.categories.SPECIAL_ADMISSION?.busanFemale || 0;
  const specialAdmissionBusanTotal =
    specialAdmissionBusanMale + specialAdmissionBusanFemale;

  const specialAdmissionOtherLocationMale =
    data.categories.SPECIAL_ADMISSION?.otherLocationMale || 0;
  const specialAdmissionOtherLocationFemale =
    data.categories.SPECIAL_ADMISSION?.otherLocationFemale || 0;
  const specialAdmissionOtherLocationTotal =
    specialAdmissionOtherLocationMale + specialAdmissionOtherLocationFemale;

  const specialAdmissionTotal =
    specialAdmissionBusanTotal + specialAdmissionOtherLocationTotal;

  const nationalVeteransBusanMale =
    data.categories.NATIONAL_VETERANS_EDUCATION?.busanMale || 0;
  const nationalVeteransBusanFemale =
    data.categories.NATIONAL_VETERANS_EDUCATION?.busanFemale || 0;
  const nationalVeteransBusanTotal =
    nationalVeteransBusanMale + nationalVeteransBusanFemale;

  const nationalVeteransOtherLocationMale =
    data.categories.NATIONAL_VETERANS_EDUCATION?.otherLocationMale || 0;
  const nationalVeteransOtherLocationFemale =
    data.categories.NATIONAL_VETERANS_EDUCATION?.otherLocationFemale || 0;
  const nationalVeteransOtherLocationTotal =
    nationalVeteransOtherLocationMale + nationalVeteransOtherLocationFemale;

  const nationalVeteransTotal =
    nationalVeteransBusanTotal + nationalVeteransOtherLocationTotal;

  return (
    <TableLayout>
      <TableBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          특례입학
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
              {specialAdmissionBusanMale}
            </Td>
            <Td width={160} height={56}>
              {specialAdmissionBusanFemale}
            </Td>
            <Td width={160} height={56}>
              {specialAdmissionBusanTotal}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              타 지역
            </Td>
            <Td width={160} height={56}>
              {specialAdmissionOtherLocationMale}
            </Td>
            <Td width={160} height={56}>
              {specialAdmissionOtherLocationFemale}
            </Td>
            <Td width={160} height={56}>
              {specialAdmissionOtherLocationTotal}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56} borderBottomLeftRadius={12}>
              지역 합계
            </Td>
            <Td width={480} height={56} borderBottomRightRadius={12}>
              {specialAdmissionTotal}
            </Td>
          </Row>
        </Column>
      </TableBox>
      <TableBox>
        <Text fontType="H3" color={color.gray750} width={60}>
          국가보훈대상자 중 교육지원대상자
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
              {nationalVeteransBusanMale}
            </Td>
            <Td width={160} height={56}>
              {nationalVeteransBusanFemale}
            </Td>
            <Td width={160} height={56}>
              {nationalVeteransBusanTotal}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              타 지역
            </Td>
            <Td width={160} height={56}>
              {nationalVeteransOtherLocationMale}
            </Td>
            <Td width={160} height={56}>
              {nationalVeteransOtherLocationFemale}
            </Td>
            <Td width={160} height={56}>
              {nationalVeteransOtherLocationTotal}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56} borderBottomLeftRadius={12}>
              지역 합계
            </Td>
            <Td width={480} height={56} borderBottomRightRadius={12}>
              {nationalVeteransTotal}
            </Td>
          </Row>
        </Column>
      </TableBox>
    </TableLayout>
  );
};

export default ExceptionalAdmission;

const TableLayout = styled.section`
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
`;

const TableBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 32px;
`;
