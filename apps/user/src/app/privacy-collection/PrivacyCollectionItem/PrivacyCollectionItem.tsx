import { CollectionItem } from '@/components/privacy-collection';
import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const PrivacyCollectionItem = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          개인정보 수집 항목
        </Text>
      </Row>
      <Column gap={6}>
        <Text fontType="p3" color={color.gray900}>
          • 본 학교는 홈페이지 운영을 위하여 개인정보를 수집·이용합니다.
          <br /> • 본 학교 홈페이지에서 수집하는 개인정보 항목은 다음과 같습니다.
          <br /> • 선택정보를 입력하지 않은 경우에도 서비스 이용에는 제한이 없습니다.
        </Text>
        <CollectionItem />
        <Text fontType="caption" color={color.gray500}>
          ※ 서비스 이용과정에서 방문날짜, 방문시간, IP주소, 쿠키, 접속 기기정보 등의
          서비스의 이용 기록이 자동으로 생성되어 수집 될 수 있습니다.
        </Text>
      </Column>
    </Column>
  );
};

export default PrivacyCollectionItem;
