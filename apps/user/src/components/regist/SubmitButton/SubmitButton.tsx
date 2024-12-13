import type { ButtonStyleType } from '@maru/ui';
import { Button } from '@maru/ui';

interface SubmitButtonProps {
  onClick: () => void;
  styleType: ButtonStyleType | undefined;
}

const SubmitButton = ({ onClick, styleType }: SubmitButtonProps) => {
  return (
    <Button onClick={onClick} width={111} size="LARGE" styleType={styleType}>
      서류 제출
    </Button>
  );
};

export default SubmitButton;
