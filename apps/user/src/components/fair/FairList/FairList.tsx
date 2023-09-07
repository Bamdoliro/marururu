import { useFairListQuery } from '@/services/fair/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import FairItem from './FairItem/FairItem';

interface Props {
    fairType: string;
}

const FairList = ({ fairType }: Props) => {
    const { data: fairListData } = useFairListQuery(fairType);

    return fairListData ? (
        <StyledFairList>
            {fairListData.map((item) => (
                <FairItem
                    start={item.start}
                    place={item.place}
                    applicationStartDate={item.applicationStartDate}
                    applicationEndDate={item.applicationEndDate}
                    status={item.status}
                />
            ))}
        </StyledFairList>
    ) : null;
};

export default FairList;

const StyledFairList = styled.div`
    position: relative;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    ${flex({ alignItems: 'center' })}
    gap: 16px;
`;
