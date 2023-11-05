import type { AchievementLevel } from '@/types/form/client';
import { CellInput, Row, Td } from '@maru/ui';

interface Props {
  subjectName: string;
  achievementLevel21: AchievementLevel;
  achievementLevel22: AchievementLevel;
  achievementLevel31: AchievementLevel;
}

const 교과성적Item = ({
  subjectName,
  achievementLevel21,
  achievementLevel22,
  achievementLevel31,
}: Props) => {
  return (
    <Row height={64}>
      <Td styleType="SECONDARY" width={123} height="100%">
        {subjectName}
      </Td>
      <Td width={140} height="100%">
        <CellInput type="text" value={achievementLevel21} readOnly />
      </Td>
      <Td width={140} height="100%">
        <CellInput type="text" value={achievementLevel22} readOnly />
      </Td>
      <Td width={140} height="100%">
        <CellInput type="text" value={achievementLevel31} readOnly />
      </Td>
    </Row>
  );
};

export default 교과성적Item;
