import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';
import useAdmissionData from './FinalRoundPassedAdmission.hooks';

const ExceptionalAdmission = () => {
  const data = useAdmissionData('SUPERNUMERARY', [
    'SPECIAL_ADMISSION',
    'NATIONAL_VETERANS_EDUCATION',
  ]);

  const specialAdmissionBusanMale = data.SPECIAL_ADMISSIONBusanMale;
  const specialAdmissionBusanFemale = data.SPECIAL_ADMISSIONBusanFemale;
  const specialAdmissionBusanTotal =
    specialAdmissionBusanMale + specialAdmissionBusanFemale;

  const specialAdmissionOtherLocationMale = data.SPECIAL_ADMISSIONOtherLocationMale;
  const specialAdmissionOtherLocationFemale = data.SPECIAL_ADMISSIONOtherLocationFemale;
  const specialAdmissionOtherLocationTotal =
    specialAdmissionOtherLocationMale + specialAdmissionOtherLocationFemale;

  const specialAdmissionTotal =
    specialAdmissionBusanTotal + specialAdmissionOtherLocationTotal;

  const nationalVeteransBusanMale = data.NATIONAL_VETERANS_EDUCATIONBusanMale;
  const nationalVeteransBusanFemale = data.NATIONAL_VETERANS_EDUCATIONBusanFemale;
  const nationalVeteransBusanTotal =
    nationalVeteransBusanMale + nationalVeteransBusanFemale;

  const nationalVeteransOtherLocationMale =
    data.NATIONAL_VETERANS_EDUCATIONOtherLocationMale;
  const nationalVeteransOtherLocationFemale =
    data.NATIONAL_VETERANS_EDUCATIONOtherLocationFemale;
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
            <Td width={160} height={56} borderBottomRightRadius={12}>
              {specialAdmissionOtherLocationFemale}
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
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
            <Td width={160} height={56} borderBottomRightRadius={12}>
              {nationalVeteransOtherLocationFemale}
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
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
