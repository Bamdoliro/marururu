import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    plan: string;
    date: string;
}

const ScheduleItem = ({ plan, date }: Props) => {
    return (
        <StyledScheduleItem>
            <Text fontType="H5" color={color.gray900}>
                {plan}
            </Text>
            <Text fontType="p2" color={color.gray700}>
                {date}
            </Text>
        </StyledScheduleItem>
    );
};

export default ScheduleItem;

const StyledScheduleItem = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    padding: 0px 20px;
    height: 64px;
    width: 100%;
    border-radius: 12px;
    background-color: ${color.gray50};
`;
