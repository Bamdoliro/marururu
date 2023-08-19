import { IconInvisibleEye, IconVisibleEye } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { useState } from 'react';
import styled from 'styled-components';
import { InputPropsType } from './Input.type';
import Message from './Message';

const PreviewInput = ({
    width = '320px',
    placeholder,
    name,
    label,
    value,
    errorMessage: message,
    onChange,
}: InputPropsType) => {
    const [isPreview, setIsPreview] = useState(false);

    const togglePreview = () => setIsPreview((prev) => !prev);

    return (
        <div style={{ width }}>
            {label && <Label>{label}</Label>}
            <StyledPreviewInput>
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
                        onClick={togglePreview}
                    />
                ) : (
                    <IconInvisibleEye
                        color={color.gray500}
                        width={24}
                        height={24}
                        cursor="pointer"
                        onClick={togglePreview}
                    />
                )}
            </StyledPreviewInput>
            {message && <Message>{message}</Message>}
        </div>
    );
};

export default PreviewInput;

const StyledPreviewInput = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    gap: 10px;
    height: 48px;
    padding: 10px 16px;
    background-color: ${color.white};
    border: 1px solid ${color.gray400};
    border-radius: 6px;

    &:focus-within {
        border: 1px solid ${color.maruDefault};
        outline: 2px solid rgba(20, 112, 255, 0.25);
    }
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
