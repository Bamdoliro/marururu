import { color, font } from '@maru/theme';
import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface RadioPropsType extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
    value: string;
    name: string;
    defaultChecked?: boolean;
}

const Radio = ({ text, value, name, defaultChecked, onChange }: RadioPropsType) => {
    return (
        <StyledRadio>
            <Label>
                <Input
                    type="radio"
                    value={value}
                    name={name}
                    defaultChecked={defaultChecked}
                    onChange={onChange}
                />
                <RadioBox></RadioBox>
                <Text>{text}</Text>
            </Label>
        </StyledRadio>
    );
};

const StyledRadio = styled.div`
    padding-right: 40px;
`;

const RadioBox = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    margin: 2px;
    border: 1px solid ${color.gray400};
    border-radius: 50%;
`;

const Input = styled.input`
    display: none;

    &:checked + ${RadioBox} {
        border: 2px solid ${color.maruDefault};
    }

    &:checked + ${RadioBox}::after {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: ${color.maruDefault};
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 26px;
`;

const Text = styled.p`
    ${font.p2};
    color: ${color.gray900};
`;

export default Radio;
