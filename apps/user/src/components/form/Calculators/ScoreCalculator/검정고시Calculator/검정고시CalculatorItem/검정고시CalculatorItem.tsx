import { CellInput, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import { useInput } from './검정고시CalculatorItem.hooks';

interface Props {
  id: number;
  subject: string;
  score: number | null;
}

const 검정고시CalculatorItem = ({ id, subject, score }: Props) => {
  const { handle검정고시SubjectDataChange } = useInput(id);

  return (
    <Styled검정고시CalculatorItem>
      <Td option="SECONDARY" width={123} height={64}>
        {subject}
      </Td>
      <Td width={570} height={64}>
        <CellInput
          value={score ?? 0}
          name="score"
          onChange={handle검정고시SubjectDataChange}
        />
      </Td>
      <Td width={123} height={64}>
        {null}
      </Td>
    </Styled검정고시CalculatorItem>
  );
};

export default 검정고시CalculatorItem;

const Styled검정고시CalculatorItem = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 64px;
`;
