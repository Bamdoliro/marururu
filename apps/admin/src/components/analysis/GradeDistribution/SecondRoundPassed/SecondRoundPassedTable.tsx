import { Column, Row, Td, Th, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import SecondRoundPassedDetail from './SecondRoundPassedDetail';
import { useGradeDistributionListQuery } from '@/services/analysis/queries';

const SecondRoundPassedTable = () => {
  const { data: dataList } = useGradeDistributionListQuery({
    statusList: ['FAILED', 'PASSED'],
  });

  const entireSecondRoundMax = dataList
    ? Math.max(...dataList.map((item) => item.totalMax)).toFixed(3)
    : undefined;

  const entireSecondRoundMinCom = dataList
    ? dataList
        .map((item) => item.totalMin)
        .filter((value) => value !== 0)
        .reduce((min, value) => Math.min(min, value), Infinity)
        .toFixed(3)
    : '0.000';

  const entireSecondRoundMin =
    entireSecondRoundMinCom === 'Infinity' ? '0.000' : entireSecondRoundMinCom;

  const regularSecondRoundMax = dataList
    ? Math.max(
        ...dataList.filter((item) => item.type === 'REGULAR').map((item) => item.totalMax)
      ).toFixed(3)
    : undefined;

  const SpecialAdmissionSecondRoundMax = dataList
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

  const regularSecondRoundMin = dataList
    ? Math.min(
        ...dataList.filter((item) => item.type === 'REGULAR').map((item) => item.totalMin)
      ).toFixed(3)
    : undefined;

  const specialAdmissionSecondRoundMinCom = dataList
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

  const specialAdmissionSecondRoundMin =
    specialAdmissionSecondRoundMinCom === 'Infinity'
      ? '0.000'
      : specialAdmissionSecondRoundMinCom;

  const regularSecondRoundAvg = dataList
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

  const secondRoundAvgSum = SpecialAdmissionData.reduce(
    (sum, item) => sum + item.totalAvg,
    0
  );

  const SpecialAdmissionSecondRoundAvg =
    secondRoundAvgSum !== 0
      ? (secondRoundAvgSum / SpecialAdmissionData.length).toFixed(3)
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
              {entireSecondRoundMax}
            </Text>
          </ApplicantsBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              최하점 점수
            </Text>
            <Text fontType="D1" width={60}>
              {entireSecondRoundMin}
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
                {regularSecondRoundMax}
              </Td>
              <Td width={112} height={56}>
                {SpecialAdmissionSecondRoundMax}
              </Td>
            </Row>
            <Row>
              <Td styleType="SECONDARY" width={112} height={56}>
                최하 점수
              </Td>
              <Td width={112} height={56}>
                {regularSecondRoundMin}
              </Td>
              <Td width={112} height={56}>
                {specialAdmissionSecondRoundMin}
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
                {regularSecondRoundAvg}
              </Td>
              <Td width={112} height={56} borderBottomRightRadius={12}>
                {SpecialAdmissionSecondRoundAvg}
              </Td>
            </Row>
          </Column>
        </LeftDetailBox>
      </LeftBox>
      <SecondRoundPassedDetail />
    </Layout>
  );
};

export default SecondRoundPassedTable;

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
