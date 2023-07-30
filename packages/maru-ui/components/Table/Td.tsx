import { flex } from '@maru/utils';
import { font, color } from '@maru/theme';
import { CSSProperties, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type TableOptionType = 'PRIMARY' | 'SECONDARY';

export interface PropsType {
    children: ReactNode;
    width: CSSProperties['width'];
    height: CSSProperties['height'];
    option?: TableOptionType;
}

const Td = ({ children, width, height, option = 'PRIMARY' }: PropsType) => {
    return (
        <StyledTd style={{ width, height }} option={option}>
            {children}
        </StyledTd>
    );
};

export default Td;

const StyledTd = styled.div<{ option?: TableOptionType }>`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}

    color: ${color.gray900};
    border: 0.5px solid ${color.gray300};

    ${(props) =>
        props.option === 'PRIMARY'
            ? css`
                  ${font.btn2}
                  background-color: ${color.white};
              `
            : css`
                  ${font.p2}
                  background-color: ${color.gray50};
              `}

    &:first-child {
        ${font.p2}
        background-color: ${color.gray50};
    }
`;
