import { useFairListQuery } from '@/services/fair/queries';
import ClosedItem from '../FairItem/ClosedItem';
import { styled } from 'styled-components';

interface Props {
  fairType: string;
}

const ClosedList = ({ fairType }: Props) => {
  const { data: fairListData } = useFairListQuery(fairType);

  return fairListData ? (
    <StyledFairList itemCount={fairListData.length}>
      {fairListData
        .filter(
          ({ status }) =>
            status === 'APPLICATION_CLOSED' || status === 'APPLICATION_EARLY_CLOSED'
        )
        .map(
          (
            {
              start,
              place,
              status,
              applicationStartDate,
              applicationEndDate,
              applicationUrl,
            },
            index
          ) => (
            <ClosedItem
              key={`closed ${index}`}
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

const StyledFairList = styled.div<{ itemCount: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 32px;

  @media (min-width: 800px) {
    grid-template-columns: ${({ itemCount }) =>
      itemCount <= 2 ? 'repeat(2, 400px)' : 'repeat(auto-fill, 400px)'};
  }
`;
