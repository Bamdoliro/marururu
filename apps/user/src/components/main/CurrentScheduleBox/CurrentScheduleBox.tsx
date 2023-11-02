'use client';

import { Button, Column } from '@maru/ui';
import { styled } from 'styled-components';
import { useButtonStatus, useDday } from './CurrentScheduleBox.hooks';
import DdayBox from './DdayBox/DdayBox';
import SubmitPeriodBox from './SubmitPeriodBox/SubmitPeriodBox';

const CurrentScheduleBox = () => {
  const { isSubmitPeriod } = useDday();
  const { buttonOption, handleMovePageButtonClick, buttonText } = useButtonStatus();

  return (
    <StyledCurrentScheduleBox>
      <Column width="100%" height="100%" justifyContent="space-between">
        {isSubmitPeriod ? <SubmitPeriodBox /> : <DdayBox />}
        <Button
          width={250}
          size="LARGE"
          option={buttonOption}
          onClick={handleMovePageButtonClick}
        >
          {buttonText}
        </Button>
      </Column>
    </StyledCurrentScheduleBox>
  );
};

export default CurrentScheduleBox;

const StyledCurrentScheduleBox = styled.div`
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
