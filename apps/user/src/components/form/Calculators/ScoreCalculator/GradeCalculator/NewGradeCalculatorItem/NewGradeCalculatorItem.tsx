import { useNewSubjectListValueStore } from '@/store';
import { color, font } from '@maru/design-token';
import { Button, Dropdown, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useDeleteNewSubject, useInput } from './NewGradeCalculatorItem.hooks';

interface Props {
  id: number;
  achievementLevels: string[];
}

const NewGradeCalculatorItem = ({ id, achievementLevels }: Props) => {
  const newSubjectList = useNewSubjectListValueStore();

  const newSubjectIndex = newSubjectList.findIndex((item) => item.id === id);
  const { handleNewSubjectChange, handleNewSubjectNameChange } =
    useInput(newSubjectIndex);
  const { handleDeleteNewSubject } = useDeleteNewSubject();

  return (
    <StyledNewGradeCalculatorItem>
      <Td styleType="SECONDARY" width={123} height="100%">
        <NewSubjectInput
          onChange={handleNewSubjectNameChange}
          value={newSubjectList[newSubjectIndex].subjectName}
          placeholder="과목명 입력"
        />
      </Td>
      <Td width={190} height="100%">
        <Dropdown
          value={newSubjectList[newSubjectIndex].achievementLevel21 ?? '-'}
          size="SMALL"
          data={achievementLevels}
          width={80}
          name="achievementLevel21"
          onChange={handleNewSubjectChange}
        />
      </Td>
      <Td width={190} height="100%">
        <Dropdown
          value={newSubjectList[newSubjectIndex].achievementLevel22 ?? '-'}
          size="SMALL"
          data={achievementLevels}
          width={80}
          name="achievementLevel22"
          onChange={handleNewSubjectChange}
        />
      </Td>
      <Td width={190} height="100%">
        <Dropdown
          value={newSubjectList[newSubjectIndex].achievementLevel31 ?? '-'}
          size="SMALL"
          data={achievementLevels}
          width={80}
          name="achievementLevel31"
          onChange={handleNewSubjectChange}
        />
      </Td>
      <Td width={123} height="100%">
        <Button
          onClick={() => handleDeleteNewSubject(id)}
          styleType="DELETE"
          size="SMALL"
        >
          삭제
        </Button>
      </Td>
    </StyledNewGradeCalculatorItem>
  );
};

export default NewGradeCalculatorItem;

const StyledNewGradeCalculatorItem = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 64px;
`;

const NewSubjectInput = styled.input`
  ${font.p2}
  color: ${color.gray900};
  background-color: ${color.gray50};
  width: 74px;
  text-align: center;
  &:-webkit-input-placeholder {
    color: ${color.gray500};
  }
`;
