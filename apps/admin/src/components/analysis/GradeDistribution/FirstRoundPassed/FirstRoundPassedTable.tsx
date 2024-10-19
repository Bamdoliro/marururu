import { Column, Row, Td, Th, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import FirstRoundPassedDetail from './FirstRoundPassedDetail';
import { useGradeDistributionListQuery } from '@/services/analysis/queries';

const FirstRoundPassedTable = () => {
  const { data: dataList } = useGradeDistributionListQuery({
    statusList: ['NO_SHOW', 'FIRST_PASSED', 'FAILED', 'PASSED'],
  });

  const entireFirstRoundMax = dataList
    ? Math.max(...dataList.map((item) => item.firstRoundMax)).toFixed(3)
    : undefined;

  const entireFirstRoundMinCom = dataList
    ? dataList
        .map((item) => item.firstRoundMin)
        .filter((value) => value !== 0)
        .reduce((min, value) => Math.min(min, value), Infinity)
        .toFixed(3)
    : '0.000';

  const entireFirstRoundMin =
    entireFirstRoundMinCom === 'Infinity' ? '0.000' : entireFirstRoundMinCom;

  const regularFirstRoundMax = dataList
    ? Math.max(
        ...dataList
          .filter((item) => item.type === 'REGULAR')
          .map((item) => item.firstRoundMax)
      ).toFixed(3)
    : undefined;

  const SpecialAdmissionFirstRoundMax = dataList
    ? Math.max(
        ...dataList
          .filter(
            (item) =>
              !['REGULAR', 'SPECIAL_ADMISSION', 'NATIONAL_VETERANS_EDUCATION'].includes(
                item.type
              )
          )
          .map((item) => item.firstRoundMax)
      ).toFixed(3)
    : undefined;

  const regularFirstRoundMin = dataList
    ? Math.min(
        ...dataList
          .filter((item) => item.type === 'REGULAR')
          .map((item) => item.firstRoundMin)
      ).toFixed(3)
    : undefined;

  const specialAdmissionFirstRoundMinCom = dataList
    ? dataList
        .filter(
          (item) =>
            !['REGULAR', 'SPECIAL_ADMISSION', 'NATIONAL_VETERANS_EDUCATION'].includes(
              item.type
            ) && item.firstRoundMin !== 0
        )
        .map((item) => item.firstRoundMin)
        .reduce((min, value) => Math.min(min, value), Infinity)
        .toFixed(3)
    : '0.000';

  const specialAdmissionFirstRoundMin =
    specialAdmissionFirstRoundMinCom === 'Infinity'
      ? '0.000'
      : specialAdmissionFirstRoundMinCom;

  const regularFirstRoundAvg = dataList
    ?.filter((item) => ['REGULAR'].includes(item.type))
    .map((item) => item.firstRoundAvg.toFixed(3));

  const SpecialAdmissionData =
    dataList
      ?.filter(
        (item) =>
          !['REGULAR', 'SPECIAL_ADMISSION', 'NATIONAL_VETERANS_EDUCATION'].includes(
            item.type
          )
      )
      .filter((item) => item.firstRoundAvg !== 0) || [];

  const totalFirstRoundAvg = SpecialAdmissionData.reduce(
    (sum, item) => sum + item.firstRoundAvg,
    0
  );

  const SpecialAdmissionFirstRoundAvg =
    totalFirstRoundAvg !== 0
      ? (totalFirstRoundAvg / SpecialAdmissionData.length).toFixed(3)
      : '0.000';

  return (
    <Layout>
      <LeftBox>
        <TotalBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              최고점 점수
            </Text>
            <Text fontType="D1" width={60}>
              {entireFirstRoundMax}
            </Text>
          </ApplicantsBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              최하점 점수
            </Text>
            <Text fontType="D1" width={60}>
              {entireFirstRoundMin}
            </Text>
          </ApplicantsBox>
        </TotalBox>
        <LeftDetailBox>
          <Text fontType="H3" color={color.gray750} width={60}>
            모든 전형의 점수와 평균
          </Text>
          <Column>
            <Row>
              <Th width={112} height={56} borderTopLeftRadius={12}>
                <div></div>
              </Th>
              <Th width={112} height={56}>
                일반 전형
              </Th>
              <Th width={112} height={56} borderTopRightRadius={12}>
                특별 전형
              </Th>
            </Row>
            <Row>
              <Td styleType="SECONDARY" width={112} height={56}>
                최고 점수
              </Td>
              <Td width={112} height={56}>
                {regularFirstRoundMax}
              </Td>
              <Td width={112} height={56}>
                {SpecialAdmissionFirstRoundMax}
              </Td>
            </Row>
            <Row>
              <Td styleType="SECONDARY" width={112} height={56}>
                최하 점수
              </Td>
              <Td width={112} height={56}>
                {regularFirstRoundMin}
              </Td>
              <Td width={112} height={56}>
                {specialAdmissionFirstRoundMin}
              </Td>
            </Row>
            <Row>
              <Td
                styleType="SECONDARY"
                width={112}
                height={56}
                borderBottomLeftRadius={12}
              >
                평균
              </Td>
              <Td width={112} height={56}>
                {regularFirstRoundAvg}
              </Td>
              <Td width={112} height={56} borderBottomRightRadius={12}>
                {SpecialAdmissionFirstRoundAvg}
              </Td>
            </Row>
          </Column>
        </LeftDetailBox>
      </LeftBox>
      <FirstRoundPassedDetail />
    </Layout>
  );
};

export default FirstRoundPassedTable;

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
  height: 124%;
  gap: 24px;
  margin-right: 80px;
`;
