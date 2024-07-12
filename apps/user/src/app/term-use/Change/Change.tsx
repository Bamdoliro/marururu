import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import styled from 'styled-components';

const Change = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제3조 (약관의 효력 및 변경)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 우리학교는 본 약관의 내용을 본 약관의 내용과 상호, 영업소 소재지, 연락처
            등을 이용자가 알 수 있도록 초기 화면에 게시하거나 기타의 방법으로 이용자에게
            공지합니다. 약관의 내용은 이<br />
            &nbsp;&nbsp;&nbsp;용자가 사이트 등의 링크를 통한 연결화면을 통하여 볼 수
            있도록 할 수 있습니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 우리학교는 약관의 규제 등에 관한 법률, 전기통신기본법, 전기통신사업법,
            정보통신망 이용 촉진 및 정보보호 등에 관한 법률 등 관련법을 위배하지 않는
            범위에서 본 약관을 개정할 수 있습
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            3. 우리학교는 약관을 개정할 경우에는 개정 약관 적용일 최소 7일전(약관의 변경이
            회원에게 불리하거나 회원의 권리•의무의 중요한 변경의 경우에는 30일전)부터
            웹사이트 초기화면 공지사
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;항 또는 이메일을 통해 사전 공지합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            4. 회원은 변경된 약관에 대해 거부할 권리가 있으며, 회원은 변경된 약관이 공지된
            지 15일 이내에 변경 약관에 대한 거부 의사를 표시할 수 있습니다. 만약, 회원이
            거부 의사를 표시하지 않고
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;서비스를 계속 이용하는 경우, 우리학교는 회원이 변경
            약관 적용에 동의하는 것으로 봅니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            5. 회원이 제4항에 따라 변경 약관 적용을 거부할 의사를 표시한 경우, 우리학교는
            회원에게 15일의 기간을 정하여 사전 통지 후 해당 회원과의 서비스 이용계약
            또는/및 별도로 체결된 계약을
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;해지할 수 있습니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default Change;

const TextBlock = styled.div`
  line-height: 1.5;
  color: ${color.gray900};
`;

const Indent = styled.div`
  margin-left: 10px;
`;
