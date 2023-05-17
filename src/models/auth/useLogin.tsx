import { loginUser, loginUserParamsType } from "@/api/auth";
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
        console.log(res);
        console.log("로그인 성공 !");
        router.push("/");
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
