import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {}

const Radio = ({ value, name, checked, onChange }: PropsType) => {
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
`;

export default Radio;
