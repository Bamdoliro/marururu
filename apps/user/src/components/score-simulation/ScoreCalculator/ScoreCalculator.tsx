import { useFormStore } from '@/store';
import { color } from '@maru/design-token';
import { Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import styled from 'styled-components';
import GradeCalculator from './GradeCalculator/GradeCalculator';
import GEDCaculator from './GEDCalculator/GEDCalculator';

const ScoreCalculator = () => {
  const [form] = useFormStore();

  return (
    <StyledScoreCalculator>
      <Row alignItems="center" justifyContent="space-between">
        <Text fontType="p3" color={color.red}>
          *과목명이 없는 경우 ‘과목추가’를 선택하여 성취 수준을 입력하시기를 바랍니다.
          <br />
          *국어•영어•수학에서 미이수 입력 시 자동으로 성적이 C로 처리됩니다.
        </Text>
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
