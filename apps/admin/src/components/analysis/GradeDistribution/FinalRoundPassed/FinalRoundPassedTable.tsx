import { Column, Row, Td, Th, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import FinalRoundPassedDetail from './FinalRoundPassedDetail';

const FinalRoundPassedTable = () => {
  return (
    <Layout>
      <LeftBox>
        <TotalBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              최고점 점수
            </Text>
            <Text fontType="D1" width={60}>
              240.000
            </Text>
          </ApplicantsBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              최하점 점수
            </Text>
            <Text fontType="D1" width={60}>
              167.823
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
                240.000
              </Td>
              <Td width={112} height={56}>
                240.000
              </Td>
            </Row>
            <Row>
              <Td styleType="SECONDARY" width={112} height={56}>
                최하 점수
              </Td>
              <Td width={112} height={56}>
                175.765
              </Td>
              <Td width={112} height={56}>
                163.908
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
                185.390
              </Td>
              <Td width={112} height={56} borderBottomRightRadius={12}>
                179.456
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
