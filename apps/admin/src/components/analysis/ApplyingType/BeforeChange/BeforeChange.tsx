import { Column, Row, Td, Th, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { useNumberOfApplicantsListQuery } from '@/services/analysis/queries';
import BeforeChangeDetail from './BeforeChangeDetail';

const BeforeChange = () => {
  const { data: formList } = useNumberOfApplicantsListQuery({ type: 'ORIGINAL' });

  const totalCount = formList?.reduce((sum, item) => sum + item.count, 0) || 0;

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

  const regularRatio =
    totalCount !== 0 ? ((regularCount / totalCount) * 100).toFixed(1) + '%' : 0;
  const specialAdmissionRatio =
    totalCount !== 0 ? ((specialAdmissionCount / totalCount) * 100).toFixed(1) + '%' : 0;
  const otherRatio =
    totalCount !== 0 ? ((otherCount / totalCount) * 100).toFixed(1) + '%' : 0;
  return (
    <Layout>
      <LeftBox>
        <TotalBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              일반 전형 지원 비율
            </Text>
            <Text fontType="D1" width={60}>
              {regularRatio}
            </Text>
          </ApplicantsBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              특별 전형 지원 비율
            </Text>
            <Text fontType="D1" width={60}>
              {specialAdmissionRatio}
            </Text>
          </ApplicantsBox>
        </TotalBox>
        <LeftDetailBox>
          <Text fontType="H3" color={color.gray750} width={60}>
            전형별 지원자 수와 지원 비율
          </Text>
          <Column>
            <Row>
              <Th width={112} height={56} borderTopLeftRadius={12}>
                <div></div>
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
                지원 비율
              </Td>
              <Td width={112} height={56}>
                {regularRatio}
              </Td>
              <Td width={112} height={56}>
                {specialAdmissionRatio}
              </Td>
              <Td width={112} height={56} borderBottomRightRadius={12}>
                {otherRatio}
              </Td>
            </Row>
          </Column>
        </LeftDetailBox>
      </LeftBox>
      <BeforeChangeDetail />
    </Layout>
  );
};

export default BeforeChange;

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
