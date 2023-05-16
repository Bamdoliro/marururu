import { maru } from "./index";

// 회원가입

export interface joinUserParamsType {
  email: string;
  code: string;
  password: string;
}

export const joinUser = async ({
  email,
  code,
  password,
}: joinUserParamsType) => {
  const { data } = await maru.post("/user", { email, code, password });
  return data;
};

// 이메일 요청

export interface requestEmailParamsType {
  email: string;
}

export const requestEmail = async ({ email }: requestEmailParamsType) => {
  const { data } = await maru.post(`/user/verification?email=${email}`);
  return data;
};
