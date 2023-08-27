import { color } from '@maru/theme';
import { flex } from '@maru/utils';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
    children: ReactNode;
}

const TableHeader = ({ children }: Props) => {
    return <StyledListHeader>{children}</StyledListHeader>;
};

export default TableHeader;

const StyledListHeader = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    min-width: fit-content;
    height: 64px;
    padding: 0px 56px 0px 32px;
    color: ${color.gray600};
    background: ${color.gray50};
    border-radius: 12px;

    user-select: none;
`;
