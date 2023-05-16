import {
  joinUser,
  joinUserParamsType,
  requestEmail,
  requestEmailParamsType,
} from "@/api/auth";
import { useRouter } from "next/navigation";
import { join } from "path";
import { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";

export interface joinUserDataType {
  email: string;
  code: string;
  password: string;
  repassword: string;
}

export const useJoinUser = () => {
  const router = useRouter();

  const [joinUserData, setJoinUserData] = useState<joinUserDataType>({
    email: "",
    code: "",
    password: "",
    repassword: "",
  });
  const [time, setTime] = useState(0);

  const handleJoinUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJoinUserData({ ...joinUserData, [name]: value });
  };
  const requestEmailEnabled = time !== 0;

  const joinUserMutation = ({ email, code, password }: joinUserParamsType) => {
    return useMutation(() => joinUser({ email, code, password }), {
      onSuccess: () => {
        alert("회원가입 성공");
        router.push("/login");
      },
      onError: () => {
        alert("회원가입 실패");
      },
    });
  };
  const requestEmailMutation = ({ email }: requestEmailParamsType) => {
    return useMutation(() => requestEmail({ email }));
  };

  const joinUserMutate = joinUserMutation(joinUserData);
  const requestEmailMutate = requestEmailMutation(joinUserData);

  const clickSignUp = () => {
    if (joinUserData.password === joinUserData.repassword) {
      joinUserMutate.mutate();
      console.log(joinUserData);
    } else {
      alert("비밀번호를 한번만 확인해주세요");
    }
  };

  return {
    handleJoinUserData,
    requestEmailMutate,
    requestEmailEnabled,
    clickSignUp,
    time,
    setTime,
  };
};
