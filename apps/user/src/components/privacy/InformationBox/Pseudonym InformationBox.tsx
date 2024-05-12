/* eslint-disable no-irregular-whitespace */
import { Box } from '@maru/ui';
import { Text } from '@maru/ui';
import { color } from '@maru/design-token';

const PseudonymInformationBox = () => {
  return (
    <Box>
      <Text fontType="p3" color={color.maruDefault}>
        (가명정보를 처리하지 않는 경우)
      </Text>
      <Text fontType="p3" color={color.gray900}>
         우리학교는 가명정보를 처리하지 않고 있습니다. 가명정보 처리 시 교육부 개인정보
        보호지침 제78조의2에 따라 “교육분야 가명정보 처리
        <br /> 가이드라인”에서 제시하는 기준에 준하여 처리하고 처리된 내용은 개인정보
        처리방침에 공개하겠습니다.
      </Text>
    </Box>
  );
};

export default PseudonymInformationBox;
