'use client';

import { Button, Column } from '@maru/ui';
import { styled } from 'styled-components';
import ApplicationPeriodBox from './ApplicationPeriodBox/ApplicationPeriodBox';
import { useButtonStatus, useDday } from './ApplicationSubmittionBox.hooks';
import DdayBox from './DdayBox/DdayBox';

const ApplicationSubmittionBox = () => {
  const { isSubmitPeriod } = useDday();
  const { buttonOption, handleMoveFormPage, handleMoveResultPage, buttonText } =
    useButtonStatus();

  return (
    <StyledApplicationSubmittionBox>
      <Column width="100%" height="100%" justifyContent="space-between">
        {isSubmitPeriod ? <ApplicationPeriodBox /> : <DdayBox />}
        <Button
          width={250}
          size="LARGE"
          styleType={buttonOption}
          onClick={isSubmitPeriod ? handleMoveFormPage : handleMoveResultPage}
        >
          {buttonText}
        </Button>
      </Column>
    </StyledApplicationSubmittionBox>
  );
};

export default ApplicationSubmittionBox;

const StyledApplicationSubmittionBox = styled.div`
  width: 708px;
  height: 100%;
  border-radius: 32px;
  padding: 60px;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.65) url('/images/school_background.png');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
  background-blend-mode: darken;
  background-attachment: fixed;
`;
