import { useFairListQuery } from '@/services/fair/queries';
import { styled } from 'styled-components';
import { useMemo } from 'react';
import ClosedItem from '../FairItem/ClosedItem';

interface Props {
  fairType: string;
}

const ClosedList = ({ fairType }: Props) => {
  const { data: fairListData } = useFairListQuery(fairType);

  const filteredFairListData = useMemo(() => {
    return (
      fairListData?.filter(
        ({ status }) =>
          status === 'APPLICATION_ENDED' || status === 'APPLICATION_EARLY_CLOSED'
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
          <ClosedItem
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

export default ClosedList;

const StyledFairList = styled.div<{ gridTemplateColumns: string }>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  gap: 32px;
`;
