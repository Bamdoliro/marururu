import { color } from '@maru/theme';
import { Column, Confirm, Text } from '@maru/ui';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const FinalFormConfirm = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <Confirm
      isOpen={isOpen}
      title="원서를 최종 제출 하시겠습니까?"
      content={
        <Column>
          <Text color={color.red} fontType="p2">
            모든 제출서류를 업로드하셨다면 원서를 최종 제출 해주세요.
          </Text>
          <Text color={color.gray900} fontType="p2">
            원서 최종 제출 시 모든 원서 제출 절차가 완료 되며
            <br /> 더이상 모든 서류에 대해 수정이 불가능합니다.
          </Text>
        </Column>
      }
      onClose={onClose}
      onConfirm={onConfirm}
      confirmButtonText="원서 최종 제출하기"
    />
  );
};

export default FinalFormConfirm;
