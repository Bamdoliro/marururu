import { ANALYSIS_GREADEDISTRIBUTION_STEP_LIST } from '@/constants/analysis/data';
import { color } from '@maru/design-token';
import { Column, Row, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';
import FirstRoundPassedTable from './FirstRoundPassed/FirstRoundPassedTable';
import SecondRoundPassedTable from './SecondRoundPassed/SecondRoundPassedTable';
import FinalRoundPassedTable from './FinalRoundPassed/FinalRoundPassedTable';

const GradeDistribution = () => {
  const [currentPassDetailStep, setCurrentPassDetailStep] = useState('1차 합격자');

  return (
    <StyledGradeDistribution>
      <Row gap={48}>
        <Column gap={24}>
          <NavigationBar>
            {ANALYSIS_GREADEDISTRIBUTION_STEP_LIST.map((PassDetailStep, index) => (
              <UnderlineButton
                key={`form-detail-step ${index}`}
                active={PassDetailStep === currentPassDetailStep}
                onClick={() => setCurrentPassDetailStep(PassDetailStep)}
              >
                {PassDetailStep}
              </UnderlineButton>
            ))}
          </NavigationBar>
          <SwitchCase
            value={currentPassDetailStep}
            caseBy={{
              '1차 합격자': <FirstRoundPassedTable />,
              '2차 전형자': <SecondRoundPassedTable />,
              '최종 합격자': <FinalRoundPassedTable />,
            }}
          />
        </Column>
      </Row>
    </StyledGradeDistribution>
  );
};

export default GradeDistribution;

const StyledGradeDistribution = styled.div`
  display: flex;
  gap: 48px;
  width: 100%;
`;

const NavigationBar = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 60px;
  background-color: ${color.white};
`;
