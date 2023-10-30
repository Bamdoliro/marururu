import { useFormStore } from '@/store';
import type { GraduationType } from '@/types/form/client';
import { color } from '@maru/theme';
import { Row, Switch, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import styled from 'styled-components';
import GradeCalculator from './GradeCalculator/GradeCalculator';
import GEDCaculator from './GEDCalculator/GEDCalculator';

interface Props {
  option: 'SIMULATION' | 'FORM';
}

const ScoreCalculator = ({ option }: Props) => {
  const [form, setForm] = useFormStore();

  const handleGraduationTypeSwitchDataChange = (value: string) => {
    const graduationType = value as GraduationType;
    setForm((prev) => ({ ...prev, education: { ...prev.education, graduationType } }));
  };

  return (
    <StyledScoreCalculator>
      <Row alignItems="center" justifyContent="space-between">
        <Text fontType="p3" color={color.red}>
          *교과성적이 없는 학기나 학년의 경우 모집요강을 반드시 확인 바랍니다.
          <br /> *해당 과목이 없을 시 과목추가버튼으로 성적을 입력할 수 있습니다.
        </Text>
        {option === 'SIMULATION' && (
          <Switch
            items={[
              { name: '졸업 예정', value: 'EXPECTED' },
              { name: '졸업', value: 'GRADUATED' },
              { name: '고입검정', value: 'QUALIFICATION_EXAMINATION' },
            ]}
            value={form.education.graduationType}
            onChange={handleGraduationTypeSwitchDataChange}
          />
        )}
      </Row>
      <SwitchCase
        value={form.education.graduationType}
        caseBy={{
          QUALIFICATION_EXAMINATION: <GEDCaculator />,
        }}
        defaultComponent={<GradeCalculator />}
      />
    </StyledScoreCalculator>
  );
};

export default ScoreCalculator;

const StyledScoreCalculator = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 24px;
  width: 100%;
  height: 100%;
`;
