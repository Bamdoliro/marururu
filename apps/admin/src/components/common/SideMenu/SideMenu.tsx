import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    children: ReactNode;
    active: boolean;
    onClick: () => void;
}

const SideMenu = ({ children, active, onClick }: Props) => {
    return (
        <StyledSideMenu $active={active} onClick={onClick}>
            {children}
        </StyledSideMenu>
    );
};

export default SideMenu;

const StyledSideMenu = styled.button<{ $active: boolean }>`
    ${flex({ alignItems: 'center' })}
    ${font.H5}
    width: 200px;
    height: 56px;
    padding: 0px 16px;
    border-radius: 12px;
    color: ${color.gray700};
    background: ${color.white};

    &:hover {
        background: ${color.gray100};
    }

    ${(props) =>
        props.$active &&
        css`
            color: ${color.maruDefault};
            background: ${color.gray100};
        `}
`;
