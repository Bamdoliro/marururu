import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { ButtonIconType, ButtonOptionType, ButtonSizeType } from './Button.type';
import { getButtonSize, getButtonStyle, getButtonPadding } from './Button.style';
import { flex } from '@maru/utils';
import { IconAdd, IconShortcuts } from '@maru/icon';
import styled from 'styled-components';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    option?: ButtonOptionType;
    icon?: ButtonIconType;
    size?: ButtonSizeType;
    width?: CSSProperties['width'];
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
            {icon === 'ADD_ICON' && <IconAdd />}
            {children}
            {icon === 'SHORTCUTS_ICON' && <IconShortcuts />}
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
