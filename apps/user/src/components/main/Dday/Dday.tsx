'use client';

import { styled } from 'styled-components';
import { 제출_마감_날짜, 제출_시작_날짜 } from '@/models/submitTime';
import { formatDay } from '@/utils/formatDay';
import { Column, Button } from '@maru/ui';
import { color, font } from '@maru/theme';
import useDday from './Dday.hook';

const Dday = () => {
    const {
        isSubmitPeriod,
        status,
        currentTime,
        remainDays,
        timeDiff,
        buttonOption,
        handleMovePageButtonClick,
        buttonText,
    } = useDday();

    return (
        <StyledDday>
            <Column width="100%" height="100%" justifyContent="space-between">
                {isSubmitPeriod ? (
                    <Column gap="36px">
                        <Notice>
                            부산소프트웨어마이스터고등학교
                            <br />
                            2024학년도 신입생 모집
                        </Notice>
                        <Period>
                            {제출_시작_날짜.format('YYYY년 MM월 DD일')} ~
                            {제출_마감_날짜.format('YYYY년 MM월 DD일')}
                        </Period>
                    </Column>
                ) : (
                    <Column gap="16px">
                        <Column gap="8px">
                            <Status>{status.get(currentTime)}</Status>
                            <RemainDays>
                                {remainDays >= 1 || remainDays < 0
                                    ? formatDay(remainDays)
                                    : timeDiff}
                            </RemainDays>
                        </Column>
                        <Period>{currentTime.format('YYYY년 MM월 DD일')}</Period>
                    </Column>
                )}
                <Button
                    width="250px"
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
    width: 702px;
    height: 436px;
    border-radius: 32px;
    padding: 60px;
    overflow: hidden;

    background: rgba(0, 0, 0, 0.65) url('/assets/SchoolBackground.png');
    background-repeat: no-repeat;
    background-position: center right;
    background-size: cover;
    background-blend-mode: darken;
    background-attachment: fixed;
`;

const Notice = styled.p`
    ${font.H1};
    color: ${color.white};
`;

const Period = styled.p`
    ${font.H4}
    color: ${color.gray300};
`;

const Status = styled.p`
    ${font.H2}
    color: ${color.gray400};
`;

const RemainDays = styled.p`
    ${font.D1}
    color: ${color.white};
`;
