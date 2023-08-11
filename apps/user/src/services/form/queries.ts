import { Storage } from '@/apis/storage/storage';
import KEY from '@/constants/key';
import TOKEN from '@/constants/token';
import { useQuery } from 'react-query';
import { getExportForm, getSchoolList } from './api';

export const useSchoolListQuery = (school: string) => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FORM_SCHOOL_LIST, school],
        queryFn: () => getSchoolList(school),
        enabled: !!Storage.getItem(TOKEN.ACCESS),
    });

    return { data: data?.dataList, ...restQuery };
};

export const useExportFormQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.EXPORT_FORM],
        queryFn: () => getExportForm(),
        enabled: false,
    });

    return { data: data, ...restQuery };
};
