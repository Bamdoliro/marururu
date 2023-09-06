import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    status: string;
}

/** 디자이너가 색깔 지정해주면 utils로 빼자 */
const applicationStatusColor = (status: string) => {
    return { color: color.maruDefault, backgroundColor: 'rgba(37, 124, 255, 0.10)' };
};

const Status = ({ status }: Props) => {
    const { color, backgroundColor } = applicationStatusColor(status);

    return (
        <StyledStatus color={color} backgroundColor={backgroundColor}>
            <Text fontType="context" color={color}>
                {status}
            </Text>
        </StyledStatus>
    );
};

export default Status;

const StyledStatus = styled.div<{ color: string; backgroundColor: string }>`
    height: 32px;
    padding: 0px 10px;
    ${flex({ justifyContent: 'center', alignItems: 'center' })}
    background-color: ${(props) => props.backgroundColor};
    border: 1px solid ${(props) => props.color};
    border-radius: 100px;
`;
