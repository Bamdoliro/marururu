import KEY from '@/constants/key';
import { useQuery } from 'react-query';
import { getSchoolList } from './api';

interface SchoolList {
    code: string;
    name: string;
    location: string;
}

export const useSchoolListQuery = (school: string) => {
    return useQuery<SchoolList[]>({
        queryKey: [KEY.FORM_SCHOOL_LIST, school],
        queryFn: () => getSchoolList(school),
        initialData: [],
    });
};
