'use client';

import { color } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { styled } from 'styled-components';
import { useButtonStatus, useDday, useRemainDate, useSchoolRecruitDate } from './Dday.hooks';

const Dday = () => {
    const { isSubmitPeriod } = useDday();
    const { submitStart, submitEnd } = useSchoolRecruitDate();
    const { status, remainTime, targetDate } = useRemainDate();
    const { buttonOption, handleMovePageButtonClick, buttonText } = useButtonStatus();

    return (
        <StyledDday>
            <Column width="100%" height="100%" justifyContent="space-between">
                {isSubmitPeriod ? (
                    <Column gap={36}>
                        <Text fontType="H1" color={color.white}>
                            부산소프트웨어마이스터고등학교
                            <br />
                            2024학년도 신입생 모집
                        </Text>
                        <Text fontType="p2" color={color.gray300}>
                            {submitStart} ~ {submitEnd}
                        </Text>
                    </Column>
                ) : (
                    <Column gap={16}>
                        <Column gap={8}>
                            <Text fontType="H2" color={color.gray400}>
                                {status}
                            </Text>
                            <Text fontType="D1" color={color.white}>
                                {remainTime}
                            </Text>
                        </Column>
                        <Text fontType="p2" color={color.gray300}>
                            {targetDate}
                        </Text>
                    </Column>
                )}
                <Button
                    width={250}
                    size="LARGE"
                    option={buttonOption}
                    onClick={handleMovePageButtonClick}>
                    {buttonText}
                </Button>
            </Column>
        </StyledDday>
    );
};

export default Dday;

const StyledDday = styled.div`
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
