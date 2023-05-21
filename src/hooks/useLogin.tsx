import { loginUserMutation } from "@/features/auth";
import { ChangeEvent, useState } from "react";

interface loginUserDataType {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [loginUserData, setLoginUserData] = useState<loginUserDataType>({
    email: "",
    password: "",
  });

  const handleLoginUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUserData({ ...loginUserData, [name]: value });
  };

  const loginUserMutate = loginUserMutation(loginUserData);

  return { handleLoginUserData, loginUserMutate };
};
