import { color } from '@maru/theme';
import { flex } from '@maru/utils';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    children: ReactNode;
}

const ButtonMenuItem = ({ children }: Props) => {
    return <StyledButtonMenuItem>{children}</StyledButtonMenuItem>;
};

export default ButtonMenuItem;

const StyledButtonMenuItem = styled.div`
    ${flex({ alignItems: 'center' })}
    gap: 12px;
    width: 100%;
    height: 44px;
    padding: 0 8px;

    &:hover {
        background-color: ${color.gray100};
    }
`;
