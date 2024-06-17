import { useState } from 'react';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { SubDropdown, SearchInput, Column, Row } from '@maru/ui';
import type { AreaCategory } from '@/types/analysis/client';
import SchoolOriginTable from './SchoolOriginTable/GenderRatioTable/SchoolOriginTable';

const SecondRoundPassed = () => {
  const [selectedCategory, setSelectedCategory] = useState<AreaCategory>('BUSAN');

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
                  { value: 'JUNG_GU', label: '중구' },
                  { value: 'HAEUNDAE_GU', label: '해운대구' },
                  { value: 'SEO_GU', label: '서구' },
                  { value: 'SAHA_GU', label: '사하구' },
                  { value: 'DONG_GU', label: '동구' },
                  { value: 'GEUMJUNG_GU', label: '금정구' },
                  { value: 'YOUNGDO_GU', label: '영도구' },
                  { value: 'GANGSEO_GU', label: '강서구' },
                  { value: 'BUSAN_JING_GU', label: '부산진구' },
                  { value: 'YEONJA_GU', label: '연제구' },
                  { value: 'DONGNAE_GU', label: '동래구' },
                  { value: 'SUYOUND_GU', label: '수영구' },
                  { value: 'NANM_GU', label: '남구' },
                  { value: 'SASANG_GU', label: '사상구' },
                  { value: 'BUG_GU', label: '북구' },
                  { value: 'GIJANG_GU', label: '기장군' },
                  { value: 'BUSAN_ALL', label: '부산 전체' },
                ],
              },
              {
                value: 'OTHER_AREA',
                label: '타 지역',
                children: [
                  {
                    value: 'SEOUL',
                    label: '서울특별시',
                  },
                  { value: 'GYEONGGI_DO', label: '경기도' },
                  { value: 'GANGWON_DO', label: '강원도' },
                  { value: 'DAEGU', label: '대구광역시' },
                  { value: 'CHUNCHEONGBUK_DO', label: '충청북도' },
                  { value: 'INCHEON', label: '인천광역시' },
                  { value: 'CHUNCHEONGNAM_DO', label: '충청남도' },
                  { value: 'DAEJEON', label: '대전광역시' },
                  { value: 'JUNLABUK_DO', label: '전라북도' },
                  { value: 'CHUNJU', label: '청주광역시' },
                  { value: 'JUNLANAM_DO', label: '전라남도' },
                  { value: 'ULSAN', label: '울산광역시' },
                  { value: 'GYEONGSANGBUK_DO', label: '경상북도' },
                  { value: 'SEJONG', label: '세종특별자치시' },
                  { value: 'GYEONGSANGNAM_DO', label: '경상남도' },
                  { value: 'JEJU', label: '제주특별자치도' },
                ],
              },
            ]}
            size="SMALL"
            width={140}
            placeholder="지역 선택"
            onChange={handleClassificationCategory}
            name="category"
          />
          <SearchInput placeholder="검색어를 입력하세요." />
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

export default SecondRoundPassed;
