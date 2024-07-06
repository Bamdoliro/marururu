import { ROUTES } from '@/constants/common/constant';
import { color } from '@maru/design-token';
import { Column, Modal, Text } from '@maru/ui';
import { useRouter } from 'next/navigation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GuardFormModal = ({ isOpen, onClose }: Props) => {
  const router = useRouter();
  const handleConfirmModal = () => {
    router.replace(ROUTES.MAIN);
    onClose();
  };

  const handleCloseModal = () => {
    router.replace(ROUTES.MAIN);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      style={{ position: 'relative', overflow: 'hidden' }}
      width={600}
      height={350}
      title="원서 접수 기간이 아닙니다"
      onClose={handleCloseModal}
      onConfirm={handleConfirmModal}
      mode="check"
    >
      <Column gap={20} width={528}>
        <hr color={color.gray200} />
        <Text fontType="p1" color={color.gray900}>
          원서 접수 기간에만 원서 작성이 가능합니다. <br />
          원서 접수 기간까지 조금만 기다려 주세요.
        </Text>
      </Column>
    </Modal>
  );
};

export default GuardFormModal;
