import { color, font } from '@maru/theme';
import { styled } from 'styled-components';
import { InputPropsType } from './Input.type';

const NumberInput = ({ width = '80px', textAlign = 'center' }: InputPropsType) => {
    return <StyledNumberInput style={{ width, textAlign }} type="number" placeholder="0" />;
};

export default NumberInput;

const StyledNumberInput = styled.input`
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
`;
