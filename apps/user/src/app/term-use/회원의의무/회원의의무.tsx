import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import styled from 'styled-components';

const 회원의의무 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제13조 (회원의 의무)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 회원은 이 약관에서 규정하는 사항과 서비스 이용안내 또는 주의사항 등
            사이트가 공지 혹은 통지하는 사항을 준수하여야 하며, 기타 사이트의 업무에
            방해되는 행위를 하여서는 아니 됩니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 회원의 ID와 비밀번호에 관한 모든 관리책임은 회원에게 있습니다. 회원에게
            부여된 ID와 비밀번호의 관리 소홀, 부정 사용에 의하여 발생하는 모든 결과에 대한
            책임은 회원에게 있습니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            3. 회원은 자신의 ID나 비밀번호가 부정하게 사용되었다는 사실을 발견한 경우에는
            즉시 사이트에 신고하여야 하며, 신고를 하지 않아 발생하는 모든 결과에 대한
            책임은 회원에게 있습니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            4. 회원은 내용별로 우리학교가 서비스 공지사항에 게시하거나 별도로 공지한
            이용제한 사항을 준수하여야 합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            5. 회원은 사이트의 사전승낙 없이는 서비스를 이용하여 영업활동을 할 수 없으며,
            그 영업활동의 결과와 회원이 약관에 위반한 영업활동을 하여 발생한 결과에 대하여
            사이트는 책임을 지지 않<br />
            &nbsp;&nbsp;&nbsp;&nbsp;습니다. 회원은 이와 같은 영업활동으로 사이트가 손해를
            입은 경우 회원은 사이트에 대하여 손해배상의무를 집니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            6. 회원은 서비스의 이용권한, 기타 이용 계약상의 지위를 타인에게 양도, 증여할
            수 없으며 이를 담보로 제공할 수 없습니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            7. 회원은 다음 각 호의 행위를 하여서는 안 됩니다.
          </Text>
        </Indent>
        <DoubleIndent>
          <Text fontType="p3" color={color.gray900}>
            a. 다른 회원의 ID와 비밀번호, 주민등록번호 등을 도용하는 행위
            <br />
            b. 본 서비스를 통하여 얻은 정보를 우리학교의 사전승낙 없이 회원의 이용 이외
            목적으로 복제하거나 이를 출판 및 방송 등에 사용하거나 제3자에게 제공하는 행위
            <br />
            c. 타인의 특허, 상표, 영업비밀, 저작권 기타 지적재산권을 침해하는 내용을 게시,
            전자메일 또는 기타의 방법으로 타인에게 유포하는 행위
            <br />
            d. 공공질서 및 미풍양속에 위반되는 저속, 음란한 내용의 정보, 문장, 도형 등을
            전송, 게시, 전자메일 또는 기타의 방법으로 타인에게 유포하는 행위
            <br />
            e. 모욕적이거나 위협적이어서 타인의 프라이버시를 침해할 수 있는 내용을 전송,
            게시, 전자메일 또는 기타의 방법으로 타인에게 유포하는 행위
            <br />
            f. 해킹, 바이러스를 유포하거나 타인의 의사에 반해 광고성 정보 등 일정한 내용을
            지속적으로 전송하는 행위
            <br />
            g. 사이트의 직원이나 관리자를 가장하거나 사칭하여 내용물을 게시, 등록하거나
            메일을 발송하는 행위
            <br />
            h. 범죄와 결부된다고 객관적으로 판단되는 행위
            <br />
            i. 사이트의 승인을 받지 않고 다른 사용자의 개인정보를 수집 또는 저장하는 행위
            <br />
            j. 기타 관계법령에 위배되는 행위
          </Text>
        </DoubleIndent>
      </TextBlock>
    </Column>
  );
};

export default 회원의의무;

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
