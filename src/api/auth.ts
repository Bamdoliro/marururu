import { maru } from "./index";

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
