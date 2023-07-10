import TOKEN from '@/constants/token';
import { Storage } from '../storage';

const authorization = () => {
    return {
        headers: {
            [TOKEN.REQUEST]: `Bearer ${Storage.getItem(TOKEN.ACCESS)}`,
        },
    };
};

export default authorization;
