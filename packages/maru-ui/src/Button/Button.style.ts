import { color, font } from '@maru/theme';
import { css } from 'styled-components';

export const getButtonStyle = {
    PRIMARY: css`
        background-color: ${color.maruDefault};
        color: ${color.white};
        &:hover {
            background-color: ${color.maruHoverd};
        }
    `,
    SECONDARY: css`
        background-color: ${color.gray200};
        color: ${color.gray700};
        &:hover {
            background-color: ${color.gray300};
        }
    `,
    TERTIARY: css`
        background-color: ${color.white};
        color: ${color.gray900};
        border: 1px solid ${color.gray400};
        &:hover {
            border: 1px solid ${color.gray500};
        }
    `,
    QUATERNARY: css`
        background-color: ${color.white};
        color: ${color.gray900};
        border: none;
        &:hover {
            background-color: ${color.gray200};
        }
    `,
    DELETE: css`
        background-color: rgba(244, 67, 54, 0.1);
        color: ${color.red};
        border: 1px solid ${color.red};
        &:hover {
            color: ${color.white};
            background-color: ${color.red};
        }
    `,
    DISABLED: css`
        background-color: ${color.gray700};
        color: ${color.gray400};
        cursor: auto;
    `,
};

export const getButtonPadding = {
    NONE: css`
        padding: 0px 16px;
    `,
    ADD_ICON: css`
        gap: 4px;
        padding: 10px 16px 10px 10px;
    `,
    SHORTCUTS_ICON: css`
        gap: 10px;
        padding: 0px 20px 0px 22px;
    `,
};

export const getButtonSize = {
    LARGE: css`
        ${font.btn1}
        height: 54px;
    `,
    MEDIUM: css`
        ${font.btn1}
        height: 48px;
    `,
    SMALL: css`
        ${font.btn2}
        height: 40px;
    `,
};
