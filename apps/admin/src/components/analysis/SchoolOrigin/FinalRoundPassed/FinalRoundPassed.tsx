import { useState } from 'react';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { SubDropdown, Column, Row } from '@maru/ui';
import type { AreaCategory } from '@/types/analysis/client';
import SchoolOriginTable from './SchoolOriginTable/GenderRatioTable/SchoolOriginTable';

const FinalRoundPassed = () => {
  const [selectedCategory, setSelectedCategory] = useState<AreaCategory>('');

  const handleClassificationCategory = (value: string) => {
    setSelectedCategory(value as AreaCategory);
  };

  return (
    <Layout>
      <Column gap={36}>
        <Row justifyContent="space-between">
          <SubDropdown
            data={[
              {
                value: 'BUSAN',
                label: '부산 지역',
                children: [
                  { value: '중구', label: '중구' },
                  { value: '해운대구', label: '해운대구' },
                  { value: '서구', label: '서구' },
                  { value: '사하구', label: '사하구' },
                  { value: '동구', label: '동구' },
                  { value: '금정구', label: '금정구' },
                  { value: '영도구', label: '영도구' },
                  { value: '강서구', label: '강서구' },
                  { value: '부산진구', label: '부산진구' },
                  { value: '연제구', label: '연제구' },
                  { value: '동래구', label: '동래구' },
                  { value: '수영구', label: '수영구' },
                  { value: '남구', label: '남구' },
                  { value: '사상구', label: '사상구' },
                  { value: '북구', label: '북구' },
                  { value: '기장군', label: '기장군' },
                  { value: '', label: '부산 전체' },
                ],
              },
              {
                value: 'OTHER_AREA',
                label: '타 지역',
              },
            ]}
            size="SMALL"
            width={140}
            placeholder="지역 선택"
            onChange={handleClassificationCategory}
            name="category"
          />
        </Row>
        <SchoolOriginTable selectedCategory={selectedCategory} />
      </Column>
    </Layout>
  );
};

const Layout = styled.div`
  ${flex({
    justifyContent: 'space-between',
    flexDirection: 'row',
  })}
  width: 100%;
  gap: 75px;
`;

export default FinalRoundPassed;
