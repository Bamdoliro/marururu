import { Button } from '@maru/ui';

const SubmitButton = () => {
  return (
    <Button
      onClick={() => {
        alert('눌림');
      }}
      width="30%"
      size="LARGE"
      styleType="PRIMARY"
    >
      서류 제출하기
    </Button>
  );
};

export default SubmitButton;
