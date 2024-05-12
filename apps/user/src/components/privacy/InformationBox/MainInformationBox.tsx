import { Box } from '@maru/ui';
import { Text } from '@maru/ui';
import { color } from '@maru/design-token';

const MainInformationBox = () => {
  return (
    <Box backgroundColor={color.gray100}>
      <Text fontType="code" color={color.maruDefault}>
        부산소프트웨어마이스터고등학교(이하‘우리학교’)
      </Text>
      <Text fontType="code" color={color.gray900}>
        는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을
        신속하고 <br /> 원활하게 처리할 수 있도록 다음과 같은 개인정보방침을 두고
        있습니다.
      </Text>
    </Box>
  );
};

export default MainInformationBox;
