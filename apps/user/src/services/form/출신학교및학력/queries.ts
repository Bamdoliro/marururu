import { useQuery } from 'react-query';
import { schoolList } from './api';
import KEY from '@/constants/key';

const useSchoolListQuery = (name: string) => {
    return useQuery({
        queryKey: [
            KEY.FORM_SCHOOL_LIST,
            name.replaceAll(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ 0-9]/gim, ''),
        ],
        queryFn: () => schoolList(name),
    });
};

export default useSchoolListQuery;
