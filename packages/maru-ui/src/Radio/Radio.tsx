import { flex } from '@maru/utils';
import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Radio = ({ value, name, checked, onChange }: Props) => {
    return (
        <StyledRadio>
            <RadioInput
                type="radio"
                value={value}
                name={name}
                checked={checked}
                onChange={onChange}
            />
        </StyledRadio>
    );
};

const StyledRadio = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: 24px;
    height: 24px;
`;

const RadioInput = styled.input`
    width: 20px;
    height: 20px;
`;

export default Radio;
