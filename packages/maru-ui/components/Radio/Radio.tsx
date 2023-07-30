import { color, font } from '@maru/theme';
import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface RadioPropsType extends InputHTMLAttributes<HTMLInputElement> {}

const Radio = ({ content, value, name, defaultChecked, onChange }: RadioPropsType) => {
    return (
        <div>
            <Label>
                <Input
                    type="radio"
                    value={value}
                    name={name}
                    defaultChecked={defaultChecked}
                    onChange={onChange}
                />
                {content && <Content>{content}</Content>}
            </Label>
        </div>
    );
};

const Input = styled.input`
    width: 20px;
    height: 20px;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 24px;
`;

const Content = styled.p`
    ${font.p2};
    color: ${color.gray900};
    margin-right: 40px;
    height: 26px;
`;

export default Radio;
