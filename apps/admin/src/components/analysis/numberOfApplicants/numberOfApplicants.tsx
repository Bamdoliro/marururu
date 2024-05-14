import { Column, Row, Td, Th, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import NumberOfApplicantsDetail from './numberOfApplicantsDetail/numberOfApplicantsDetail';

const NumberOfApplicants = () => {
  return (
    <Layout>
      <LeftBox>
        <TotalBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              전체 지원자 수
            </Text>
            <Text fontType="D1" width={60}>
              숫자
            </Text>
          </ApplicantsBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              전체 경쟁률
            </Text>
            <Text fontType="D1" width={60}>
              숫자
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
                <div></div>
              </Td>
              <Td width={112} height={56}>
                <div></div>
              </Td>
              <Td width={112} height={56}>
                <div></div>
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
                <div></div>
              </Td>
              <Td width={112} height={56}>
                <div></div>
              </Td>
              <Td width={112} height={56} borderBottomRightRadius={12}>
                <div></div>
              </Td>
            </Row>
          </Column>
        </LeftDetailBox>
      </LeftBox>
      <NumberOfApplicantsDetail />
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
