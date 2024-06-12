import { IconTerms } from '@maru/icon';
import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';
import { PrivacyInformationBox } from '@/components/privacy';

const 제3조 = () => {
  return (
    <>
      <Column gap={12}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제3조 (개인정보 처리 위탁)
          </Text>
        </Row>
        <PrivacyInformationBox />
      </Column>
    </>
  );
};

export default 제3조;
