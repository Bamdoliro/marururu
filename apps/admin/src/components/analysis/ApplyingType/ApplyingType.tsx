import { ANALYSIS_NUMBER_OF_APPLICANTS_STEP_LIST } from '@/constants/analysis/data';
import { color } from '@maru/design-token';
import { Column, Row, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';
import BeforeChange from './BeforeChange/BeforeChange';
import AfterChange from './AfterChange/AfterChange';

const ApplyingType = () => {
  const [currentPassDetailStep, setCurrentPassDetailStep] = useState('변경 전');

  return (
    <StyledApplyingType>
      <Row gap={48}>
        <Column gap={24}>
          <NavigationBar>
            {ANALYSIS_NUMBER_OF_APPLICANTS_STEP_LIST.map((PassDetailStep, index) => (
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
              '변경 전': <BeforeChange />,
              '변경 후': <AfterChange />,
            }}
          />
        </Column>
      </Row>
    </StyledApplyingType>
  );
};

export default ApplyingType;

const StyledApplyingType = styled.div`
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
