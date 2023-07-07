import { useLoginUserMutation } from '@/services/auth/mutations';
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

    const loginUserMutate = useLoginUserMutation(loginUserData);

    const handleLoginButtonClick = () => {
        loginUserMutate.mutate();
    };

    const handleLoginUserData: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setLoginUserData({ ...loginUserData, [name]: value });
    };

    return { handleLoginUserData, handleLoginButtonClick };
};

export default useLogin;
