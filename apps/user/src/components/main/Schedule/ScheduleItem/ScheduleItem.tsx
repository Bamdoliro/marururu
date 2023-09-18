import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import styled, { css } from 'styled-components';

dayjs.extend(isBetween);
dayjs.extend(utc);

interface Props {
    plan: string;
    date: string;
    startTime: Dayjs;
    endTime: Dayjs;
}

const ScheduleItem = ({ plan, date, startTime, endTime }: Props) => {
    const active = dayjs().isBetween(startTime, endTime);

    return (
        <StyledScheduleItem active={active}>
            <Text fontType="H5" color={active ? color.maruDefault : color.gray900}>
                {plan}
            </Text>
            <Text fontType="p2" color={color.gray700}>
                {date}
            </Text>
        </StyledScheduleItem>
    );
};

export default ScheduleItem;

const StyledScheduleItem = styled.div<{ active: boolean }>`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })};
    flex-shrink: 0;
    padding: 0px 20px;
    height: 64px;
    width: 100%;
    border-radius: 12px;
    background-color: ${color.gray50};
    ${(props) =>
        props.active &&
        css`
            border: 1px solid ${color.maruDefault};
        `}
`;
