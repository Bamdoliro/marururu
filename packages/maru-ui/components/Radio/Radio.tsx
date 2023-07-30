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
                <RadioSelectIcon />
                {content && <Content>{content}</Content>}
            </Label>
        </div>
    );
};

/* TODO : 이거 나중에 아이콘으로 교체해야하는데 생각 좀 해봐야할 듯 */
const RadioSelectIcon = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    margin: 2px;
    border: 1px solid ${color.gray400};
    border-radius: 50%;
`;

const Input = styled.input`
    display: none;

    &:checked + ${RadioSelectIcon} {
        border: 2px solid ${color.maruDefault};
    }

    &:checked + ${RadioSelectIcon}::after {
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

    &:hover ${RadioSelectIcon} {
        border-color: ${color.gray600};
    }
`;

const Content = styled.p`
    ${font.p2};
    color: ${color.gray900};
    margin-right: 40px;
`;

export default Radio;
