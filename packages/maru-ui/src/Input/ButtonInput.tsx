import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import Input from './Input';
import { InputPropsType } from './Input.type';

interface ButtonInputPropsType extends InputPropsType {
    buttonText: string;
    enabled?: boolean;
    buttonWidth?: string;
    onClick: () => void;
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
    onClick,
    enabled = false,
    readOnly,
    isIncorrect,
    errorMessage,
}: ButtonInputPropsType) => {
    return (
        <div>
            {label && <Label>{label}</Label>}
            <StyledButtonInput>
                <Input
                    width={width}
                    name={name}
                    value={value}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    isIncorrect={isIncorrect}
                    errorMessage={errorMessage}
                />
                <Button onClick={onClick} enabled={enabled}>
                    {buttonText}
                </Button>
            </StyledButtonInput>
        </div>
    );
};

export default ButtonInput;

export const StyledButtonInput = styled.div`
    ${flex({ alignItems: 'center' })}
    gap: 8px;
    width: 100%;
`;

export const Button = styled.button<{ enabled: boolean }>`
    ${font.btn2};
    color: ${color.white};
    background-color: ${(props) => (props.enabled ? color.gray400 : color.maruDefault)};
    pointer-events: ${(props) => props.enabled && 'none'};
    display: flex;
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    border-radius: 6px;
    height: 48px;
    padding: 10px 20px;
    flex-shrink: 0;

    &:hover {
        background-color: ${(props) => (props.enabled ? color.gray400 : color.maruHoverd)};
        cursor: ${(props) => (props.enabled ? 'default' : 'pointer')};
    }
`;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    margin-bottom: 8px;
`;
