import { color, font } from '@maru/theme';
import styled, { css } from 'styled-components';

interface PropsType {
    message?: string;
    errorMessage?: string;
    isError?: boolean;
}

const Message = ({ message, errorMessage, isError = false }: PropsType) => {
    return isError ? (
        errorMessage ? (
            <div style={{ position: 'relative' }}>
                <StyledMessage isError={true}>{errorMessage}</StyledMessage>
            </div>
        ) : null
    ) : message ? (
        <StyledMessage isError={false}>{message}</StyledMessage>
    ) : null;
};

export default Message;

const StyledMessage = styled.p<{ isError: boolean }>`
    ${({ isError }) =>
        isError
            ? css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  ${font.caption}
                  color: ${color.red};
                  margin-top: 8px;
              `
            : css`
                  ${font.p3};
                  color: ${color.gray500};
                  margin-top: 4px;
              `}
`;
