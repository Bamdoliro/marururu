import { ROUTES } from '@/constants/common/constant';
import { color } from '@maru/design-token';
import { Button, Column, Text } from '@maru/ui';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';
import { flex } from '@maru/utils';
import { IconClose } from '@maru/icon';
import { Storage } from '@/apis/storage/storage';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NoticeModal = ({ isOpen, onClose }: Props) => {
  const router = useRouter();
  const isLoggedIn = Boolean(Storage.getItem('access-token'));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleCloseModal = () => {
    if (isLoggedIn) {
      Storage.setItem('noticeModalClosed', 'true');
    }
    router.replace(ROUTES.MAIN);
    onClose();
  };

  const UserGuide = 'https://maru-user.vercel.app/notice/72';

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledModal>
        <CloseButton>
          <IconClose
            onClick={handleCloseModal}
            color={color.gray600}
            width={36}
            height={36}
            cursor="pointer"
          />
        </CloseButton>
        <Column alignItems="center" gap={80}>
          <Column alignItems="center" gap={30}>
            <Text fontType="H2" color={color.gray900}>
              공지사항
            </Text>
            <Column alignItems="center">
              <Text fontType="p1" color={color.gray900}>
                접수자 전용 가이드를 공지사항에서
              </Text>
              <Text fontType="p1" color={color.gray900}>
                다운로드를 받을 수 있으니 확인바랍니다.
              </Text>
            </Column>
          </Column>
          <Button type="button" onClick={() => router.push(UserGuide)}>
            <Text fontType="p1" color={color.white}>
              가이드 다운로드 페이지로 이동
            </Text>
          </Button>
        </Column>
      </StyledModal>
    </BlurBackground>
  );
};

export default NoticeModal;

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
  height: 384px;
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
