import { color } from '@maru/design-token';
import { flex } from '@maru/utils';
import type { ChangeEvent } from 'react';
import { useEffect, useReducer } from 'react';
import { styled } from 'styled-components';
import { Button, Column, Input, RadioGroup, Row } from '@maru/ui';
import { formatDate, formatTime } from '@/utils';
import { useFairPostAction } from './FairPost.hooks';

interface FairData {
  start: string;
  startDate: string;
  startTime: string;
  capacity: number;
  place: string;
  applicationUrl: string;
  applicationStartDate: string;
  applicationEndDate: string;
  type: string;
}

interface Action {
  name: string;
  value: string;
}

const initialFairData: FairData = {
  start: '',
  startDate: '',
  startTime: '',
  capacity: 100,
  place: '',
  applicationUrl: '',
  applicationStartDate: '',
  applicationEndDate: '',
  type: 'STUDENT_AND_PARENT',
};

const fairDataReducer = (state: FairData, action: Action): FairData => {
  const { name, value } = action;
  switch (name) {
    case 'startDate':
    case 'applicationStartDate':
    case 'applicationEndDate':
      return {
        ...state,
        [name]: formatDate(value),
      };
    case 'startTime':
      return {
        ...state,
        [name]: formatTime(value),
      };
    default:
      return {
        ...state,
        [name]: value,
      };
  }
};

const FairPost = () => {
  const [fairData, dispatch] = useReducer(fairDataReducer, initialFairData);

  const { handleFairPostButtonClick } = useFairPostAction(fairData);

  useEffect(() => {
    if (fairData.startDate && fairData.startTime) {
      const combinedStart = `${fairData.startDate}T${fairData.startTime}:00`;
      dispatch({ name: 'start', value: combinedStart });
    }
  }, [fairData.startDate, fairData.startTime]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ name, value });
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ name, value });
  };

  return (
    <StyledPostFairBox>
      <Column gap={30} alignItems="center" width={360}>
        <Column gap="30px" width="100%">
          <Column gap="12px">
            <Input
              label="폼 링크"
              width="100%"
              name="applicationUrl"
              placeholder="폼의 링크를 삽입해주세요."
              value={fairData.applicationUrl}
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
            <Input
              label="입학설명회 날짜 (8자리)"
              width="100%"
              name="startDate"
              placeholder="날짜를 입력해주세요."
              value={fairData.startDate}
              onChange={handleInputChange}
            />
            <Input
              label="시간 (4자리)"
              type="text"
              width="100%"
              name="startTime"
              placeholder="시간을 입력해주세요"
              value={fairData.startTime}
              onChange={handleInputChange}
            />
            <Row gap={5} alignItems="center">
              <Input
                label="신청 기한(8자리)"
                width="50%"
                name="applicationStartDate"
                placeholder="시작일"
                value={fairData.applicationStartDate}
                onChange={handleInputChange}
              />
              <Input
                label="ㅤ"
                width="50%"
                name="applicationEndDate"
                placeholder="마감일"
                value={fairData.applicationEndDate}
                onChange={handleInputChange}
              />
            </Row>
          </Column>
        </Column>
        <Button onClick={handleFairPostButtonClick}>
          새로운 입학전형 설명회 생성하기
        </Button>
      </Column>
    </StyledPostFairBox>
  );
};

export default FairPost;

const StyledPostFairBox = styled.div`
  ${flex({
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  })}
  width: 500px;
  height: 630px;
  padding: 28px 32px;
  background-color: ${color.gray50};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
