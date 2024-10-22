import { color } from '@maru/design-token';
import { Column, Loader, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

interface Props {
  isOpen: boolean;
}

const DonwloadAdmissionLoader = ({ isOpen }: Props) => {
  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledDonwloadAdmissionLoader>
        <Column gap={8}>
          <Text fontType="H2" color={color.gray900}>
            pdf를 다운로드하는 중입니다.
          </Text>
          <Text fontType="p3" color={color.gray600}>
            전체 수험표를 다운로드하는 중입니다. 조금만 기다려주세요!
          </Text>
        </Column>
        <Loader top="65%" />
      </StyledDonwloadAdmissionLoader>
    </BlurBackground>
  );
};

export default DonwloadAdmissionLoader;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const StyledDonwloadAdmissionLoader = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
  gap: 48px;
  padding: 36px;
  height: 280px;
  background-color: ${color.white};
  border-radius: 16px;
`;
