import { IconError } from '@maru/icon';
import { color, font } from '@maru/theme';
import styled, { css } from 'styled-components';
import { InputPropsType } from './Input.type';

const Input = ({
    width = '320px',
    label,
    placeholder,
    type = 'text',
    name,
    value,
    onChange,
    errorMessage,
    readOnly,
    textAlign,
    isError = false,
}: InputPropsType) => {
    return (
        <div style={{ width }}>
            {label && <Label>{label}</Label>}
            <div style={{ position: 'relative' }}>
                <StyledInput
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    value={value}
                    readOnly={readOnly}
                    style={{ textAlign }}
                    isError={isError}
                />
                {isError && (
                    <IconError
                        style={{
                            position: 'absolute',
                            right: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }}
                        color={color.red}
                        width={24}
                    />
                )}
            </div>
            {isError && (
                <div style={{ position: 'relative' }}>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                </div>
            )}
        </div>
    );
};

export default Input;

const StyledInput = styled.input<{ isError?: boolean }>`
    ${font.p2}
    color: ${color.gray800};
    height: 48px;
    width: 100%;
    padding: 10px 16px;
    background-color: ${color.white};
    border: 1px solid ${color.gray400};
    border-radius: 6px;

    &::placeholder {
        color: ${color.gray500};
    }
    &:focus {
        border: 1px solid ${color.maruDefault};
        outline: 2px solid rgba(20, 112, 255, 0.25);
    }

    ${({ isError }) =>
        isError &&
        css`
            border: 1px solid ${color.red};
            outline: 2px solid rgba(244, 67, 54, 0.25);

            &:focus {
                border: 1px solid ${color.red};
                outline: 2px solid rgba(244, 67, 54, 0.25);
            }
        `}
`;

const ErrorMessage = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    ${font.caption}
    color: ${color.red};
    margin-top: 8px;
`;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    margin-bottom: 8px;
`;
