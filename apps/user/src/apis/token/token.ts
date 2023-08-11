import TOKEN from '@/constants/token';
import { Storage } from '../storage/storage';

const authorization = () => {
    return {
        headers: {
            Authorization: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
        },
    };
};

export default authorization;
