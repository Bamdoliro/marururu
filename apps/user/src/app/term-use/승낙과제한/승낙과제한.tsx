import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import styled from 'styled-components';

const 승낙과제한 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제7조 (회원 가입 신청의 승낙과 제한)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 우리학교는 전조의 규정에 의한 이용희망자에 대하여 다음 각 호의 사유를 모두
            충족할 경우 우리학교가 제공하는 절차에 따라 회원 가입을 승낙합니다.
          </Text>
        </Indent>
        <DoubleIndent>
          <Text fontType="p3" color={color.gray900}>
            a. 우리학교의 업무수행 및 서비스 제공을 위한 설비의 여유•기술상 지장이 없는
            경우
            <br />
            b. 본 약관에서 정하는 승낙 제한 또는 거절, 보류 사유에 해당하지 않는 경우
            <br />
            c. 기타 사이트의 사정상 필요하다고 인정되는 경우
          </Text>
        </DoubleIndent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 다음 각 호 중 어느 하나에 해당할 경우, 우리학교는 이용희망자의 회원 가입
            신청을 승낙하지 아니하며, 회원이 제1호 또는 제2호에 해당하는 행위를 한 경우,
            우리학교는 이에 대한 민사상
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;손해배상청구, 관계법령에 따른 형사처벌이나 행정제재를
            위한 법적 절차를 진행할 수 있습니다.
          </Text>
        </Indent>
        <DoubleIndent>
          <Text fontType="p3" color={color.gray900}>
            a. 회원 가입 신청 및/또는 실명인증 시에 실명이 아닌 이름을 이용하였거나 타인의
            명의를 도용한 경우
            <br />
            b. 회원 가입 신청 시에 회원 정보를 허위로 기재한 경우
          </Text>
        </DoubleIndent>
      </TextBlock>
    </Column>
  );
};

export default 승낙과제한;

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
