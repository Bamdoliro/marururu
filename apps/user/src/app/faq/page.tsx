'use client';

import { CategoryFilter, FaqList } from '@/components/faq';
import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Loader, Text } from '@maru/ui';
import { useState } from 'react';
import { Suspense } from '@suspensive/react';
import styled from 'styled-components';

const FaqPage = () => {
  const [category, setCategory] = useState('TOP_QUESTION');

  return (
    <AppLayout header footer>
      <StyledFaqPage>
        <Text fontType="H1" color={color.gray900}>
          자주 묻는 질문
        </Text>
        <CategoryFilter setCategory={setCategory} />
        <Suspense.CSROnly>
          <FaqList category={category} />
        </Suspense.CSROnly>
      </StyledFaqPage>
    </AppLayout>
  );
};

export default FaqPage;

const StyledFaqPage = styled.div`
  position: relative;
  width: 100%;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 82px 204px 240px;
`;
