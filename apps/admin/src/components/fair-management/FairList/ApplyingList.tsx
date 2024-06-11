import { useFairListQuery } from '@/services/fair-management/queries';
import { styled } from 'styled-components';
import ApplyingItem from './ApplyingItem/ApplyingItem';

interface Props {
  fairType: string;
}

const ApplyingList = ({ fairType }: Props) => {
  const { data: fairListData } = useFairListQuery(fairType);

  return fairListData ? (
    <StyledFairList itemCount={fairListData.length}>
      {fairListData
        .filter(({ status }) => status === 'APPLICATION_IN_PROGRESS' || status === null)
        .map(
          ({ start, place, status, applicationStartDate, applicationEndDate }, index) => (
            <ApplyingItem
              key={`applying ${index}`}
              place={place}
              applicationStartDate={applicationStartDate}
              applicationEndDate={applicationEndDate}
              start={start}
              status={status}
            />
          )
        )}
    </StyledFairList>
  ) : null;
};

export default ApplyingList;

const StyledFairList = styled.div<{ itemCount: number }>`
  display: grid;
  grid-template-columns: ${({ itemCount }) => (itemCount > 1 ? 'repeat(2, 1fr)' : '1fr')};
  gap: 8px;

  @media (min-width: 800px) {
    grid-template-columns: ${({ itemCount }) =>
      itemCount <= 2 ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)'};
  }
`;
