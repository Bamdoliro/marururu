import { useFormStore } from '@/store';
import type { GraduationType } from '@/types/form/client';
import { color } from '@maru/design-token';
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

  const handleGraduationTypeChange = (value: string) => {
    const graduationType = value as GraduationType;
    setForm((prev) => ({ ...prev, education: { ...prev.education, graduationType } }));
  };

  return (
    <StyledScoreCalculator>
      <Row alignItems="center" justifyContent="space-between">
        <Text fontType="p3" color={color.red}>
          *과목명이 없는 경우 ‘과목추가’를 선택하여 성취 수준을 입력하시기 바랍니다.
          <br />
          *국어•영어•수학에서 미이수 입력 시 자동으로 성적이 C로 처리됩니다.
        </Text>
        {option === 'SIMULATION' && (
          <Switch
            items={[
              { name: '졸업 예정', value: 'EXPECTED' },
              { name: '졸업', value: 'GRADUATED' },
              { name: '고입검정', value: 'QUALIFICATION_EXAMINATION' },
            ]}
            value={form.education.graduationType}
            onChange={handleGraduationTypeChange}
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
