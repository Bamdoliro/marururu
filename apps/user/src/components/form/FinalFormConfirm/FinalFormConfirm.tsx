import { color } from '@maru/design-token';
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
      title="최종 제출 하시겠습니까?"
      content={
        <Column>
          <Text color={color.gray900} fontType="p2">
            모든 제출서류를 업로드하셨다면 원서를 최종 제출 해주세요.
          </Text>
          <Text color={color.red} fontType="p2">
            원서 최종 제출 시 입학원서 접수가 완료되며 더 이상 수정이 불가합니다.
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
