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
          <Column height={28}> </Column>
          <Text color={color.gray900} fontType="p2">
            원서 초안을 다시 한번 확인 하시고 잘못 입력한 부분이 없다고 판단되시는 경우
            아래
            <br />의 입력 칸에{' '}
            <Text fontType="H5" color={color.maruDefault}>
              ‘확인했습니다’
            </Text>
            를 입력해 주세요.
          </Text>
          <Column height={30}> </Column>
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
      confirmButtonStyle={{
        backgroundColor: isInputValid ? color.maruDefault : color.gray500,
        cursor: isInputValid ? 'pointer' : 'not-allowed',
      }}
    />
  );
};

export default DraftFormConfirm;
