import { Column, Row, Td, Th } from '@maru/ui';
import { useNumberOfApplicantsListQuery } from '@/services/analysis/queries';
import type { FormType } from '@/types/analysis/client';

const NumberOfApplicants = () => {
  const { data: formList } = useNumberOfApplicantsListQuery();
  const getCountByType = (type: FormType) => {
    const entry = formList?.find((item) => item.type === type);
    return entry ? entry.count : 0;
  };
  const regularApplicant = getCountByType('REGULAR');
  const meisterTalentApplicant = getCountByType('MEISTER_TALENT');
  const nationalBasicLivingApplicant = getCountByType('NATIONAL_BASIC_LIVING');
  const nearPovertyApplicant = getCountByType('NEAR_POVERTY');
  const nationalVeteransApplicant = getCountByType('NATIONAL_VETERANS');
  const oneParentApplicant = getCountByType('ONE_PARENT');
  const fromNorthKoreaApplicant = getCountByType('FROM_NORTH_KOREA');
  const multiculturalApplicant = getCountByType('MULTICULTURAL');
  const teenHouseholderApplicant = getCountByType('TEEN_HOUSEHOLDER');
  const multiChildrenApplicant = getCountByType('MULTI_CHILDREN');
  const farmingAndFishingApplicant = getCountByType('FARMING_AND_FISHING');
  const specialAdmissionApplicant = getCountByType('SPECIAL_ADMISSION');
  const nationalVeteransEducationApplicant = getCountByType(
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
          일반 전형
        </Td>
        <Td width={240} height={56}>
          {null}
        </Td>
        <Td width={240} height={56}>
          {null}
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
              {null}
            </Td>
            <Td width={80} height={56}>
              {meisterTalentApplicant}
            </Td>
          </Row>
          <Row>
            <Td width={240} height={224}>
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
                  한부모가정
                </Td>
                <Td width={80} height={56}>
                  {oneParentApplicant}
                </Td>
              </Row>
            </Column>
          </Row>
          <Row>
            <Td width={240} height={280}>
              사회다양성 전형
            </Td>
            <Column>
              <Row>
                <Td width={240} height={56}>
                  북한이탈청소년
                </Td>
                <Td width={80} height={56}>
                  {fromNorthKoreaApplicant}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  다문화가족 자녀
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
                  농어촌 지역 출신자
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
              {null}
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
              {null}
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

export default NumberOfApplicants;
