import { useLoginUserMutation } from '@/services/auth/mutation';
import { ChangeEventHandler, useState } from 'react';

interface loginUserDataType {
    email: string;
    password: string;
}

const useLogin = () => {
    const [loginUserData, setLoginUserData] = useState<loginUserDataType>({
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
