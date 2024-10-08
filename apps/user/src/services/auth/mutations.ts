import { ROUTES, TOKEN } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import type {
  PatchVerificationReq,
  PostJoinAuthReq,
  PatchUpdateAuthReq,
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
  patchUpdateUser,
  postLoginUser,
  postRequestVerificationCode,
} from './api';
import { useCookies } from 'react-cookie';
import { Session } from '@/apis/session/session';
import { useSetAccessTokenStore } from '@/store/auth/auth';

export const useLoginUserMutation = ({ phoneNumber, password }: PostLoginAuthReq) => {
  const router = useRouter();
  const setAccessToken = useSetAccessTokenStore();

  const { mutate: loginUserMutate, ...restMutation } = useMutation({
    mutationFn: () => postLoginUser({ phoneNumber, password }),
    onSuccess: (res: AxiosResponse) => {
      const { accessToken, refreshToken } = res.data;
      setAccessToken(accessToken);
      Session.setItem(TOKEN.REFRESH, refreshToken);
      router.push(ROUTES.MAIN);
    },
    onError: () => {
      alert('다시 로그인을 시도해주세요');
      sessionStorage.clear();
    },
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

export const useUpdateUserMutation = ({ phoneNumber, password }: PatchUpdateAuthReq) => {
  const router = useRouter();
  const { handleError } = useApiError();

  const { mutate: updateUserMutate, ...restMutation } = useMutation({
    mutationFn: () => patchUpdateUser({ phoneNumber, password }),
    onSuccess: () => {
      alert('비밀번호 변경 성공');
      router.push(ROUTES.LOGIN);
      sessionStorage.clear();
    },
    onError: handleError,
  });

  return { updateUserMutate, ...restMutation };
};

export const useRequestVerificationCodeMutation = (phoneNumber: string, type: string) => {
  const { handleError } = useApiError();

  const { mutate: requestVerificationCodeMutate, ...restMutation } = useMutation({
    mutationFn: () => postRequestVerificationCode(phoneNumber, type),
    onError: handleError,
  });

  return { requestVerificationCodeMutate, ...restMutation };
};

export const useVerificationMutation = (
  setIsSuccessVerification: Dispatch<SetStateAction<boolean>>
) => {
  const { handleError } = useApiError();

  const { mutate: verificationMutate, ...restMutation } = useMutation({
    mutationFn: ({ code, phoneNumber, type }: PatchVerificationReq) =>
      patchVerification({ code, phoneNumber, type }),
    onSuccess: () => {
      alert('인증 성공');
      setIsSuccessVerification(true);
    },
    onError: handleError,
  });

  return { verificationMutate, ...restMutation };
};

export const useLogoutUserMutation = () => {
  const [, , removeCookie] = useCookies([
    'noticeModalClosed',
    'isUploadPicture',
    'downloadUrl',
    'correct',
  ]);
  const router = useRouter();

  const { mutate: logoutUserMutate, ...restMutation } = useMutation({
    mutationFn: deleteLogoutUser,
    onSuccess: () => {
      sessionStorage.clear();
      removeCookie('noticeModalClosed');
      removeCookie('isUploadPicture');
      removeCookie('downloadUrl');
      removeCookie('correct');
      window.location.reload();
      router.replace(ROUTES.MAIN);
    },
    onError: () => {
      sessionStorage.clear();
      removeCookie('noticeModalClosed');
      removeCookie('isUploadPicture');
      removeCookie('downloadUrl');
      removeCookie('correct');
      window.location.reload();
    },
  });

  return { logoutUserMutate, ...restMutation };
};
