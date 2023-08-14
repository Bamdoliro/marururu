import { Storage } from '@/apis/storage/storage';
import KEY from '@/constants/key';
import TOKEN from '@/constants/token';
import { useQuery } from '@tanstack/react-query';
import { getExportForm, getSaveForm, getSchoolList } from './api';

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
        retry: 1,
        suspense: false,
    });

    return { data, ...restQuery };
};

export const useSaveFormQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.SAVE_FORM],
        queryFn: () => getSaveForm(),
        suspense: false,
        retry: 1,
    });

    return { data: data?.data, ...restQuery };
};
