import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const CheckBox = ({ name, value, onChange }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <StyledCheckBox>
            <Input type="checkbox" name={name} value={value} onChange={onChange} />
        </StyledCheckBox>
    );
};

export default CheckBox;

const Input = styled.input`
    width: 18px;
    height: 18px;
`;

const StyledCheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    width: 24px;
    height: 24px;
`;
