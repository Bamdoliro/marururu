import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { Form } from '@/types/form/client';
import { GetSchoolListRes, GetSaveFormRes, GetFormStatusRes } from '@/types/form/remote';

export const postSubmitFinalForm = async (formUrl: string) => {
    const { data } = await maru.patch('/form', formUrl, authorization());
    return data;
};

export const postSubmitDraftForm = async (formData: Form) => {
    const { data } = await maru.post('/form', formData, authorization());
    return data;
};

export const getExportForm = async () => {
    const { data } = await maru.get('/form/export', { ...authorization(), responseType: 'blob' });
    return data;
};

export const getSaveForm = async () => {
    const { data } = await maru.get<GetSaveFormRes>('/form/draft', authorization());
    return data;
};

export const postSaveForm = async (formData: Form) => {
    const { data } = await maru.post('/form/draft', formData, authorization());
    return data;
};

export const postUploadFormDocumnet = async (file: FormData) => {
    const { data } = await maru.post('/form/form-document', file, authorization.FormData());
    return data;
};

export const postUploadProfileImage = async (image: FormData) => {
    const { data } = await maru.post(
        '/form/identification-picture',
        image,
        authorization.FormData(),
    );
    return data;
};

export const getSchoolList = async (school: string) => {
    const { data } = await maru.get<GetSchoolListRes>(`/school?q=${school}`);
    return data;
};

export const getFormStatus = async () => {
    const { data } = await maru.get<GetFormStatusRes>('/form/satus', authorization());
    return data;
};
