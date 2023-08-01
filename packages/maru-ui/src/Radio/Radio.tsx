import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface RadioPropsType extends InputHTMLAttributes<HTMLInputElement> {}

const Radio = ({ value, name, defaultChecked, onChange }: RadioPropsType) => {
    defaultChecked && console.log(value);
    return (
        <StyledRadio>
            <Input
                type="radio"
                value={value}
                name={name}
                defaultChecked={defaultChecked}
                onChange={onChange}
            />
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
