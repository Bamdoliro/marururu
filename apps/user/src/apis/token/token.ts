import TOKEN from '@/constants/token';
import { Storage } from '../storage';

export const authorization = () => {
    return {
        headers: {
            [TOKEN.REQUEST]: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
        },
    };
};
