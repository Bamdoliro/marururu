import { ROUTES } from '@/constants/common/constant';
import { color } from '@maru/theme';
import { Confirm, Text } from '@maru/ui';
import { useRouter } from 'next/navigation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FormPeriodModal = ({ isOpen, onClose }: Props) => {
  const router = useRouter();

  return (
    <Confirm
      isOpen={isOpen}
      title="원서 접수 기간이 아닙니다"
      content={
        <Text color={color.gray900} fontType="p2">
          원서 접수 기간에만 원서 작성이 가능합니다.
          <br /> 원서 접수 기간까지 조금만 기다려 주세요.
        </Text>
      }
      onClose={onClose}
      onConfirm={() => {
        router.push(ROUTES.MAIN);
        onClose();
      }}
    />
  );
};

export default FormPeriodModal;
