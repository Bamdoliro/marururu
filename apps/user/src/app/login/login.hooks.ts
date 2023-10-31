import { ROUTES } from '@/constants/common/constant';
import { useLoginUserMutation } from '@/services/auth/mutations';
import type { PostLoginAuthReq } from '@/types/auth/remote';
import { useRouter } from 'next/navigation';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

export const useLoginAction = (loginUserData: PostLoginAuthReq) => {
  const { loginUserMutate } = useLoginUserMutation(loginUserData);

  const handleLogin = () => {
    loginUserMutate();
  };

  return { handleLogin };
};

export const useInput = () => {
  const [loginUser, setLoginUser] = useState<PostLoginAuthReq>({
    phoneNumber: '',
    password: '',
  });

  const handleLoginUserChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  return { loginUser, handleLoginUserChange };
};

export const useCTAButton = () => {
  const router = useRouter();

  const handleMoveMainPage = () => {
    router.push(ROUTES.MAIN);
  };
  return { handleMoveMainPage };
};
