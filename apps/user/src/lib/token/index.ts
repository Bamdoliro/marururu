import { ACCESS_KEY, REQUEST_KEY } from '@/constants/token';
import { Storage } from '../storage';

export const authorization = () => {
    return {
        headers: {
            [REQUEST_KEY]: `Bearer ${Storage.getItem(ACCESS_KEY)}`,
        },
    };
};
