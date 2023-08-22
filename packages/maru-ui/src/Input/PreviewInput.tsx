import { useBoolean } from '@maru/hooks';
import { IconInvisibleEye, IconVisibleEye } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled, { css } from 'styled-components';
import ConditionalMessage from './ConditionalMessage';
import { InputProps } from './Input.type';

const PreviewInput = ({
    width = '320px',
    placeholder,
    name,
    label,
    value,
    errorMessage,
    message,
    isError = false,
    onChange,
}: InputProps) => {
    const { value: isPreview, toggle: toggleIsPreview } = useBoolean();

    return (
        <div style={{ width }}>
            {label && <Label>{label}</Label>}
            <div style={{ position: 'relative' }}>
                <StyledPreviewInput $isError={isError}>
                    <Input
                        onChange={onChange}
                        placeholder={placeholder}
                        type={isPreview ? 'text' : 'password'}
                        name={name}
                        value={value}
                    />
                    {isPreview ? (
                        <IconVisibleEye
                            color={color.gray500}
                            width={24}
                            height={24}
                            cursor="pointer"
                            onClick={toggleIsPreview}
                        />
                    ) : (
                        <IconInvisibleEye
                            color={color.gray500}
                            width={24}
                            height={24}
                            cursor="pointer"
                            onClick={toggleIsPreview}
                        />
                    )}
                </StyledPreviewInput>
            </div>
            <ConditionalMessage isError={isError} errorMessage={errorMessage} message={message} />
        </div>
    );
};

export default PreviewInput;

const StyledPreviewInput = styled.div<{ $isError: boolean }>`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    gap: 10px;
    height: 48px;
    padding: 10px 16px;
    background-color: ${color.white};
    border: 1px solid ${color.gray400};
    border-radius: 6px;

    &:focus-within {
        border: 1px solid ${(props) => (props.$isError ? color.red : color.maruDefault)};
        ${(props) =>
            !props.$isError &&
            css`
                outline: 2px solid rgba(20, 112, 255, 0.25);
            `}
    }

    ${(props) =>
        props.$isError &&
        css`
            border: 1px solid ${color.red};
            outline: 2px solid rgba(244, 67, 54, 0.25);

            &:focus {
                border: 1px solid ${color.red};
            }
        `}
`;

const Input = styled.input`
    ${font.p2}
    color: ${color.gray800};
    width: 100%;
    height: 100%;

    &::placeholder {
        color: ${color.gray500};
    }
`;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    margin-bottom: 8px;
`;
