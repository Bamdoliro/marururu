import { getFairStatus } from '@/utils';
import { font } from '@maru/theme';
import { flex } from '@maru/utils';
import { CSSProperties } from 'react';
import styled from 'styled-components';

interface Props {
    status: string;
}

const FairStatus = ({ status }: Props) => {
    const { color, backgroundColor, fairStatus } = getFairStatus(status);

    return (
        <StyledFairStatus color={color} backgroundColor={backgroundColor}>
            {fairStatus}
        </StyledFairStatus>
    );
};

export default FairStatus;

const StyledFairStatus = styled.div<{
    color: CSSProperties['color'];
    backgroundColor: CSSProperties['backgroundColor'];
}>`
    ${font.context}
    ${flex({ justifyContent: 'center', alignItems: 'center' })}
    background-color: ${(props) => props.backgroundColor};
    border: 1px solid ${(props) => props.color};
    color: ${(props) => props.color};
    border-radius: 100px;
    height: 32px;
    padding: 0px 10px;
`;
