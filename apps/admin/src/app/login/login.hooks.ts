import { ROUTES } from '@/constants/common/constant';
import { useLoginAdminMutation } from '@/services/auth/mutations';
import type { PostLoginAuthReq } from '@/types/auth/remote';
import { useRouter } from 'next/navigation';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

export const useLoginAction = (loginAdminData: PostLoginAuthReq) => {
  const { loginAdminMutate: loginAdminMutate } = useLoginAdminMutation(loginAdminData);

  const handleLogin = () => {
    loginAdminMutate();
  };

  return { handleLogin };
};

export const useInput = () => {
  const [loginAdminData, setLoginAdminData] = useState<PostLoginAuthReq>({
    phoneNumber: '',
    password: '',
  });

  const handleLoginAdminDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setLoginAdminData({ ...loginAdminData, [name]: value });
  };

  return {
    loginAdminData,
    handleLoginAdminDataChange,
  };
};

export const useCTAButton = () => {
  const router = useRouter();

  const handleGoMainPageButtonClick = () => {
    router.push(ROUTES.MAIN);
  };
  return { handleGoMainPageButtonClick };
};
