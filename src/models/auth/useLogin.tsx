import { loginUser, loginUserParamsType } from "@/api/auth";
import { Storage } from "@/api/storage";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";

interface loginUserDataType {
  email: string;
  password: string;
}

export const useLogin = () => {
  const router = useRouter();
  const [loginUserData, setLoginUserData] = useState<loginUserDataType>({
    email: "",
    password: "",
  });

  const handleLoginUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUserData({ ...loginUserData, [name]: value });
  };

  const loginUserMutation = ({ email, password }: loginUserParamsType) => {
    return useMutation(() => loginUser({ email, password }), {
      onSuccess: (res) => {
        const { accessToken, refreshToken } = res.data;
        Storage.setItem("access-token", accessToken);
        Storage.setItem("refresh-token", refreshToken);

        alert("로그인 성공 !");
        router.push("/");
      },
      onError: () => {
        alert("로그인 실패");
      },
    });
  };

  const loginUserMutate = loginUserMutation(loginUserData);

  const clickLogin = () => {
    loginUserMutate.mutate();
  };

  return {
    handleLoginUserData,
    loginUserMutate,
    clickLogin,
  };
};
