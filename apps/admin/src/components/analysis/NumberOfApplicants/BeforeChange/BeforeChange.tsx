import { Column, Row, Td, Th, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { useNumberOfApplicantsListQuery } from '@/services/analysis/queries';
import BeforeChangeDetail from './BeforeChangeDetail';

const NumberOfApplicants = () => {
  const { data: formList } = useNumberOfApplicantsListQuery({ type: 'ORIGINAL' });

  const totalCount = formList?.reduce((sum, item) => sum + item.count, 0);
  const competitionRate = totalCount ? (totalCount / 64).toFixed(2) : '0.00';

  const regularCount =
    formList
      ?.filter((item) => item.type === 'REGULAR')
      .reduce((sum, item) => sum + item.count, 0) || 0;

  const specialAdmissionCount =
    formList
      ?.filter(
        (item) =>
          !['REGULAR', 'SPECIAL_ADMISSION', 'NATIONAL_VETERANS_EDUCATION'].includes(
            item.type
          )
      )
      .reduce((sum, item) => sum + item.count, 0) || 0;

  const otherCount =
    formList
      ?.filter(
        (item) =>
          item.type === 'SPECIAL_ADMISSION' || item.type === 'NATIONAL_VETERANS_EDUCATION'
      )
      .reduce((sum, item) => sum + item.count, 0) || 0;

  const regularCompetitionRate = (regularCount / 36).toFixed(1);
  const specialAdmissionCompetitionRate = (specialAdmissionCount / 28).toFixed(1);
  const otherCompetitionRate = (otherCount / 3).toFixed(1);

  return (
    <Layout>
      <LeftBox>
        <TotalBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              전체 지원자 수
            </Text>
            <Text fontType="D1" width={60}>
              {totalCount}
            </Text>
          </ApplicantsBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              전체 경쟁률
            </Text>
            <Text fontType="D1" width={60}>
              {competitionRate} : 1
            </Text>
          </ApplicantsBox>
        </TotalBox>
        <LeftDetailBox>
          <Text fontType="H3" color={color.gray750} width={60}>
            전형별 지원자 수와 경쟁률
          </Text>
          <Column>
            <Row>
              <Th width={112} height={56} borderTopLeftRadius={12}>
                <></>
              </Th>
              <Th width={112} height={56}>
                일반 전형
              </Th>
              <Th width={112} height={56}>
                특별 전형
              </Th>
              <Th width={112} height={56} borderTopRightRadius={12}>
                정원 외 전형
              </Th>
            </Row>
            <Row>
              <Td styleType="SECONDARY" width={112} height={56}>
                지원자 수
              </Td>
              <Td width={112} height={56}>
                {regularCount}
              </Td>
              <Td width={112} height={56}>
                {specialAdmissionCount}
              </Td>
              <Td width={112} height={56}>
                {otherCount}
              </Td>
            </Row>
            <Row>
              <Td
                styleType="SECONDARY"
                width={112}
                height={56}
                borderBottomLeftRadius={12}
              >
                경쟁률
              </Td>
              <Td width={112} height={56}>
                {regularCompetitionRate}
              </Td>
              <Td width={112} height={56}>
                {specialAdmissionCompetitionRate}
              </Td>
              <Td width={112} height={56} borderBottomRightRadius={12}>
                {otherCompetitionRate}
              </Td>
            </Row>
          </Column>
        </LeftDetailBox>
      </LeftBox>
      <BeforeChangeDetail />
    </Layout>
  );
};

export default NumberOfApplicants;

const Layout = styled.div`
  ${flex({ flexDirection: 'row' })}
  width: 100%;
  height: 100vh;
`;

const LeftBox = styled.div`
  ${flex({ justifyContent: 'space-between', flexDirection: 'column' })}
  width: 100%;
  height: 100vh;
`;

const TotalBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  height: 100%;
  margin-top: 36px;
  gap: 40px;
`;

const ApplicantsBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
`;

const LeftDetailBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  height: 100%;
  gap: 24px;
`;
