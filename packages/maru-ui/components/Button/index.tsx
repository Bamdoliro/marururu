import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonIconType, ButtonOptionType, ButtonSizeType } from './type';
import { getButtonSize, getButtonStyle, getButtonPadding } from './style';
import styled from 'styled-components';
import AddIcon from '../../Icons/Add';
import ShortcutsIcon from '../../Icons/Shortcuts';
import { flex } from '@maru/utils';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    option?: ButtonOptionType;
    icon?: ButtonIconType;
    size?: ButtonSizeType;
    width?: string;
}

const Button = ({
    onClick,
    children,
    option = 'PRIMARY',
    icon = 'NONE',
    size = 'MEDIUM',
    width,
}: PropsType) => {
    return (
        <StyledButton style={{ width }} onClick={onClick} option={option} icon={icon} size={size}>
            {icon === 'ADD_ICON' && <AddIcon />}
            {children}
            {icon === 'SHORTCUTS_ICON' && <ShortcutsIcon />}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button<{
    option: ButtonOptionType;
    icon: ButtonIconType;
    size: ButtonSizeType;
}>`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    border-radius: 6px;
    cursor: pointer;

    ${({ icon }) => icon && getButtonPadding[icon]};
    ${({ option }) => option && getButtonStyle[option]};
    ${({ size }) => size && getButtonSize[size]};
`;
