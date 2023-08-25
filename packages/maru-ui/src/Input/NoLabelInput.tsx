import { color, font } from '@maru/theme';
import { css, styled } from 'styled-components';
import { InputProps } from './Input.type';

const NoLabelInput = ({
    name,
    width = '80px',
    textAlign = 'center',
    onChange,
    type = 'text',
    placeholder,
    value,
    isError = false,
    ...args
}: InputProps) => {
    return (
        <StyledNoLabelInput
            name={name}
            style={{ width, textAlign }}
            onChange={onChange}
            type={type}
            value={value}
            placeholder={placeholder}
            $isError={isError}
            {...args}
        />
    );
};

export default NoLabelInput;

const StyledNoLabelInput = styled.input<{ $isError: boolean }>`
    ${font.p2}
    height: 40px;
    border-radius: 6px;
    border: 1px solid ${color.gray400};
    background: ${color.white};
    color: ${color.gray900};
    padding: 0 16px;

    &::placeholder {
        color: ${color.gray500};
    }

    &:focus {
        border: 1px solid ${color.maruDefault};
        outline: 2px solid rgba(20, 112, 255, 0.25);
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    ${(props) =>
        props.$isError &&
        css`
            border: 1px solid ${color.red};
            outline: 2px solid rgba(244, 67, 54, 0.25);

            &:focus {
                border: 1px solid ${color.red};
                outline: 2px solid rgba(244, 67, 54, 0.25);
            }
        `}
`;
