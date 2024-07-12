import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';
import styled from 'styled-components';

const 서비스중지 = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제16조 (서비스 이용 계약 해지 및 이용 제한 / 서비스 중지 / 자료 삭제)
        </Text>
      </Row>
      <TextBlock>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            1. 회원이 서비스 이용계약을 해지하고자 하는 경우에는 회원 본인이 온라인을 통해
            회원 탈퇴를 이용해 우리학교에 대한 해지 신청을 합니다. 우리학교는 즉시
            가입해지(회원탈퇴)에 필요한 조<br />
            &nbsp;&nbsp;&nbsp;&nbsp;치를 취합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            2. 회원이 서비스 이용계약을 해지한 경우, 우리학교는 해지 즉시 회원의 모든
            정보를 파기합니다. 다만, 관련 법령 및 개인정보 처리방침에 따라 우리학교가 회원
            정보를 보유할 수 있는 경우는
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;보유 목적에 필요한 최소한의 정보를 보관합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            3. 다음의 사항에 해당하는 경우 우리학교는 회원의 사전 동의를 얻지 않고 서비스
            이용 제한, 또는 회원의 자격박탈 등의 조치(이하 “우리학교의 제재조치”)를 취할
            수 있습니다.
          </Text>
        </Indent>
        <DoubleIndent>
          <Text fontType="p3" color={color.gray900}>
            a. 제7조 제2항의 각 호 중 어느 하나에 해당하는 행위를 하였을 때<br />
            b. 본 서비스에서 제공되는 정보를 유용하였을 때<br />
            c. 회원이 등록한 게시물 등의 내용이 사실과 다르거나 조작되었을 때<br />
            d. 관련 법규에 위반하거나 선량한 풍속 기타 사회통념상 허용되지 않는 행위를
            하였을 때<br />
            e. 기타 본 서비스의 명예를 훼손하였거나 우리학교가 판단하기에 적합하지 않은
            목적으로 회원가입을 하였을 때
          </Text>
        </DoubleIndent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            4. 우리학교의 제재조치에 대해 회원이 이의제기를 할 수 있는 절차를 마련하며,
            이의제기 절차와 이를 검토하는 기구나 담당자를 명시합니다.
          </Text>
        </Indent>
        <Indent>
          <Text fontType="p3" color={color.gray900}>
            5. 회원이 서비스 이용계약을 해지한 경우, 회원이 작성한 게시물은 사이트 내에서
            삭제되지 않으며, 우리학교는 이를 계속하여 사용할 수 있습니다. 단, 회원이
            게시물의 삭제를 요청하는 경우,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;우리학교는 해당 게시물을 삭제합니다.
          </Text>
        </Indent>
      </TextBlock>
    </Column>
  );
};

export default 서비스중지;

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
