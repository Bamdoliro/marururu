import { useBoolean } from '@maru/hooks';
import { IconInvisibleEye, IconVisibleEye } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled, { css } from 'styled-components';
import { InputPropsType } from './Input.type';

const PreviewInput = ({
    width = '320px',
    placeholder,
    name,
    label,
    value,
    errorMessage,
    isError = false,
    onChange,
}: InputPropsType) => {
    const { value: isPreview, toggle: toggleIsPreview } = useBoolean();

    return (
        <div style={{ width }}>
            {label && <Label>{label}</Label>}
            <div style={{ position: 'relative' }}>
                <StyledPreviewInput isError={isError}>
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
            {isError && (
                <div style={{ position: 'relative' }}>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                </div>
            )}
        </div>
    );
};

export default PreviewInput;

const StyledPreviewInput = styled.div<{ isError?: boolean }>`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    gap: 10px;
    height: 48px;
    padding: 10px 16px;
    background-color: ${color.white};
    border: 1px solid ${color.gray400};
    border-radius: 6px;

    &:focus-within {
        border: 1px solid ${({ isError }) => (isError ? color.red : color.maruDefault)};
        ${({ isError }) =>
            !isError &&
            css`
                outline: 2px solid rgba(20, 112, 255, 0.25);
            `}
    }

    ${({ isError }) =>
        isError &&
        css`
            border: 1px solid ${color.red};
            outline: 2px solid rgba(244, 67, 54, 0.25);

            &:focus {
                border: 1px solid ${color.red};
                /* outline: 2px solid rgba(244, 67, 54, 0.25); This line is excluded */
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

const ErrorMessage = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    ${font.caption}
    color: ${color.red};
    margin-top: 8px;
`;
