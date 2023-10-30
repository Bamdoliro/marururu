'use client';

import SideBar from '@/components/common/SideBar/SideBar';
import { flex } from '@maru/utils';
import type { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <StyledAppLayout>
      <SideBar />
      <Section>{children}</Section>
    </StyledAppLayout>
  );
};

export default AppLayout;

const StyledAppLayout = styled.div`
  ${flex({ flexDirection: 'row' })}
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  flex: 1;
  min-width: fit-content;
  overflow: auto;
`;
