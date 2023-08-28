'use client';

import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    applicable?: boolean,
    statusText?: string
}

const Status = ({ applicable, statusText }: Props) => {
    return (
        <StyledStatus $applicable={!!applicable}>
            <Text fontType="context" color={applicable ? color.maruDefault : color.red}>
                {statusText}
            </Text>
        </StyledStatus>
    )
}

export default Status;

const StyledStatus = styled.div<{ $applicable: boolean }>`
    height: 32px;
    padding: 0px 10px;
    ${flex({ justifyContent: 'center', alignItems: 'center' })}
    background-color: ${(props) => (props.$applicable ? 'rgba(37, 124, 255, 0.10)' : 'rgba(244, 67, 54, 0.10)')};
    border: 1px solid ${(props) => (props.$applicable ? color.maruDefault : color.red)};
    border-radius: 100px;
`;
