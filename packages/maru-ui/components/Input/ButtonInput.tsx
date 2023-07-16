import Input from './Input';
import { flex } from '@maru/utils';
import { color, font } from '@maru/theme';
import { InputPropsType } from './Input.type';
import styled from 'styled-components';

interface ButtonInputPropsType extends InputPropsType {
    buttonText: string;
    handleInputButtonClick: () => void;
    enabled?: boolean;
    buttonWidth?: string;
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
    handleInputButtonClick,
    enabled = false,
    buttonWidth = '',
    readOnly,
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
                    readOnly={readOnly}
                />
                <Button
                    onClick={handleInputButtonClick}
                    enabled={enabled}
                    style={{ width: buttonWidth }}>
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
    display: flex;
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    border-radius: 6px;
    height: 48px;
    padding: 10px 16px;
    flex-shrink: 0;

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
