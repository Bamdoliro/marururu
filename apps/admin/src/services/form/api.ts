import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { FormListType } from '@/types/form/client';
import { GetFormListRes } from '@/types/form/remote';

export const getFormList = async (formListType: FormListType) => {
    if (formListType === '검토해야 하는 원서 모아보기') {
        const { data } = await maru.get<GetFormListRes>('/form/review', authorization());

        return data;
    }
    const { data } = await maru.get<GetFormListRes>('/form', authorization());

    return data;
};

export const getSecondScoreFormat = async () => {
    const { data } = await maru.get('/form/second-round/format', {
        ...authorization(),
        responseType: 'blob',
    });

    return data;
};

export const patchSecondScoreFormat = async (formData: FormData) => {
    const { data } = await maru.patch('/form/second-round', formData, authorization.FormData());

    return data;
};
