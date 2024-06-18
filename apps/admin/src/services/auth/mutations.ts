import { Storage } from '@/apis/storage/storage';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import type { PostLoginAuthReq } from '@/types/auth/remote';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { deleteLogoutAdmin, postLoginAdmin } from './api';

export const useLoginAdminMutation = ({ phoneNumber, password }: PostLoginAuthReq) => {
  const router = useRouter();
  const { handleError } = useApiError();

  const { mutate: loginAdminMutate, ...restMutation } = useMutation({
    mutationFn: () => postLoginAdmin({ phoneNumber, password }),
    onSuccess: (res: AxiosResponse) => {
      const { accessToken, refreshToken } = res.data;
      Storage.setItem(TOKEN.ACCESS, accessToken);
      Storage.setItem(TOKEN.REFRESH, refreshToken);
      router.push(ROUTES.MAIN);
    },
    onError: handleError,
  });

  return { loginAdminMutate, ...restMutation };
};

export const useLogoutAdminMutation = () => {
  const router = useRouter();
  const { mutate: logoutAdminMutate, ...restMutation } = useMutation({
    mutationFn: deleteLogoutAdmin,
    onSuccess: () => {
      localStorage.clear();
      router.replace(ROUTES.LOGIN);
    },
    onError: () => localStorage.clear(),
  });
  return { logoutAdminMutate, ...restMutation };
};
