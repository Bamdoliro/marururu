import { getFairStatus } from '@/utils';
import { font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    status: string;
}

const Status = ({ status }: Props) => {
    const { color, backgroundColor, fairStatus } = getFairStatus(status);

    return (
        <StyledStatus color={color} backgroundColor={backgroundColor}>
            {fairStatus}
        </StyledStatus>
    );
};

export default Status;

const StyledStatus = styled.div<{ color: string; backgroundColor: string }>`
    ${font.context}
    ${flex({ justifyContent: 'center', alignItems: 'center' })}
    background-color: ${(props) => props.backgroundColor};
    border: 1px solid ${(props) => props.color};
    color: ${(props) => props.color};
    border-radius: 100px;
    height: 32px;
    padding: 0px 10px;
`;
