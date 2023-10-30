import { ROUTES } from '@/constants/common/constant';
import { useLoginUserMutation } from '@/services/auth/mutations';
import type { PostLoginAuthReq } from '@/types/auth/remote';
import { useRouter } from 'next/navigation';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

export const useLoginAction = (loginUserData: PostLoginAuthReq) => {
  const { loginUserMutate } = useLoginUserMutation(loginUserData);

  const handleLoginButtonClick = () => {
    loginUserMutate();
  };

  return { handleLoginButtonClick };
};

export const useInput = () => {
  const [loginUserData, setLoginUserData] = useState<PostLoginAuthReq>({
    phoneNumber: '',
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

  const handleGoMainPageButtonClick = () => {
    router.push(ROUTES.MAIN);
  };
  return { handleGoMainPageButtonClick };
};
