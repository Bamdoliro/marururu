import KEY from '@/constants/key';
import { useQuery } from 'react-query';
import { schoolList } from './api';

const useSchoolListQuery = (name: string) => {
    return useQuery({
        queryKey: [KEY.FORM_SCHOOL_LIST, name],
        queryFn: () => schoolList(name),
    });
};

export default useSchoolListQuery;
