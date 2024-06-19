import { useFairListQuery } from '@/services/fair/queries';
import ApplyingItem from '../FairItem/ApplyingItem';
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

const ApplyingList = ({ fairType }: Props) => {
  const { data: fairListData } = useFairListQuery(fairType);

  return fairListData ? (
    <StyledFairList fairApplyingItemCount={fairListData.length}>
      {fairListData
        .filter(
          ({ status }: FairItem) =>
            status === 'APPLICATION_IN_PROGRESS' || status === null
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
            <ApplyingItem
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

export default ApplyingList;

const StyledFairList = styled.div<{ fairApplyingItemCount: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 32px;

  @media (min-width: 800px) {
    grid-template-columns: ${({ fairApplyingItemCount }) =>
      fairApplyingItemCount <= 2 ? 'repeat(2, 400px)' : 'repeat(auto-fill, 400px)'};
  }
`;
