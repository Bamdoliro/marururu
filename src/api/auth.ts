import { maru } from "./index";

interface joinUserPropsType {
  email: string;
  code: string;
  password: string;
}

export const joinUser = async ({
  email,
  code,
  password,
}: joinUserPropsType) => {
  const { data } = await maru.post("/user", { email, code, password });
  return data;
};
