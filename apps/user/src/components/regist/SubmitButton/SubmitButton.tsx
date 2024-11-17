import { Button } from '@maru/ui';

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <Button onClick={onClick} width="30%" size="LARGE" styleType="PRIMARY">
      서류 제출하기
    </Button>
  );
};

export default SubmitButton;
