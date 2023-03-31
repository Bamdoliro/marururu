import { ButtonOptionType } from './../../../types/common/button.type';
import styled, { 
    css, 
    FlattenInterpolation,
    ThemeProps, } 
    from "styled-components";
import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';

export const Button = styled.button<{ option: ButtonOptionType }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 6px;

    cursor: pointer;

    ${({ option }) => option && getButtonStyle[option]}
`; 

const getButtonStyle: Record<ButtonOptionType, FlattenInterpolation<ThemeProps<ButtonOptionType>>> = {
    PRIMARY: css`
        background-color: ${color.maruDefault};
        color: ${color.white};
        &:hover {
            background-color: ${color.maruHigh};
        }
    `,

    SECONDARY: css`
        background-color: ${color.gray200};
        color: ${color.gray900};
        &:hover {
            background-color: ${color.gray300};
        }
    `,

    TERTIARY: css`
        background-color: ${color.white};
        color: ${color.gray900};
        border: 1px solid ${color.gray300};
        &:hover {
            border: 1px solid ${color.gray400};
        }
    `,

    QUATERNARY: css`
        background-color: ${color.white};
        color: ${color.gray600};
        border: none;
        &:hover {
            color: ${color.gray900};
        }
    `
};

export const ButtonText = styled(T.btn2)`
    // 이것도 위 처럼 getColor로 만들어보세요
`;