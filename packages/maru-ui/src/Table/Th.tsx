import { flex } from '@maru/utils';
import { font, color } from '@maru/theme';
import { TableOptionType, TablePropsType } from './Table.type';
import styled, { css } from 'styled-components';

const Th = ({
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
        <StyledTh
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
        </StyledTh>
    );
};

export default Th;

const StyledTh = styled.div<{ option: TableOptionType }>`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}

    ${(props) =>
        props.option === 'PRIMARY'
            ? css`
                  ${font.context}
                  background-color: ${color.maruDefault};
                  color: ${color.white};
                  border-right: 1px solid ${color.white};
                  &:last-child {
                      border-right: none;
                  }
              `
            : css`
                  ${font.p2}
                  background-color: ${color.gray100};
                  color: ${color.gray900};
                  border-left: 1px solid ${color.gray300};
                  &:first-child {
                      border-left: none;
                  }
              `}
`;
