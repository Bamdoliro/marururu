import { useQuery } from 'react-query';
import { schoolList } from './api';
import KEY from '@/constants/key';

const useFormSchoolListQuery = (name: string) => {
    return useQuery<
        {
            SCHUL_NM: string;
            ORG_RDNMA: string;
            ORG_TELNO: string;
            SD_SCHUL_CODE: string;
        }[]
    >({
        queryKey: [
            KEY.FORM_SCHOOL_LIST,
            name.replaceAll(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ 0-9]/gim, ''),
        ],
        queryFn: () => schoolList(name),
    });
};

export default useFormSchoolListQuery;
