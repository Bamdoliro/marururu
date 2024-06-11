import { useFairListQuery } from '@/services/fair-management/queries';
import ClosedItem from './ClosedItem/ClosedItem';
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
          ({ start, place, status, applicationStartDate, applicationEndDate }, index) => (
            <ClosedItem
              key={`closed ${index}`}
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

export default ClosedList;

const StyledFairList = styled.div<{ itemCount: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;

  @media (min-width: 800px) {
    grid-template-columns: ${({ itemCount }) =>
      itemCount <= 2 ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)'};
  }
`;
