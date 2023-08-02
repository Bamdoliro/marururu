import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { Storage } from '@/apis/storage/storage';
import TOKEN from '@/constants/token';
import { GetSchoolListRes, PostFormReq } from '@/types/form/remote';

export const postSubmitDraftForm = async (formData: PostFormReq) => {
    const { data } = await maru.post('/form', formData, authorization());

    return { data };
};

export const postUploadProfileImage = async (image: FormData) => {
    const { data } = await maru.post('/form/identification-picture', image, {
        headers: {
            Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
            'Content-Type': 'multipart/form-data',
        },
    });

    return { data };
};

export const getSchoolList = async (school: string) => {
    const { data } = await maru.get<GetSchoolListRes>(`/school?q=${school}`);
    return data;
};
