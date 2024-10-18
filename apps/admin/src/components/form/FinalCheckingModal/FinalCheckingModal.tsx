import { color } from '@maru/design-token';
import { Confirm, Text } from '@maru/ui';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const FinalCheckingModal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <Confirm
      height={300}
      isOpen={isOpen}
      title="2차 합격자 자동선발"
      content={
        <Text color={color.gray900} fontType="p1">
          2차 합격자 자동선발을 진행하시겠습니까?
        </Text>
      }
      onClose={onClose}
      onConfirm={onConfirm}
      closeButtonText="아니요"
      confirmButtonText="예"
    />
  );
};

export default FinalCheckingModal;
