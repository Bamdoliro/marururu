import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import styled from 'styled-components';

const Mean = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제2조 (정의)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. “사이트”라 함은 우리학교가 서비스를 이용자에게 제공하기 위하여 제작,
            운영하는 사이트를 말합니다. 현재 우리학교가 운영하는 사이트의 접속 주소는
            아래와 같습니다.
          </Text>
        </Indent>
        <DoubleIndent>
          <Text fontType="p3" color={color.maruDefault}>
            • [사이트 주소 1]
            <br />• [사이트 주소 2]
          </Text>
        </DoubleIndent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. “이용자”란 사이트에 접속하여 이 약관에 따라 서비스를 받는 자를 말합니다.
            <br />
            3. “회원”이라 함은 사이트에 개인정보를 제공하여 회원등록을 한 자로서, 사이트의
            정보를 지속적으로 제공받으며, 서비스를 계속적으로 이용할 수 있는 자를
            말합니다.
            <br />
            4. “비회원”이라 함은 우리학교와 서비스 이용계약을 체결하지 않은 채 사이트 등을
            통하여 우리학교이 제공하는 서비스를 이용하는 이용자를 말합니다.
            <br />
            5. “회원ID”란 회원 식별과 서비스 이용을 위하여 회원임을 확인하고 회원 자신의
            비밀보호를 위해 회원자신이 선정하고 우리학교가 승인하는 문자와 숫자의 조합을
            말합니다.
            <br />
            6. “비밀번호”란 부여받은 회원ID와 일치된 회원임을 확인하고 자신의 비밀 보호를
            위해 회원이 설정한 문자와 숫자의 조합을 말합니다.
            <br />
            7. “탈퇴”란 회원이 서비스 사용 후 이용을 해약하는 것을 말합니다.
            <br />
            8. “개인정보”란 생존하는 개인에 관한 정보로서 해당 정보에 포함되어 있는 성명,
            생년월일 등의 사항에 의하여 해당 개인을 식별할 수 있는 정보 (해당 정보만으로는
            특정 개인을 식별할 수 없<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;더라도 다른 정보와 용이하게 결합하여 식별할 수
            있는 것을 포함)를 말합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            9. “서비스 이용계약”이라 함은 우리학교가 회원을 위해 제공하는 서비스를
            계속적으로 이용하기 위하여 우리학교와 이용자 사이에 체결되는 계약을 말합니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default Mean;

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
