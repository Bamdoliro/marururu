import { useNewGEDSubjectListValueStore } from '@/store';
import { color, font } from '@maru/theme';
import { Button, CellInput, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useDeleteNewGEDSubject, useInput } from './NewGEDCalculatorItem.hooks';

interface Props {
  id: number;
  score: number | null;
}

const NewGEDCalculatorItem = ({ id, score }: Props) => {
  const newGEDSubjectList = useNewGEDSubjectListValueStore();

  const newGEDSubjectIndex = newGEDSubjectList.findIndex((item) => item.id === id);
  const { handleNewGEDSubjectDataChange } = useInput(newGEDSubjectIndex);
  const { handleDeleteNewGEDSubjectButtonClick } = useDeleteNewGEDSubject();

  return (
    <StyledNewGEDCalculatorItem>
      <Td option="SECONDARY" width={123} height="100%">
        <NewSubjectInput
          onChange={handleNewGEDSubjectDataChange}
          name="subjectName"
          value={newGEDSubjectList[newGEDSubjectIndex].subjectName}
          placeholder="과목명 입력"
        />
      </Td>
      <Td width={570} height="100%">
        <CellInput
          value={score ?? 0}
          name="score"
          onChange={handleNewGEDSubjectDataChange}
        />
      </Td>
      <Td width={123} height="100%">
        <Button
          onClick={() => handleDeleteNewGEDSubjectButtonClick(id)}
          option="DELETE"
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
