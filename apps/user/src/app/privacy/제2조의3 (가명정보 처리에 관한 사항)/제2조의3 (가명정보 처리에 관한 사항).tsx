import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Text, Row, Column } from '@maru/ui';
import { PseudonymInformationBox } from '@/components/privacy';

const 제2조의3 = () => {
  return (
    <>
      <Column gap={12}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제2조의3 (가명정보 처리에 관한 사항)
          </Text>
        </Row>
        <PseudonymInformationBox />
      </Column>
    </>
  );
};

export default 제2조의3;
