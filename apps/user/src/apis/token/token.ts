import TOKEN from '@/constants/token';
import { Storage } from '../storage/storage';

const authorization = () => {
    return {
        headers: {
            Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
        },
    };
};

authorization.FormData = () => {
    return {
        headers: {
            [TOKEN.REQUEST]: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
            'Content-Type': 'multipart/form-data',
        },
    };
};

export default authorization;
