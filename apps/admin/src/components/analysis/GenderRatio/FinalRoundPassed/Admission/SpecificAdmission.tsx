import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';
import useAdmissionData from './FinalRoundPassedAdmission.hooks';

const SpecificAdmission = () => {
  const data = useAdmissionData('SPECIAL', ['MEISTER_TALENT', 'SOCIAL_INTEGRATION']);

  const meisterTalentBusanMale = data.MEISTER_TALENTBusanMale;
  const meisterTalentBusanFemale = data.MEISTER_TALENTBusanFemale;
  const meisterTalentBusanTotal = meisterTalentBusanMale + meisterTalentBusanFemale;

  const meisterTalentOtherLocationMale = data.MEISTER_TALENTOtherLocationMale;
  const meisterTalentOtherLocationFemale = data.MEISTER_TALENTOtherLocationFemale;
  const meisterTalentOtherLocationTotal =
    meisterTalentOtherLocationMale + meisterTalentOtherLocationFemale;

  const meisterTalentTotal = meisterTalentBusanTotal + meisterTalentOtherLocationTotal;

  const socialIntegrationBusanMale = data.SOCIAL_INTEGRATIONBusanMale;
  const socialIntegrationBusanFemale = data.SOCIAL_INTEGRATIONBusanFemale;
  const socialIntegrationBusanTotal =
    socialIntegrationBusanMale + socialIntegrationBusanFemale;

  const socialIntegrationOtherLocationMale = data.SOCIAL_INTEGRATIONOtherLocationMale;
  const socialIntegrationOtherLocationFemale = data.SOCIAL_INTEGRATIONOtherLocationFemale;
  const socialIntegrationOtherLocationTotal =
    socialIntegrationOtherLocationMale + socialIntegrationOtherLocationFemale;

  const socialIntegrationTotal =
    socialIntegrationBusanTotal + socialIntegrationOtherLocationTotal;

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
              {meisterTalentBusanMale}
            </Td>
            <Td width={160} height={56}>
              {meisterTalentBusanFemale}
            </Td>
            <Td width={160} height={56}>
              {meisterTalentBusanTotal}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              타 지역
            </Td>
            <Td width={160} height={56}>
              {meisterTalentOtherLocationMale}
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              {meisterTalentOtherLocationFemale}
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              {meisterTalentOtherLocationTotal}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56} borderBottomLeftRadius={12}>
              지역 합계
            </Td>
            <Td width={480} height={56} borderBottomRightRadius={12}>
              {meisterTalentTotal}
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
              {socialIntegrationBusanMale}
            </Td>
            <Td width={160} height={56}>
              {socialIntegrationBusanFemale}
            </Td>
            <Td width={160} height={56}>
              {socialIntegrationBusanTotal}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56}>
              타 지역
            </Td>
            <Td width={160} height={56}>
              {socialIntegrationOtherLocationMale}
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              {socialIntegrationOtherLocationFemale}
            </Td>
            <Td width={160} height={56} borderBottomRightRadius={12}>
              {socialIntegrationOtherLocationTotal}
            </Td>
          </Row>
          <Row>
            <Td styleType="SECONDARY" width={160} height={56} borderBottomLeftRadius={12}>
              지역 합계
            </Td>
            <Td width={480} height={56} borderBottomRightRadius={12}>
              {socialIntegrationTotal}
            </Td>
          </Row>
        </Column>
      </TableBox>
    </TableLayout>
  );
};

export default SpecificAdmission;

const TableLayout = styled.section`
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
`;

const TableBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 32px;
`;
