import { color } from '@maru/theme';
import { flex } from '@maru/utils';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children: ReactNode;
}

const TableItem = ({ children }: Props) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export default TableItem;

const StyledListItem = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  min-width: fit-content;
  height: 64px;
  padding: 0px 56px 0px 32px;
  background: ${color.white};
  border: 1px solid ${color.gray200};
  border-radius: 12px;

  user-select: none;
`;
