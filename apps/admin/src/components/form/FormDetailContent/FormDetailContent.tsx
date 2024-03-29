import { FORM_DETAIL_STEP_LIST } from '@/constants/form/data';
import { color } from '@maru/design-token';
import { Column, Row, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';
import FormStatus from './FormStatus/FormStatus';
import Profile from './Profile/Profile';
import 보호자정보 from './보호자정보/보호자정보';
import 성적 from './성적/성적';
import 자기소개서 from './자기소개서/자기소개서';
import 전형 from './전형/전형';
import 지원자정보 from './지원자정보/지원자정보';
import 출신학교및학력 from './출신학교및학력/출신학교및학력';

interface Props {
  id: number;
}

const FormDetailContent = ({ id }: Props) => {
  const [currentFormDetailStep, setCurrentFormDetailStep] = useState('지원자 정보');

  return (
    <StyledFormDetailContent>
      <Row gap={48}>
        <Column gap={36}>
          <Profile id={id} />
          <FormStatus id={id} />
        </Column>
        <Column gap={48}>
          <NavigationBar>
            {FORM_DETAIL_STEP_LIST.map((formDetailStep, index) => (
              <UnderlineButton
                key={`form-detail-step ${index}`}
                active={formDetailStep === currentFormDetailStep}
                onClick={() => setCurrentFormDetailStep(formDetailStep)}
              >
                {formDetailStep}
              </UnderlineButton>
            ))}
          </NavigationBar>
          <SwitchCase
            value={currentFormDetailStep}
            caseBy={{
              '지원자 정보': <지원자정보 id={id} />,
              '보호자 정보': <보호자정보 id={id} />,
              '출신학교 및 학력': <출신학교및학력 id={id} />,
              전형: <전형 id={id} />,
              성적: <성적 id={id} />,
              자기소개서: <자기소개서 id={id} />,
            }}
          />
        </Column>
      </Row>
    </StyledFormDetailContent>
  );
};

export default FormDetailContent;

const StyledFormDetailContent = styled.div`
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
