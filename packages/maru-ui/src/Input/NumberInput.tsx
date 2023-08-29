import { color, font } from '@maru/theme';
import { css, styled } from 'styled-components';
import { InputProps } from './Input.type';

const NumberInput = ({
    name,
    width = 80,
    textAlign = 'center',
    onChange,
    placeholder,
    value = 0,
    isError = false,
}: InputProps) => {
    return (
        <StyledNumberInput
            name={name}
            style={{ width, textAlign }}
            onChange={onChange}
            type="number"
            value={value}
            placeholder={placeholder}
            $isError={isError}
            min={0}
        />
    );
};

export default NumberInput;

const StyledNumberInput = styled.input<{ $isError: boolean }>`
    ${font.p2}
    height: 40px;
    border-radius: 6px;
    border: 1px solid ${color.gray400};
    background: ${color.white};
    color: ${color.gray900};

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
