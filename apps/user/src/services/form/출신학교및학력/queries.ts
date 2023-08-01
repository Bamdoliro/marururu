import KEY from '@/constants/key';
import { useQuery } from 'react-query';
import { getSchoolList } from './api';

const useSchoolListQuery = (name: string) => {
    return useQuery({
        queryKey: [KEY.FORM_SCHOOL_LIST, name],
        queryFn: () => getSchoolList(name),
        initialData: [],
    });
};

export default useSchoolListQuery;
