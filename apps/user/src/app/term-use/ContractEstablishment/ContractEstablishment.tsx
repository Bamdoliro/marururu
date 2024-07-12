import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import styled from 'styled-components';

const ContractEstablishment = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제6조 (이용 계약의 성립)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 서비스 이용계약은 회원 서비스를 이용하고자 하는 자(이하 “이용희망자”라
            합니다)의 본 약관과 개인정보 처리방침의 내용에 대한 동의 및 회원 가입 신청에
            대하여 우리학교가 승낙함으로
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;써 성립합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 사이트를 통한 회원 가입 시 이용희망자는 본 약관 및 개인정보 처리방침에 대한
            동의 표시 및 회원 가입 신청을 하여야 하며, 우리학교는 이용희망자가 본 약관 및
            개인정보 처리방침의 내용
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;을 읽고 동의한 것으로 봅니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            3. 이용자는 본 약관 및 우리학교의 개인정보 처리방침에서 정한 항목을 제공하여야
            합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            4. 회원의 경우 회원이 '동의' 버튼을 누르면 이 약관에 동의하는 것으로
            간주됩니다. 약관 변경 시에도 이와 동일하며, 변경된 약관에 동의하지 않을 경우
            회원 등록 취소가 가능합니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default ContractEstablishment;

const TextBlock = styled.div`
  line-height: 1.5;
  color: ${color.gray900};
`;

const Indent = styled.div`
  margin-left: 10px;
`;
