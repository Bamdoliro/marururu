import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { InputPropsType } from './type';
import { useState } from 'react';
import styled from 'styled-components';
import VisibleEyeIcon from '../../Icons/VisibleEye';
import InvisibleEyeIcon from '../../Icons/InvisibleEye';
import Message from './Message';

const PreviewInput = ({
    width = '320px',
    placeholder,
    name,
    label,
    value,
    msg,
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
                    <VisibleEyeIcon cursor="pointer" onClick={togglePreview} />
                ) : (
                    <InvisibleEyeIcon cursor="pointer" onClick={togglePreview} />
                )}
            </StyledPreviewInput>
            {msg && <Message>{msg}</Message>}
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
    padding-bottom: 8px;
`;
