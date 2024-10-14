import { ROUTES } from '@/constants/common/constant';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';
import { flex } from '@maru/utils';
import { IconClose } from '@maru/icon';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const EmergancyModal = ({ isOpen, onClose }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledModal>
        <CloseButton>
          <IconClose
            onClick={() => {
              onClose();
              router.replace(ROUTES.MAIN);
            }}
            color={color.gray600}
            width={36}
            height={36}
            cursor="pointer"
          />
        </CloseButton>
        <Column alignItems="center" gap={80}>
          <Column alignItems="center" gap={30}>
            <Text fontType="H2" color={color.gray900}>
              [긴급공지]
            </Text>
            <Column alignItems="center">
              <Text fontType="p1" color={color.gray900}>
                서버 점검으로 인하여 프로그램이 잠시 사용 중단됩니다.
              </Text>
              <Text fontType="btn1" color={color.red}>
                일시: 2024.10.14.(월) 14:00 - 14:30
              </Text>
              <Text fontType="p1" color={color.gray900}>
                사용에 불편을 드려 죄송합니다.
              </Text>
            </Column>
          </Column>
        </Column>
      </StyledModal>
    </BlurBackground>
  );
};

export default EmergancyModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const StyledModal = styled.div`
  position: relative;
  ${flex({ justifyContent: 'center' })}
  width: 480px;
  height: 280px;
  padding: 60px;
  border-radius: 16px;
  background-color: ${color.white};
`;

const CloseButton = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;
