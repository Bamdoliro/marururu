import { Storage } from '@/apis/storage/storage';
import { KEY, TOKEN } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { useSuspenseQuery } from '@suspensive/react-query';
import { getExportForm, getFormStatus, getSaveForm, getSchoolList } from './api';

export const useSchoolListQuery = (school: string) => {
    const { data, ...restQuery } = useSuspenseQuery({
        queryKey: [KEY.FORM_SCHOOL_LIST, school],
        queryFn: () => getSchoolList(school),
    });

    return { data: data.dataList, ...restQuery };
};

export const useExportFormQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.EXPORT_FORM],
        queryFn: getExportForm,
        retry: 1,
        suspense: false,
    });

    return { data, ...restQuery };
};

export const useSaveFormQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.SAVE_FORM],
        queryFn: getSaveForm,
        enabled: !!Storage.getItem(TOKEN.ACCESS),
        retry: 1,
        suspense: false,
    });

    return { data: data?.data, ...restQuery };
};

export const useFormStatusQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FORM_STATUS],
        queryFn: getFormStatus,
        enabled: !!Storage.getItem(TOKEN.ACCESS),
        suspense: false,
        retry: 1,
    });

    return { data: data?.data, ...restQuery };
};
