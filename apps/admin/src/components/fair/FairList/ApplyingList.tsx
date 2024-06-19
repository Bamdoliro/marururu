import { useFairListQuery } from '@/services/fair/queries';
import ApplyingItem from '../FairItem/ApplyingItem';
import { styled } from 'styled-components';
import { useMemo } from 'react';

interface Props {
  fairType: string;
}

const ApplyingList = ({ fairType }: Props) => {
  const { data: fairListData } = useFairListQuery(fairType);

  const filteredFairListData = useMemo(() => {
    return (
      fairListData?.filter(
        ({ status }) => status === 'APPLICATION_IN_PROGRESS' || status === null
      ) || []
    );
  }, [fairListData]);

  const gridTemplateColumns = useMemo(() => {
    return filteredFairListData.length <= 2
      ? 'repeat(2, 400px)'
      : 'repeat(auto-fill, 400px)';
  }, [filteredFairListData.length]);

  return filteredFairListData.length > 0 ? (
    <StyledFairList gridTemplateColumns={gridTemplateColumns}>
      {filteredFairListData.map(
        ({
          start,
          place,
          status,
          applicationStartDate,
          applicationEndDate,
          applicationUrl,
        }) => (
          <ApplyingItem
            key={applicationUrl}
            place={place}
            applicationStartDate={applicationStartDate}
            applicationEndDate={applicationEndDate}
            start={start}
            status={status}
            applicationUrl={applicationUrl}
          />
        )
      )}
    </StyledFairList>
  ) : null;
};

export default ApplyingList;

const StyledFairList = styled.div<{ gridTemplateColumns: string }>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  gap: 32px;
`;
