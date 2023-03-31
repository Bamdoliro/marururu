import { ButtonOptionType } from './../../../types/common/button.type';
import styled, { 
    css, 
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemeProps, } 
    from "styled-components";
import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';

export const Button = styled.button<{ option: ButtonOptionType }>`
    padding: 10px 16px;
    border-radius: 6px;

    cursor: pointer;

    ${({ option }) => option && ButtonStyle[option]}
`; 

const ButtonStyle: Record<ButtonOptionType, FlattenInterpolation<ThemeProps<ButtonOptionType>>> = {
    PRIMARY: css`
        background-color: ${color.maruDefault};
        color: ${color.white};
        &:hover {
            background-color: ${color.maruHigh};
    `,

    SECONDARY: css`
        background-color: ${color.gray200};
        color: ${color.gray900};
        &:hover {
            background-color: ${color.gray300};
    `,

    TERTIARY: css`
        background-color: ${color.white};
        color: ${color.gray900};
        border: ${color.gray300};
        &:hover {
            border: ${color.gray400};
    `,

    QUATERNARY: css`
        background-color: ${color.white};
        color: ${color.gray600};
        border: none;
        &:hover {
            border: ${color.gray400};
            color: ${color.gray900};
    `
};