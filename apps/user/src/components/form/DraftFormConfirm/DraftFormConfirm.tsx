import { color } from '@maru/design-token';
import { CheckInput, Column, Confirm, Text } from '@maru/ui';
import { useState, type ChangeEvent } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DraftFormConfirm = ({ isOpen, onClose, onConfirm }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsInputValid(value === '확인했습니다');
  };

  return (
    <Confirm
      isOpen={isOpen}
      title="원서 초안을 제출하시겠습니까?"
      content={
        <Column>
          <Text color={color.red} fontType="p2">
            원서 초안 제출 시 부산소프트웨어마이스터고등학교 입학전형에 응시한 것으로
            <br />
            처리되며 더 이상 입학원서 수정이 불가능합니다.
          </Text>
          <Text color={color.gray900} fontType="p2">
            잘못 입력한 곳이 없는지 면밀히 검토해주시기 바랍니다.
          </Text>
          <Column height={28}> </Column>
          <Text color={color.gray900} fontType="p2">
            ‘확인했습니다'를 입력할 시 그 이후 발생하는 사고에는
            부산소프트웨어마이스터고등
            <br />
            학교와{' '}
            <Text color={color.red} fontType="p2">
              밤돌이로팀은 전혀 책임지지 않음에 동의하는 것으로 간주됩니다.
            </Text>
          </Text>
          <Column height={8}> </Column>
          <CheckInput
            width="100%"
            placeholder="'확인했습니다'를 정확하게 입력해주세요"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Column>
      }
      onClose={onClose}
      onConfirm={isInputValid ? onConfirm : () => {}}
      confirmButtonText="원서 초안 제출하기"
    />
  );
};

export default DraftFormConfirm;
