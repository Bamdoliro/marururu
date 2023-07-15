import { useQuery } from 'react-query';
import { schoolList } from './api';
import KEY from '@/constants/key';

const useFormSchoolListQuery = (name: string) => {
    return useQuery({
        queryKey: [`${KEY.FORM_SCHOOL_LIST}/${name}`],
        queryFn: () => schoolList(name),
    });
};

export default useFormSchoolListQuery;
