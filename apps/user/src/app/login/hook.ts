import { loginUserParamsType } from '@/services/auth/api';
import { useLoginUserMutation } from '@/services/auth/mutations';
import { ChangeEventHandler, useState } from 'react';

const useLogin = () => {
    const [loginUserData, setLoginUserData] = useState<loginUserParamsType>({
        email: '',
        password: '',
    });

    const handleLoginUserData: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setLoginUserData({ ...loginUserData, [name]: value });
    };

    const loginUserMutate = useLoginUserMutation(loginUserData);

    return { handleLoginUserData, loginUserMutate };
};

export default useLogin;
