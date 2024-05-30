import { useFairListQuery } from '@/services/fair/queries';
import ApplyingItem from './ApplyingItem/ApplyingItem';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';

interface Props {
  fairType: string;
}

const ApplyingList = ({ fairType }: Props) => {
  const { data: fairListData } = useFairListQuery(fairType);

  return fairListData ? (
    <StyledFairList>
      {fairListData.map(
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

const StyledFairList = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  width: 100%;
`;
