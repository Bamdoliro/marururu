import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { Form } from '@/types/form';
import { Storage } from '@/apis/storage/storage';
import TOKEN from '@/constants/token';

export const submitDraftForm = async (formData: Form) => {
    const { data } = await maru.post('/form', formData, authorization());

    return { data };
};

export const uploadProfileImage = async (image: FormData) => {
    const { data } = await maru.post('/form/identification-picture', image, {
        headers: {
            Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
            'Content-Type': 'multipart/form-data',
        },
    });

    return { data };
};

export const schoolList = async (school: string) => {
    const { data } = await maru.get(`/school?q=${school}`);

    return data.dataList;
};
