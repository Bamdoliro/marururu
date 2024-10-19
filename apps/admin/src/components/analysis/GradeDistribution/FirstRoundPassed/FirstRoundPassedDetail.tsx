import { Column, Row, Td, Th } from '@maru/ui';
import { useGradeDistributionListQuery } from '@/services/analysis/queries';
import type { FormType } from '@/types/analysis/client';

const FirstRoundPassedDetail = () => {
  const { data: dataList } = useGradeDistributionListQuery({
    statusList: ['FIRST_PASSED', 'FAILED', 'PASSED'],
  });
  const getMaxMinByType = (type: FormType) => {
    const entries = dataList?.filter((item) => item.type === type);
    if (!entries || entries.length === 0) {
      return { max: 0, min: 0 };
    }
    const max = Math.max(...entries.map((item) => item.firstRoundMax)).toFixed(3);
    const min = Math.min(...entries.map((item) => item.firstRoundMin)).toFixed(3);
    return { max, min };
  };

  const regularApplicant = getMaxMinByType('REGULAR');
  const meisterTalentApplicant = getMaxMinByType('MEISTER_TALENT');
  const nationalBasicLivingApplicant = getMaxMinByType('NATIONAL_BASIC_LIVING');
  const nearPovertyApplicant = getMaxMinByType('NEAR_POVERTY');
  const nationalVeteransApplicant = getMaxMinByType('NATIONAL_VETERANS');
  const oneParentApplicant = getMaxMinByType('ONE_PARENT');
  const fromNorthKoreaApplicant = getMaxMinByType('FROM_NORTH_KOREA');
  const multiculturalApplicant = getMaxMinByType('MULTICULTURAL');
  const teenHouseholderApplicant = getMaxMinByType('TEEN_HOUSEHOLDER');
  const multiChildrenApplicant = getMaxMinByType('MULTI_CHILDREN');
  const farmingAndFishingApplicant = getMaxMinByType('FARMING_AND_FISHING');
  const specialAdmissionApplicant = getMaxMinByType('SPECIAL_ADMISSION');
  const nationalVeteransEducationApplicant = getMaxMinByType(
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
        <Th width={80} height={56}>
          최고점
        </Th>
        <Th width={80} height={56} borderTopRightRadius={12}>
          최하점
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
          {regularApplicant.max}
        </Td>
        <Td width={80} height={56}>
          {regularApplicant.min}
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
              {meisterTalentApplicant.max}
            </Td>
            <Td width={80} height={56}>
              {meisterTalentApplicant.min}
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
                  {nationalBasicLivingApplicant.max}
                </Td>
                <Td width={80} height={56}>
                  {nationalBasicLivingApplicant.min}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  차상위계층
                </Td>
                <Td width={80} height={56}>
                  {nearPovertyApplicant.max}
                </Td>
                <Td width={80} height={56}>
                  {nearPovertyApplicant.min}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  국가보훈대상자 (국가유공자)
                </Td>
                <Td width={80} height={56}>
                  {nationalVeteransApplicant.max}
                </Td>
                <Td width={80} height={56}>
                  {nationalVeteransApplicant.min}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  한부모가정
                </Td>
                <Td width={80} height={56}>
                  {oneParentApplicant.max}
                </Td>
                <Td width={80} height={56}>
                  {oneParentApplicant.min}
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
                  {fromNorthKoreaApplicant.max}
                </Td>
                <Td width={80} height={56}>
                  {fromNorthKoreaApplicant.min}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  다문화가족 자녀
                </Td>
                <Td width={80} height={56}>
                  {multiculturalApplicant.max}
                </Td>
                <Td width={80} height={56}>
                  {multiculturalApplicant.min}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  소년 · 소녀가장
                </Td>
                <Td width={80} height={56}>
                  {teenHouseholderApplicant.max}
                </Td>
                <Td width={80} height={56}>
                  {teenHouseholderApplicant.min}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  다자녀 가정 자녀
                </Td>
                <Td width={80} height={56}>
                  {multiChildrenApplicant.max}
                </Td>
                <Td width={80} height={56}>
                  {multiChildrenApplicant.min}
                </Td>
              </Row>
              <Row>
                <Td width={240} height={56}>
                  농어촌지역출신자
                </Td>
                <Td width={80} height={56}>
                  {farmingAndFishingApplicant.max}
                </Td>
                <Td width={80} height={56}>
                  {farmingAndFishingApplicant.min}
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
              {nationalVeteransEducationApplicant.max}
            </Td>
            <Td width={80} height={56}>
              {nationalVeteransEducationApplicant.min}
            </Td>
          </Row>
          <Row>
            <Td width={240} height={56}>
              특례입학 대상자
            </Td>
            <Td width={240} height={56}>
              <div></div>
            </Td>
            <Td width={80} height={56}>
              {specialAdmissionApplicant.max}
            </Td>
            <Td width={80} height={56} borderBottomRightRadius={12}>
              {specialAdmissionApplicant.min}
            </Td>
          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default FirstRoundPassedDetail;
