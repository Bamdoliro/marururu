import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { Storage } from '@/apis/storage/storage';
import TOKEN from '@/constants/token';
import { GetSchoolListRes, PostFormReq } from '@/types/form/remote';

export const postSubmitFinalForm = async (formUrl: string) => {
    const { data } = await maru.patch('/form', { formUrl });
    return data;
};

export const postSubmitDraftForm = async (formData: PostFormReq) => {
    const { data } = await maru.post('/form', formData, authorization());
    return data;
};

export const getExportForm = async () => {
    const { data } = await maru.get('/form/export', authorization());
    return data;
};

export const postUploadFormDocumnet = async (file: File) => {
    const { data } = await maru.post('/form/form-document', file, {
        headers: {
            Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
            'Content-Type': 'multipart/form-data',
        },
    });
    return data;
};

export const postUploadProfileImage = async (image: FormData) => {
    const { data } = await maru.post('/form/identification-picture', image, {
        headers: {
            Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
            'Content-Type': 'multipart/form-data',
        },
    });
    return data;
};

export const getSchoolList = async (school: string) => {
    const { data } = await maru.get<GetSchoolListRes>(`/school?q=${school}`);
    return data;
};
