import KEY from '@/constants/key';
import { useQuery } from 'react-query';
import { getSchoolList } from './api';

export const useSchoolListQuery = (school: string) => {
    return useQuery({
        queryKey: [KEY.FORM_SCHOOL_LIST, school],
        queryFn: () => getSchoolList(school),
    });
};
