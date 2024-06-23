import { Column, Row, Td, Th, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';
import useAdmissionData from '../../GenderRatio.hooks';

const SpecificAdmission = () => {
  const { data } = useAdmissionData(['FAILED', 'PASSED'], 'SPECIAL');

  const meisterTalentBusanMale = data.categories.MEISTER_TALENT?.busanMale || 0;
  const meisterTalentBusanFemale = data.categories.MEISTER_TALENT?.busanFemale || 0;
  const meisterTalentBusanTotal = meisterTalentBusanMale + meisterTalentBusanFemale;

  const meisterTalentOtherLocationMale =
    data.categories.MEISTER_TALENT?.otherLocationMale || 0;
  const meisterTalentOtherLocationFemale =
    data.categories.MEISTER_TALENT?.otherLocationFemale || 0;
  const meisterTalentOtherLocationTotal =
    meisterTalentOtherLocationMale + meisterTalentOtherLocationFemale;

  const meisterTalentTotal = meisterTalentBusanTotal + meisterTalentOtherLocationTotal;

  const socialIntegrationBusanMale = data.categories.SOCIAL_INTEGRATION?.busanMale || 0;
  const socialIntegrationBusanFemale =
    data.categories.SOCIAL_INTEGRATION?.busanFemale || 0;
  const socialIntegrationBusanTotal =
    socialIntegrationBusanMale + socialIntegrationBusanFemale;

  const socialIntegrationOtherLocationMale =
    data.categories.SOCIAL_INTEGRATION?.otherLocationMale || 0;
  const socialIntegrationOtherLocationFemale =
    data.categories.SOCIAL_INTEGRATION?.otherLocationFemale || 0;
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
