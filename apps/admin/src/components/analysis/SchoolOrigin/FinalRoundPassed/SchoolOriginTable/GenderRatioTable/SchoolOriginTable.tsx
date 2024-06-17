import { useSchoolOriginListQuery } from '@/services/analysis/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import SchoolOriginTableHeader from './SchoolOriginTableHeader/SchoolOriginTableHeader';
import SchoolOriginTableItem from './SchoolOriginTableItem/SchoolOriginTableItem';
import type { AreaCategory } from '@/types/analysis/client';

interface Props {
  selectedCategory: AreaCategory;
}

const SchoolOriginTable = ({ selectedCategory }: Props) => {
  const { data: schoolOriginList } = useSchoolOriginListQuery();

  const filteredSchoolOriginList =
    selectedCategory === 'BUSAN'
      ? schoolOriginList
      : schoolOriginList?.filter((item) =>
          item.schoolLocation.includes(selectedCategory)
        );

  return (
    <StyledSchoolOriginTable>
      <SchoolOriginTableHeader />
      {filteredSchoolOriginList
        ?.sort((a, b) => a.id - b.id)
        .map(({ id, title, schoolOrigin, schoolLocation }) => (
          <SchoolOriginTableItem
            key={id}
            id={id}
            title={title}
            schoolOrigin={schoolOrigin}
            schoolLocation={schoolLocation}
          />
        ))}
    </StyledSchoolOriginTable>
  );
};

export default SchoolOriginTable;

const StyledSchoolOriginTable = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 12px;
  width: 100%;
  height: 100%;
`;
