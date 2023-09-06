import { useApplicationListQuery } from '@/services/application/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    applicationType: string;
}

const ApplicationList = ({ applicationType }: Props) => {
    const { data: applicationListData } = useApplicationListQuery(applicationType);

    return applicationListData ? (
        <StyledApplicationList>
            {applicationListData.map((item) => (
                <ApplicationItem
                    start={item.start}
                    place={item.place}
                    applicationStartDate={item.applicationStartDate}
                    applicationEndDate={item.applicationEndDate}
                    status={item.status}
                />
            ))}
        </StyledApplicationList>
    ) : null;
};

export default ApplicationList;

const StyledApplicationList = styled.div`
    width: 100%;
    ${flex({ alignItems: 'center' })}
    align-content: flex-start;
    gap: 16px;
    flex-wrap: wrap;
`;
