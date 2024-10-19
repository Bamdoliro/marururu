import { ANALYSIS_GENDERARERRATIO_STEP_LIST } from '@/constants/analysis/data';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { Column, Row, UnderlineButton, Text } from '@maru/ui';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import { flex } from '@maru/utils';
import GeneralAdmission from './Admission/GeneralAdmission';
import ExceptionalAdmission from './Admission/ExceptionalAdmission';
import SpecificAdmission from './Admission/SpecifficAdmission';

const AllSubmitGenderDetail = () => {
  const [currentPassDetailStep, setCurrentPassDetailStep] = useState('일반 전형 성비');

  return (
    <TableBox>
      <Text fontType="H3" color={color.gray750}>
        지역별 성비
      </Text>
      <Row gap={48}>
        <Column gap={24}>
          <NavigationBar>
            {ANALYSIS_GENDERARERRATIO_STEP_LIST.map((PassDetailStep, index) => (
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
              '일반 전형 성비': <GeneralAdmission />,
              '특별 전형 성비': <SpecificAdmission />,
              '정원 외 전형 성비': <ExceptionalAdmission />,
            }}
          />
        </Column>
      </Row>
    </TableBox>
  );
};

const TableBox = styled.section`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 24px;
`;

const NavigationBar = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 60px;
  background-color: ${color.white};
`;

export default AllSubmitGenderDetail;
