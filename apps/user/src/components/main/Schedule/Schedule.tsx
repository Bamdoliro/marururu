import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ScheduleItem from './ScheduleItem/ScheduleItem';

const SCHEDULE_DATA = [
    {
        id: 0,
        date: '10월 17일 (화) ~ 20일 (금)',
        plan: '1차 원서접수',
    },
    {
        id: 1,
        date: '10월 24일 (화)',
        plan: '1차 합격자 발표',
    },
    {
        id: 2,
        date: '10월 28일 (토)',
        plan: '2차 전형',
    },
    {
        id: 3,
        date: '11월 2일 (목)',
        plan: '최종 합격자 발표',
    },
] as const;

const Schedule = () => {
    return (
        <StyledSchedule>
            <Text fontType="H3" color={color.gray900}>
                2024학년도 부산소마고 입학 일정
            </Text>
            <StyledScheduleList>
                {SCHEDULE_DATA.map((item) => (
                    <ScheduleItem key={item.id} date={item.date} plan={item.plan} />
                ))}
            </StyledScheduleList>
        </StyledSchedule>
    );
};

export default Schedule;

const StyledSchedule = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 24px;
    width: 492px;
    height: 100%;
    padding: 40px 32px;
    border: 1px solid ${color.gray300};
    border-radius: 32px;
`;

const StyledScheduleList = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 24px;
    height: 100%;
    width: 100%;
    overflow: auto;
`;
