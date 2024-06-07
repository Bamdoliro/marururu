import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { color } from '@maru/design-token';

const Change = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제3조 (약관의 효력 및 변경)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 이 약관은 사이트를 통하여 이를 공지하거나 전자우편 기타의 방법으로 회원에게
        통지함으로써 효력이 발생됩니다. <br />② 사이트는 사정상 중요한 사유가 발생될 경우
        사전 고지 없이 이 약관의 내용을 변경할 수 있으며 변경된 약관은 제1항과 같은
        방법으로 공지 또는 통지함으로써 효력이 발생됩니다. <br />③ 회원은 변경된 약관에
        동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일
        이후에도 서비스를 계속 사용할 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.
      </Text>
    </Column>
  );
};

export default Change;
