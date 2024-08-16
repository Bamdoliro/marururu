import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import styled from 'styled-components';

const SiteObligations = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제9조 (서비스의 내용)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 우리학교가 제공하는 서비스의 내용은 다음 각 호와 같습니다.
          </Text>
        </Indent>
        <DoubleIndent>
          <Text fontType="p3" color={color.gray900}>
            a. 원서 등록 및 원서 작성
            <br />
            b. 원서 합격 및 불합격 결과 안내와 관련된 서비스
            <br />
            c. 기타 제1호 내지 제2호까지의 서비스와 관련된 제반 서비스
          </Text>
        </DoubleIndent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 서비스 내용의 변경 시 우리학교는 사전에 회원에게 고지하고 동의를 받아야
            합니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default SiteObligations;

const TextBlock = styled.div`
  line-height: 1.5;
  color: ${color.gray900};
`;

const Indent = styled.div`
  margin-left: 10px;
`;

const DoubleIndent = styled.div`
  margin-left: 20px;
`;
