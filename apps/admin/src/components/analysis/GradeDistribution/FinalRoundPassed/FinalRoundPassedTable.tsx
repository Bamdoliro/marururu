import { Column, Row, Td, Th, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import FinalRoundPassedDetail from './FinalRoundPassedDetail';
import { useGradeDistributionListQuery } from '@/services/analysis/queries';

const FinalRoundPassedTable = () => {
  const { data: dataList } = useGradeDistributionListQuery({
    statusList: ['PASSED'],
  });

  const entireFinalRoundMax = dataList
    ? Math.max(...dataList.map((item) => item.totalMax)).toFixed(3)
    : undefined;

  const entireFinalRoundMinCom = dataList
    ? dataList
        .map((item) => item.totalMin)
        .filter((value) => value !== 0)
        .reduce((min, value) => Math.min(min, value), Infinity)
        .toFixed(3)
    : '0.000';

  const entireFinalRoundMin =
    entireFinalRoundMinCom === 'Infinity' ? '0.000' : entireFinalRoundMinCom;

  const regularFinalRoundMax = dataList
    ? Math.max(
        ...dataList.filter((item) => item.type === 'REGULAR').map((item) => item.totalMax)
      ).toFixed(3)
    : undefined;

  const SpecialAdmissionFinalRoundMax = dataList
    ? Math.max(
        ...dataList
          .filter(
            (item) =>
              !['REGULAR', 'SPECIAL_ADMISSION', 'NATIONAL_VETERANS_EDUCATION'].includes(
                item.type
              )
          )
          .map((item) => item.totalMax)
      ).toFixed(3)
    : undefined;

  const regularFinalRoundMin = dataList
    ? Math.min(
        ...dataList.filter((item) => item.type === 'REGULAR').map((item) => item.totalMin)
      ).toFixed(3)
    : undefined;

  const specialAdmissionFinalRoundMinCom = dataList
    ? dataList
        .filter(
          (item) =>
            !['REGULAR', 'SPECIAL_ADMISSION', 'NATIONAL_VETERANS_EDUCATION'].includes(
              item.type
            ) && item.totalMin !== 0
        )
        .map((item) => item.totalMin)
        .reduce((min, value) => Math.min(min, value), Infinity)
        .toFixed(3)
    : '0.000';

  const specialAdmissionFinalRoundMin =
    specialAdmissionFinalRoundMinCom === 'Infinity'
      ? '0.000'
      : specialAdmissionFinalRoundMinCom;

  const regularFinalRoundAvg = dataList
    ?.filter((item) => item.type === 'REGULAR')
    .map((item) => item.totalAvg)
    .reduce((sum, value) => sum + (value || 0), 0)
    .toFixed(3);

  const SpecialAdmissionData =
    dataList
      ?.filter(
        (item) =>
          !['REGULAR', 'SPECIAL_ADMISSION', 'NATIONAL_VETERANS_EDUCATION'].includes(
            item.type
          )
      )
      .filter((item) => item.totalAvg !== 0) || [];

  const finalRoundAvgSum = SpecialAdmissionData.reduce(
    (sum, item) => sum + item.totalAvg,
    0
  );

  const SpecialAdmissionFinalRoundAvg =
    finalRoundAvgSum !== 0
      ? (finalRoundAvgSum / SpecialAdmissionData.length).toFixed(3)
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
              {entireFinalRoundMax}
            </Text>
          </ApplicantsBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              최하점 점수
            </Text>
            <Text fontType="D1" width={60}>
              {entireFinalRoundMin}
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
                {regularFinalRoundMax}
              </Td>
              <Td width={112} height={56}>
                {SpecialAdmissionFinalRoundMax}
              </Td>
            </Row>
            <Row>
              <Td styleType="SECONDARY" width={112} height={56}>
                최하 점수
              </Td>
              <Td width={112} height={56}>
                {regularFinalRoundMin}
              </Td>
              <Td width={112} height={56}>
                {specialAdmissionFinalRoundMin}
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
                {regularFinalRoundAvg}
              </Td>
              <Td width={112} height={56} borderBottomRightRadius={12}>
                {SpecialAdmissionFinalRoundAvg}
              </Td>
            </Row>
          </Column>
        </LeftDetailBox>
      </LeftBox>
      <FinalRoundPassedDetail />
    </Layout>
  );
};

export default FinalRoundPassedTable;

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
