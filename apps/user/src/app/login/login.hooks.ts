import { LoginType } from '@/services/auth/api';
import { useLoginUserMutation } from '@/services/auth/mutations';
import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';
import { ChangeEventHandler, useState } from 'react';

export const useInput = () => {
    const [loginUserData, setLoginUserData] = useState<LoginType>({
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
    const handleGoSingUpPageButtonClick = useGoSignUpPageButton();

    return { handleGoSingUpPageButtonClick };
};

export const useLogin = (loginUserData: LoginType) => {
    const loginUserMutation = useLoginUserMutation(loginUserData);

    const handleLoginButtonClick = () => {
        loginUserMutation.mutate();
    };

    return { handleLoginButtonClick };
};

const useGoSignUpPageButton = () => {
    const router = useRouter();

    const handleGoSingUpPageButtonClick = () => {
        router.push(ROUTES.SIGNUP);
    };

    return handleGoSingUpPageButtonClick;
};
