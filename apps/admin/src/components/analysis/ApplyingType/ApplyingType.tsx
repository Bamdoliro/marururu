import { Column, Row, Td, Th, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import ApplyingTypeDetail from './ApplyingTypeDetail/ApplyingTypeDetail';

const ApplyingType = () => {
  return (
    <Layout>
      <LeftBox>
        <TotalBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              일반 전형 지원 비율
            </Text>
            <Text fontType="D1" width={60}>
              43.4 %
            </Text>
          </ApplicantsBox>
          <ApplicantsBox>
            <Text fontType="H3" color={color.gray750} width={60}>
              특수 전형 지원 비율
            </Text>
            <Text fontType="D1" width={60}>
              56.6 %
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
                37
              </Td>
              <Td width={112} height={56}>
                59
              </Td>
              <Td width={112} height={56}>
                0
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
                43.4 %
              </Td>
              <Td width={112} height={56}>
                56.6 %
              </Td>
              <Td width={112} height={56} borderBottomRightRadius={12}>
                0 %
              </Td>
            </Row>
          </Column>
        </LeftDetailBox>
      </LeftBox>
      <ApplyingTypeDetail />
    </Layout>
  );
};

export default ApplyingType;

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
