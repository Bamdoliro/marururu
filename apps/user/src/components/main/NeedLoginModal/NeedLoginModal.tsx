import React from 'react';
import { ROUTES } from '@/constants/common/constant';
import { color } from '@maru/design-token';
import { Column, Modal, Text } from '@maru/ui';
import { useRouter } from 'next/navigation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NeedLoginModal = ({ isOpen, onClose }: Props) => {
  const router = useRouter();

  const handleConfirmModal = () => {
    onClose();
    router.push(ROUTES.LOGIN);
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      style={{ position: 'relative', overflow: 'hidden' }}
      width={600}
      height={350}
      title="로그인 필요"
      onClose={handleCloseModal}
      onConfirm={handleConfirmModal}
      mode="login"
    >
      <Column gap={20} width={528}>
        <Text fontType="p2" color={color.gray600}>
          이 페이지는 로그인이 필요한 페이지입니다.
        </Text>
        <hr color={color.gray200} />
        <Text fontType="p1" color={color.gray600}>
          이 페이지는 로그인하지 않으면 접근할 수 없습니다. <br />
          로그인 후에 편리하게 서비스를 이용하실 수 있습니다.
        </Text>
      </Column>
    </Modal>
  );
};

export default NeedLoginModal;
