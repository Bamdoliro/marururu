'use client';

import { useState } from 'react';
import { Button, Column, Dropdown, Row, Text } from '@maru/ui';
import { styled } from 'styled-components';
import useCTAButton from './faq.hooks';
import AppLayout from '@/layouts/AppLayout';
import FaqTable from '@/components/faq/FaqTable/FaqTable';
import { flex } from '@maru/utils';
import type { FaqCategory } from '@/types/faq/client';

const FaqPage = () => {
  const { handleGoFaqPostPageButtonClick } = useCTAButton();
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>('BOARD_ALL');

  const handleClassificationCategory = (value: string) => {
    setSelectedCategory(value as FaqCategory);
  };

  return (
    <AppLayout>
      <StyledFaqPage>
        <Text fontType="H1">자주 묻는 질문</Text>
        <Column gap={36}>
          <Row justifyContent="space-between">
            <Row gap={16}>
              <Dropdown
                data={[
                  { value: 'BOARD_ALL', label: '전체 보기' },
                  { value: 'SCHOOL_LIFE', label: '학교 생활' },
                  { value: 'SUBMIT_DOCUMENT', label: '관련 제출 서류' },
                  { value: 'ADMISSION_PROCESS', label: '입학 과정' },
                  { value: 'TOP_QUESTION', label: '질문 TOP' },
                ]}
                size="SMALL"
                width={140}
                placeholder="카테고리"
                onChange={handleClassificationCategory}
                name="category"
              />
            </Row>
            <Button size="SMALL" icon="ADD_ICON" onClick={handleGoFaqPostPageButtonClick}>
              자주 묻는 질문 작성
            </Button>
          </Row>
        </Column>
        <FaqTable selectedCategory={selectedCategory} />
      </StyledFaqPage>
    </AppLayout>
  );
};

export default FaqPage;

const StyledFaqPage = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;
