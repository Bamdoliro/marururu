import { joinUser, joinUserParamsType } from "@/api/auth";
import { useMutation } from "react-query";

/** 회원가입 */
export const useJoinUser = ({ email, code, password }: joinUserParamsType) => {
  return useMutation(() => joinUser({ email, code, password }), {
    onSuccess: () => {},
  });
};
