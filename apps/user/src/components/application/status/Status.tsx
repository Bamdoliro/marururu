import applicationStatusColor from '@/utils/applicationStatusColor';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    status: string;
}

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
