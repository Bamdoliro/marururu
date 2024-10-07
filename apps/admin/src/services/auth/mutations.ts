import { ROUTES } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import type { PostLoginAuthReq } from '@/types/auth/remote';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { deleteLogoutAdmin, postLoginAdmin } from './api';
import { Session } from '@/apis/session/session';
import { useSetAccessTokenStore } from '@/store/auth/auth';

export const useLoginAdminMutation = ({ phoneNumber, password }: PostLoginAuthReq) => {
  const router = useRouter();
  const { handleError } = useApiError();
  const setAccessToken = useSetAccessTokenStore();

  const { mutate: loginAdminMutate, ...restMutation } = useMutation({
    mutationFn: () => postLoginAdmin({ phoneNumber, password }),
    onSuccess: (res: AxiosResponse) => {
      const { accessToken, refreshToken } = res.data;
      setAccessToken(accessToken);
      Session.setRefreshToken(refreshToken);
      router.replace(ROUTES.FORM);
    },
    onError: handleError,
  });

  return { loginAdminMutate, ...restMutation };
};

export const useLogoutAdminMutation = () => {
  const router = useRouter();

  const { mutate: logoutAdminMutate, ...restMutation } = useMutation({
    mutationFn: (token: string | null) => deleteLogoutAdmin(token),
    onSuccess: () => {
      sessionStorage.clear();
      router.replace(ROUTES.MAIN);
    },
    onError: () => {
      sessionStorage.clear();
      router.replace(ROUTES.MAIN);
    },
  });

  return { logoutAdminMutate, ...restMutation };
};
