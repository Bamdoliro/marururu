import { color, font } from '@maru/theme';
import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const CheckBox = ({ onChange, content }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <Label>
            <Input type="checkbox" onChange={onChange} />
            {content && <Content>{content}</Content>}
        </Label>
    );
};

export default CheckBox;

const Input = styled.input`
    width: 18px;
    height: 18px;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 3px;
    height: 24px;
`;

const Content = styled.p`
    ${font.btn3};
    color: ${color.gray500};
`;
