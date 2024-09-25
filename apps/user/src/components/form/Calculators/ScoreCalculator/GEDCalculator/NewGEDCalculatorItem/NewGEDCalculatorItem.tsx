import { useNewGEDSubjectListValueStore } from '@/store';
import { Button, CellInput, Dropdown, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useDeleteNewGEDSubject, useInput } from './NewGEDCalculatorItem.hooks';

interface Props {
  id: number;
  score: number | null;
}

const SUBJECT_OPTIONS = ['도덕', '기술가정', '음악', '체육', '미술'];

const NewGEDCalculatorItem = ({ id, score }: Props) => {
  const newGEDSubjectList = useNewGEDSubjectListValueStore();
  const newGEDSubjectIndex = newGEDSubjectList.findIndex((item) => item.id === id);

  const { handleNewGEDSubjectChange, handleScoreChange } = useInput(newGEDSubjectIndex);
  const { handleDeleteNewGEDSubject } = useDeleteNewGEDSubject();

  return (
    <StyledNewGEDCalculatorItem>
      <Td styleType="SECONDARY" width={123} height="100%">
        <Dropdown
          background="Gray"
          value={newGEDSubjectList[newGEDSubjectIndex]?.subjectName}
          size="SMALL"
          data={SUBJECT_OPTIONS}
          onChange={(selectedSubject: string) =>
            handleNewGEDSubjectChange(selectedSubject)
          }
          width={80}
          name="subjectName"
          placeholder="-"
        />
      </Td>
      <Td width={570} height="100%">
        <CellInput
          value={score ?? 0}
          name="score"
          onChange={(e) => handleScoreChange(e)}
        />
      </Td>
      <Td width={123} height="100%">
        <Button
          onClick={() => handleDeleteNewGEDSubject(id)}
          styleType="DELETE"
          size="SMALL"
        >
          삭제
        </Button>
      </Td>
    </StyledNewGEDCalculatorItem>
  );
};

export default NewGEDCalculatorItem;

const StyledNewGEDCalculatorItem = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 64px;
`;
