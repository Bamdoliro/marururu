import { color, font } from '@maru/theme';
import { TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    limit: number;
    label: string;
}

const Textarea = ({ limit, label, name, value, onChange }: Props) => {
    const textValue = value as string;

    return (
        <div style={{ position: 'relative' }}>
            {label && <Label>{label}</Label>}
            <StyledTextarea
                value={textValue}
                name={name}
                onChange={onChange}
                placeholder={`${limit}자 이내로 작성해주세요.`}
                maxLength={limit}
            />
            <TextCount>{limit - textValue.length}</TextCount>
        </div>
    );
};

export default Textarea;

const StyledTextarea = styled.textarea`
    ${font.p2}
    resize: none;
    padding: 10px 16px;
    border: 1px solid ${color.gray400};
    border-radius: 6px;
    width: 100%;
    height: 400px;
    &::placeholder {
        color: ${color.gray500};
    }
`;

const TextCount = styled.span`
    ${font.p2}
    color: ${color.gray500};
    position: absolute;
    right: 20px;
    bottom: 14px;
`;

const Label = styled.p`
    ${font.H5}
    color: ${color.gray900};
    margin-bottom: 8px;
`;
