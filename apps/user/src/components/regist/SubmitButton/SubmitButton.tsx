import type { ButtonStyleType } from '@maru/ui';
import { Button } from '@maru/ui';

interface SubmitButtonProps {
  onClick: () => void;
  styleType: ButtonStyleType | undefined;
}

const SubmitButton = ({ onClick, styleType }: SubmitButtonProps) => {
  return (
    <Button onClick={onClick} width="30%" size="LARGE" styleType={styleType}>
      서류 제출하기
    </Button>
  );
};

export default SubmitButton;
