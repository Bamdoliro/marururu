import Input from '.';
import { color, font } from '@packages/maru-global-style';
import { InputPropsType } from './type';
import styled from 'styled-components';

interface ButtonInputPropsType extends InputPropsType {
    buttonText: string;
    buttonClick: () => void;
    enabled?: boolean;
}

const ButtonInput = ({
    width,
    label,
    name,
    value,
    placeholder,
    type = 'text',
    onChange,
    buttonText,
    buttonClick,
    enabled = false,
}: ButtonInputPropsType) => {
    return (
        <div style={{ width }}>
            {label && <Label>{label}</Label>}
            <StyledButtonInput>
                <Input
                    width="100%"
                    name={name}
                    value={value}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                <Button onClick={buttonClick} enabled={enabled}>
                    {buttonText}
                </Button>
            </StyledButtonInput>
        </div>
    );
};

export default ButtonInput;

export const StyledButtonInput = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
`;

export const Button = styled.button<{ enabled: boolean }>`
    ${font.btn2};
    color: ${color.white};
    background-color: ${(props) => (props.enabled ? color.gray400 : color.maruDefault)};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 68px;
    height: 48px;
    padding: 10px 16px;

    &:hover {
        background-color: ${(props) => (props.enabled ? color.gray400 : color.maruHoverd)};
        cursor: ${(props) => (props.enabled ? 'default' : 'pointer')};
    }
`;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    padding-bottom: 8px;
`;
