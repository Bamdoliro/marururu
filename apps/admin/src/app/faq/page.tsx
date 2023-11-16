'use client';

import FaqTable from '@/components/faq/FaqTable/FaqTable';
import AppLayout from '@/layouts/AppLayout';
import { Button, Column, Dropdown, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import useCTAButton from './faq.hooks';

const FaqPage = () => {
  const { handleGoFaqPostPageButtonClick } = useCTAButton();

  return (
    <AppLayout>
      <StyledFaqPage>
        <Text fontType="H1">자주 묻는 질문</Text>
        <Column gap={36}>
          <Row justifyContent="space-between">
            <Row gap={16}>
              <SearchInput placeholder="검색어를 입력하세요." />
              <Dropdown
                data={[]}
                size="SMALL"
                width={140}
                placeholder="카테고리"
                onChange={() => console.log('이잉')}
                name="category"
              />
            </Row>
            <Button size="SMALL" icon="ADD_ICON" onClick={handleGoFaqPostPageButtonClick}>
              자주 묻는 질문 작성
            </Button>
          </Row>
        </Column>
        <FaqTable />
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
