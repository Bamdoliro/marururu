import { Column, Row, Td, Th } from '@maru/ui';
import { useNumberOfApplicantsListQuery } from '@/services/analysis/queries';
import type { FormType } from '@/types/analysis/client';

const ApplyingTypeDetail = () => {
  const { data: formList } = useNumberOfApplicantsListQuery();

  const totalCount = formList?.reduce((sum, item) => sum + item.count, 0) || 0;

  const getRatiotByType = (type: FormType) => {
    const entry = formList?.find((item) => item.type === type);
    return entry ? ((entry.count / totalCount) * 100).toFixed(1) + '%' : 0;
  };
  const regularApplicant = getRatiotByType('REGULAR');
  const meisterTalentApplicant = getRatiotByType('MEISTER_TALENT');
  const nationalBasicLivingApplicant = getRatiotByType('NATIONAL_BASIC_LIVING');
  const nearPovertyApplicant = getRatiotByType('NEAR_POVERTY');
  const nationalVeteransApplicant = getRatiotByType('NATIONAL_VETERANS');
  const oneParentApplicant = getRatiotByType('ONE_PARENT');
  const fromNorthKoreaApplicant = getRatiotByType('FROM_NORTH_KOREA');
  const multiculturalApplicant = getRatiotByType('MULTICULTURAL');
  const teenHouseholderApplicant = getRatiotByType('TEEN_HOUSEHOLDER');
  const multiChildrenApplicant = getRatiotByType('MULTI_CHILDREN');
  const farmingAndFishingApplicant = getRatiotByType('FARMING_AND_FISHING');
  const specialAdmissionApplicant = getRatiotByType('SPECIAL_ADMISSION');
  const nationalVeteransEducationApplicant = getRatiotByType(
    'NATIONAL_VETERANS_EDUCATION'
  );
  return (
    <Column>
      <Row>
        <Th width={200} height={56} borderTopLeftRadius={12}>
          전형
        </Th>
        <Th width={240} height={56}>
          유형
        </Th>
        <Th width={240} height={56}>
          구분
        </Th>
        <Th width={80} height={56} borderTopRightRadius={12}>
          지원자
        </Th>
      </Row>
      <Row>
        <Td width={200} height={56}>
          일반전형
        </Td>
        <Td width={240} height={56}>
          <div></div>
        </Td>
        <Td width={240} height={56}>
          <div></div>
        </Td>
        <Td width={80} height={56}>
          {regularApplicant}
        </Td>
      </Row>
      <Row>
        <Td width={200} height={560}>
          특별전형
        </Td>
        <Column>
          <Row>
            <Td width={240} height={56}>
              마이스터 인재 전형
            </Td>
            <Td width={240} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56}>
              {meisterTalentApplicant}
            </Td>
          </Row>
          <Row>
            <Td width={240} height={280}>
              기회균등 전형
            </Td>
            <Column>
              <Row>
                <Td width={240} height={56}>
                  국민기초생활수급자
                </Td>
                <Td width={80} height={56}>
                  {nationalBasicLivingApplicant}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  차상위계층
                </Td>
                <Td width={80} height={56}>
                  {nearPovertyApplicant}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  국가보훈대상자 (국가유공자)
                </Td>
                <Td width={80} height={56}>
                  {nationalVeteransApplicant}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  한부모가정보호대상자
                </Td>
                <Td width={80} height={56}>
                  {oneParentApplicant}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  북한이탈주민 또는 그 자녀
                </Td>
                <Td width={80} height={56}>
                  {fromNorthKoreaApplicant}
                </Td>
              </Row>
            </Column>
          </Row>
          <Row>
            <Td width={240} height={224}>
              사회다양성 전형
            </Td>
            <Column>
              <Row>
                <Td width={240} height={56}>
                  다문화가정 자녀
                </Td>
                <Td width={80} height={56}>
                  {multiculturalApplicant}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  소년 · 소녀가장
                </Td>
                <Td width={80} height={56}>
                  {teenHouseholderApplicant}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  다자녀 가정 자녀
                </Td>
                <Td width={80} height={56}>
                  {multiChildrenApplicant}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  농어촌지역출신자
                </Td>
                <Td width={80} height={56}>
                  {farmingAndFishingApplicant}
                </Td>
              </Row>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row>
        <Td width={200} height={112} borderBottomLeftRadius={12}>
          정원 외 전형
        </Td>
        <Column>
          <Row>
            <Td width={240} height={56}>
              국가보훈대상자 중 교육지원대상자
            </Td>
            <Td width={240} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56}>
              {nationalVeteransEducationApplicant}
            </Td>
          </Row>
          <Row>
            <Td width={240} height={56}>
              특례입학 대상자
            </Td>
            <Td width={240} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56} borderBottomRightRadius={12}>
              {specialAdmissionApplicant}
            </Td>
          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default ApplyingTypeDetail;
