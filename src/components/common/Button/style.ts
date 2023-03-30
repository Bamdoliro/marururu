import styled, { css } from "styled-components";
import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';
import { ButtonOptionType } from "types/common/button.type";

export const Button = styled.button<{ option: ButtonOptionType }>`
    padding: 10px 16px;
    border-radius: 6px;

    cursor: pointer;

    ${({ option }) =>
        option === "FILLED"
        ? css`
            background-color: ${color.maruDefault};
            color: ${color.white};
            &:hover {
                background-color: ${color.maruHigh};
            }  
        `
        : css`
            background-color: ${color.white};
            color: ${color.gray900};
            border: 1px solid ${color.gray300};
        `};
`;

export const ButtonText = styled(T.btn2 )`
    color: ${color.white};
`

export const DefaultButton = styled.button`
    width: 88px;
    height: 40px;

    padding: 9.5px 16px;
    background-color: #ffffff;
    color: ${color.gray900};
    border: 1px solid ${color.gray300};
    border-radius: 6px;

    cursor: pointer;
`;

export const ButtonOnPress = styled.button`
    width: 88px;
    height: 40px;


    padding: 9.5px 16px;
    color: ${color.gray900};
    background-color: ${color.gray100};
    border: none;
    border-radius: 6px;

    cursor: pointer;
`;

export const ButtonWrong = styled.button`
    width: 88px;
    height: 40px;

    padding: 9.5px 16px;
    color: #F44336;
    background-color: rgba(244, 67, 54, 0.1);
    border: 1px solid #F44336;
    border-radius: 6px;

    cursor: pointer;
`;

export const SmallButton = styled.button`
    color: ${color.gray500};
    border-bottom: 1px solid ${color.gray500};
`;