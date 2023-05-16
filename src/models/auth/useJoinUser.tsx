import { joinUser, joinUserParamsType } from "@/api/auth";
import { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";

export interface joinUserDataType {
  email: string;
  code: string;
  password: string;
  repassword: string;
}

export const useJoinUser = () => {
  const [joinUserData, setJoinUserData] = useState<joinUserDataType>({
    email: "",
    code: "",
    password: "",
    repassword: "",
  });

  const handleJoinUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJoinUserData({ ...joinUserData, [name]: value });
  };

  const joinUserMutation = ({ email, code, password }: joinUserParamsType) => {
    return useMutation(() => joinUser({ email, code, password }), {
      onSuccess: () => {
        console.log("heelo");
      },
    });
  };

  const joinUserMutate = joinUserMutation(joinUserData);

  return {
    handleJoinUserData,
    joinUserMutate,
  };
};
