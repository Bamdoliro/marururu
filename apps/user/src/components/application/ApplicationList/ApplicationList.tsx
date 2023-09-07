import { useApplicationListQuery } from '@/services/application/queries';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import ApplicationItem from '../ApplicationItem/ApplicationItem';

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
            <ApplicationItem
                start={'2023년 10월 6일'}
                place={'부산소프트웨어마이스터고 src관'}
                applicationStartDate={'2023-09-06'}
                applicationEndDate={'2023-09-21'}
                status={'APPLICATION_IN_PROGRESS'}
            />
        </StyledApplicationList>
    ) : null;
};

export default ApplicationList;

const StyledApplicationList = styled.div`
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    ${flex({ alignItems: 'center' })}
    gap: 16px;
`;
