import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled, { css } from 'styled-components';
import { TableOptionType, TablePropsType } from './Table.type';

const Td = ({
    children,
    width,
    height,
    option = 'PRIMARY',
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
}: TablePropsType) => {
    return (
        <StyledTd
            style={{
                width,
                height,
                borderTopLeftRadius,
                borderTopRightRadius,
                borderBottomLeftRadius,
                borderBottomRightRadius,
            }}
            option={option}>
            {children}
        </StyledTd>
    );
};

export default Td;

const StyledTd = styled.div<{ option: TableOptionType }>`
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
`;
