import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import React, { ButtonHTMLAttributes, SVGProps } from 'react';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    icon: React.ElementType<SVGProps<SVGSVGElement>>;
    text: string;
}

const ButtonMenuItem = ({ text, onClick, icon: Icon }: Props) => {
    return (
        <StyledButtonMenuItem onClick={onClick}>
            <Icon color={color.gray600} width={24} height={24} />
            <Text fontType="p2" color={color.gray900}>
                {text}
            </Text>
        </StyledButtonMenuItem>
    );
};

export default ButtonMenuItem;

const StyledButtonMenuItem = styled.button`
    ${flex({ alignItems: 'center' })}
    gap: 12px;
    width: 100%;
    height: 44px;
    padding: 0 8px;
    border-radius: 6px;

    &:hover {
        background-color: ${color.gray100};
    }
`;
