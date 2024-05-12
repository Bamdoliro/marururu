import { color } from '@maru/design-token';
import { Box, Text } from '@maru/ui';
import styled from 'styled-components';

const StyledText = styled(Text)`
  white-space: normal;
  overflow-wrap: break-word;
  display: block;
  width: 100%;
  font-size: 16px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const MainInformationBox = () => {
  return (
    <Box backgroundColor={color.gray100}>
      <StyledText fontType="code" color={color.maruDefault}>
        부산소프트웨어마이스터고등학교(이하‘우리학교’)
        <StyledText fontType="code" color={color.gray900}>
          는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한
          고충을 신속하고
          <br />
          원활하게 처리할 수 있도록 다음과 같은 개인정보방침을 두고 있습니다.
        </StyledText>
      </StyledText>
    </Box>
  );
};

export default MainInformationBox;
