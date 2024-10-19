import { ANALYSIS_GREADEDISTRIBUTION_STEP_LIST } from '@/constants/analysis/data';
import { color } from '@maru/design-token';
import { Column, Row, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';
import FirstRoundPassed from './FirstRoundPassed/FirstRoundPassed';
import SecondRoundPassed from './SecondRoundPassed/SecondRoundPassed';
import FinalRoundPassed from './FinalRoundPassed/FinalRoundPassed';
import AllSubmitGender from './AllSubmitGender/AllSubmitGender';

const GenderRatio = () => {
  const [currentPassDetailStep, setCurrentPassDetailStep] = useState('전체 지원자');

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
              '전체 지원자': <AllSubmitGender />,
              '1차 합격자': <FirstRoundPassed />,
              '2차 전형자': <SecondRoundPassed />,
              '최종 합격자': <FinalRoundPassed />,
            }}
          />
        </Column>
      </Row>
    </StyledGradeDistribution>
  );
};

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

export default GenderRatio;
