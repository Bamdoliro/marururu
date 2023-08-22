import { flex } from '@maru/utils';
import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Radio = ({ value, name, checked, onChange }: Props) => {
    return (
        <StyledRadio>
            <Input type="radio" value={value} name={name} checked={checked} onChange={onChange} />
        </StyledRadio>
    );
};

const Input = styled.input`
    width: 20px;
    height: 20px;
`;

const StyledRadio = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: 24px;
    height: 24px;
`;

export default Radio;
