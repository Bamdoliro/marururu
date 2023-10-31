import { Storage } from '@/apis/storage/storage';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import type {
  PatchVerificationReq,
  PostJoinAuthReq,
  PostLoginAuthReq,
} from '@/types/auth/remote';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';
import {
  deleteLogoutUser,
  patchVerification,
  postJoinUser,
  postLoginUser,
  postRequestVerificationCode,
} from './api';

export const useLoginUserMutation = ({ phoneNumber, password }: PostLoginAuthReq) => {
  const router = useRouter();
  const { handleError } = useApiError();

  const { mutate: loginUserMutate, ...restMutation } = useMutation({
    mutationFn: () => postLoginUser({ phoneNumber, password }),
    onSuccess: (res: AxiosResponse) => {
      const { accessToken, refreshToken } = res.data;
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
      router.push(ROUTES.MAIN);
    },
    onError: handleError,
  });

  return { loginUserMutate, ...restMutation };
};

export const useJoinUserMutation = ({ phoneNumber, name, password }: PostJoinAuthReq) => {
  const router = useRouter();
  const { handleError } = useApiError();

  const { mutate: joinUserMutate, ...restMutation } = useMutation({
    mutationFn: () => postJoinUser({ phoneNumber, name, password }),
    onSuccess: () => {
      alert('회원가입 성공');
      router.push(ROUTES.LOGIN);
    },
    onError: handleError,
  });

  return { joinUserMutate, ...restMutation };
};

export const useRequestVerificationCodeMutation = (phoneNumber: string) => {
  const { handleError } = useApiError();

  const { mutate: requestVerificationCodeMutate, ...restMutation } = useMutation({
    mutationFn: () => postRequestVerificationCode(phoneNumber),
    onSuccess: () => alert('인증 성공'),
    onError: handleError,
  });

  return { requestVerificationCodeMutate, ...restMutation };
};

export const useVerificationMutation = (
  setIsSuccessVerification: Dispatch<SetStateAction<boolean>>
) => {
  const { handleError } = useApiError();

  const { mutate: verificationMutate, ...restMutation } = useMutation({
    mutationFn: ({ code, phoneNumber }: PatchVerificationReq) =>
      patchVerification({ code, phoneNumber }),
    onSuccess: () => {
      setIsSuccessVerification(true);
    },
    onError: handleError,
  });

  return { verificationMutate, ...restMutation };
};

export const useLogoutUserMutation = () => {
  const { mutate: logoutUserMutate, ...restMutation } = useMutation({
    mutationFn: deleteLogoutUser,
    onSuccess: () => {
      localStorage.clear();
      window.location.href = ROUTES.MAIN;
    },
    onError: () => localStorage.clear(),
  });

  return { logoutUserMutate, ...restMutation };
};
