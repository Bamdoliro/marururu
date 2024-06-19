import { useFairListQuery } from '@/services/fair/queries';
import ClosedItem from '../FairItem/ClosedItem';
import { styled } from 'styled-components';

interface Props {
  fairType: string;
}

interface FairItem {
  start: string;
  place: string;
  status: string | null;
  applicationStartDate: string;
  applicationEndDate: string;
  applicationUrl: string;
}

const ClosedList = ({ fairType }: Props) => {
  const { data: fairListData } = useFairListQuery(fairType);

  return fairListData ? (
    <StyledFairList fairClosedItemCount={fairListData.length}>
      {fairListData
        .filter(
          ({ status }: FairItem) =>
            status === 'APPLICATION_CLOSED' || status === 'APPLICATION_EARLY_CLOSED'
        )
        .map(
          ({
            start,
            place,
            status,
            applicationStartDate,
            applicationEndDate,
            applicationUrl,
          }: FairItem) => (
            <ClosedItem
              key={applicationUrl}
              place={place}
              applicationStartDate={applicationStartDate}
              applicationEndDate={applicationEndDate}
              start={start}
              status={status !== null ? status : ''}
              applicationUrl={applicationUrl}
            />
          )
        )}
    </StyledFairList>
  ) : null;
};

export default ClosedList;

const StyledFairList = styled.div<{ fairClosedItemCount: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 32px;

  @media (min-width: 800px) {
    grid-template-columns: ${({ fairClosedItemCount }) =>
      fairClosedItemCount <= 2 ? 'repeat(2, 400px)' : 'repeat(auto-fill, 400px)'};
  }
`;
