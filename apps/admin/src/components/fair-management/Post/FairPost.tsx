import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Button, Column, Input, RadioGroup } from '@maru/ui';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useFairPostAction } from './Post.hooks';

const FairPost = () => {
  const [fairData, setFairData] = useState({
    formUrl: '',
    type: 'STUDENT_AND_PARENT',
    place: '',
    capacity: 0,
    applicationStartDate: '',
    applicationEndDate: '',
    start: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFairData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFairData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { handleFairPostButtonClick } = useFairPostAction(fairData);

  return (
    <StyledCreateFairBox>
      <Column gap={58} alignItems="center" width={360}>
        <Column gap="36px" width="100%">
          <Column gap="24px">
            <Input
              label="폼 링크"
              width="100%"
              name="formUrl"
              value={fairData.formUrl}
              placeholder="폼의 링크를 삽입해주세요."
              onChange={handleInputChange}
            />
            <RadioGroup
              label="대상 선택"
              name="type"
              items={[
                { value: 'STUDENT_AND_PARENT', label: '학생 / 학부모' },
                { value: 'TEACHER', label: '교사' },
              ]}
              value={fairData.type}
              onChange={handleRadioChange}
            />
            <Input
              label="장소"
              width="100%"
              name="place"
              placeholder="장소를 입력해주세요."
              value={fairData.place}
              onChange={handleInputChange}
            />
          </Column>
        </Column>
        <Button size="SMALL" onClick={handleFairPostButtonClick}>
          새로운 입학전형 설명회 생성하기
        </Button>
      </Column>
    </StyledCreateFairBox>
  );
};

export default FairPost;

const StyledCreateFairBox = styled.div`
  ${flex({
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  })}
  width: 500px;
  height: 703px;
  padding: 28px 32px;
  background-color: ${color.gray50};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
