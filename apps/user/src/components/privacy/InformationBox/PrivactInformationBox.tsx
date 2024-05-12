/* eslint-disable no-irregular-whitespace */
import { Box } from '@maru/ui';
import { Text } from '@maru/ui';
import { color } from '@maru/design-token';

const PrivacyInformationBox = () => {
  return (
    <Box>
      <Text fontType="p3" color={color.maruDefault}>
        (위탁사항이 없는 경우)
      </Text>
      <Text fontType="p3" color={color.gray900}>
         개인정보 처리를 위탁하는 경우 위탁하는 업무의 내용과 위탁받아 처리하는 자에 대한
        사항을 정보주체가 확인할 수 있도록 개인정보처리방침을 <br />
        통해 안내하겠습니다.
      </Text>
    </Box>
  );
};

export default PrivacyInformationBox;
