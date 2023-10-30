'use client';

import FaqEdit from '@/components/faq/FaqEdit/FaqEdit';
import { ROUTES } from '@/constants/common/constant';
import AppLayout from '@/layouts/AppLayout';
import { IconArrowLeft } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Loader } from '@maru/ui';
import { flex } from '@maru/utils';
import Link from 'next/link';
import { Suspense } from 'react';
import styled from 'styled-components';

interface Props {
  params: { id: number };
}

const FaqEditPage = ({ params: { id } }: Props) => {
  return (
    <AppLayout>
      <StyledFaqEdit>
        <DirectLink href={`${ROUTES.FAQ}/${id}`}>
          <IconArrowLeft width={18} height={18} />
          돌아가기
        </DirectLink>
        <Suspense fallback={<Loader />}>
          <FaqEdit id={id} />
        </Suspense>
      </StyledFaqEdit>
    </AppLayout>
  );
};

export default FaqEditPage;

const StyledFaqEdit = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  gap: 24px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;

const DirectLink = styled(Link)`
  ${flex({ alignItems: 'center' })}
  gap: 2px;
  ${font.p3}
  color: ${color.gray600};
`;
