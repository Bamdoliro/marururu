import { Login } from '@/services/auth/api';
import { useLoginUserMutation } from '@/services/auth/mutations';
import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';
import { ChangeEventHandler, useState } from 'react';

export const useLoginAction = (loginUserData: Login) => {
    const loginUserMutation = useLoginUserMutation(loginUserData);

    const handleLoginButtonClick = () => {
        loginUserMutation.mutate();
    };

    return { handleLoginButtonClick };
};

export const useInput = () => {
    const [loginUserData, setLoginUserData] = useState<Login>({
        email: '',
        password: '',
    });

    const handleLoginUserDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setLoginUserData({ ...loginUserData, [name]: value });
    };

    return { loginUserData, handleLoginUserDataChange };
};

export const useCTAButton = () => {
    const router = useRouter();

    const handleGoSingUpPageButtonClick = () => {
        router.push(ROUTES.SIGNUP);
    };

    return { handleGoSingUpPageButtonClick };
};
