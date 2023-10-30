import { useSchoolListQuery } from '@/services/form/queries';
import { School } from '@/types/form/client';
import { IconCheck } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  school: School;
  setSchool: Dispatch<SetStateAction<School>>;
  debouncedSchoolSearchQuery: string;
}

const SchoolList = ({ school, setSchool, debouncedSchoolSearchQuery }: Props) => {
  const { data: schoolListData } = useSchoolListQuery(debouncedSchoolSearchQuery);

  return schoolListData ? (
    <StyledSchoolList>
      {schoolListData.map(({ name, location, code }: School) => (
        <SchoolItem
          key={code}
          selected={school.code === code}
          onClick={() => setSchool({ name, location, code })}
        >
          <SchoolName>
            {school.code === code && (
              <IconCheck color={color.maruDefault} width={24} height={24} />
            )}
            {name}
          </SchoolName>
          <Text fontType="caption" color={color.gray600}>
            {location}
          </Text>
        </SchoolItem>
      ))}
    </StyledSchoolList>
  ) : null;
};

export default SchoolList;

const StyledSchoolList = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 8px;
  height: 225px;
  margin-top: 24px;
  overflow: auto;
`;

const SchoolItem = styled.div<{ selected: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  height: 56px;
  padding: 15px 16px;
  border-radius: 6px;
  background: ${color.gray50};
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      padding: 15px 15px;
      border: 1px solid ${color.maruDefault};
    `}
`;

const SchoolName = styled.p`
  ${font.p2}
  color: ${color.gray900};
  ${flex({ alignItems: 'center' })}
  gap: 4px;
`;
