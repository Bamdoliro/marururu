import { useSchoolOriginListQuery } from '@/services/analysis/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import type { AreaCategory } from '@/types/analysis/client';
import SchoolOriginTableHeader from './SchoolOriginTableHeader/SchoolOriginTableHeader';
import SchoolOriginTableItem from './SchoolOriginTableItem/SchoolOriginTableItem';

interface Props {
  selectedCategory: AreaCategory;
}

const SchoolOriginTable: React.FC<Props> = ({ selectedCategory }) => {
  const { data: schoolOriginList } = useSchoolOriginListQuery({
    statusList: ['RECEIVED', 'FIRST_PASSED', 'FAILED', 'PASSED', 'FIRST_FAILED'],
    isBusan: selectedCategory === 'OTHER_AREA' ? false : true,
    gu: selectedCategory === 'OTHER_AREA' ? '' : selectedCategory,
  });

  return (
    <StyledSchoolOriginTable>
      <SchoolOriginTableHeader />
      {schoolOriginList?.map((item, index) => (
        <SchoolOriginTableItem
          key={index + 1}
          id={index + 1}
          applicantName={item.applicantName}
          schoolName={item.schoolName}
          schoolAddress={item.schoolAddress}
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
