import TOKEN from '@/constants/token';
import { Storage } from '@/apis/storage/storage';
import { maru } from '@/apis/instance/instance';

export const uploadProfileImage = async (image: FormData) => {
    const { data } = await maru.post('/form/identification-picture', image, {
        headers: {
            Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
            'Content-Type': 'multipart/form-data',
        },
    });

    return { data };
};
