import {
  useJoinUserMutation,
  useRequestVerificationCodeMutation,
  useVerificationMutation,
} from '@/services/auth/mutations';
import type { Join } from '@/types/auth/client';
import { useBooleanState } from '@maru/hooks';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

export const useJoinAction = (joinUserData: Join, termsAgree: boolean) => {
  const { joinUserMutate } = useJoinUserMutation(joinUserData);

  const handleJoin = () => {
    if (joinUserData.password === joinUserData.password_confirm) {
      if (termsAgree) {
        joinUserMutate();
      } else {
        alert('이용약관 동의를 해주세요');
      }
    } else {
      alert('비밀번호를 한번만 확인해주세요');
    }
  };

  return { handleJoin };
};

export const useVerificationAction = (joinUserData: Join) => {
  const { value: isVerificationCodeSend, setValue: setIsVerificationCodeSend } =
    useBooleanState(false);
  const { value: isVerificationCodeDisabled, setValue: setisVerificationCodeDisabled } =
    useBooleanState(false);
  const { value: isVerificationCodeConfirm, setValue: setisVerificationCodeConfirm } =
    useBooleanState(false);

  const { verificationMutate } = useVerificationMutation(setisVerificationCodeConfirm);
  const { requestVerificationCodeMutate } = useRequestVerificationCodeMutation(
    joinUserData.phoneNumber
  );

  const handleRequestVerificationCode = () => {
    requestVerificationCodeMutate();
    setisVerificationCodeDisabled(true);
    setIsVerificationCodeSend(true);
    setisVerificationCodeConfirm(false);

    // 5초뒤 비활성화를 풀어줌
    setTimeout(() => {
      setisVerificationCodeDisabled(false);
    }, 7000);
  };

  const handleVerificationCodeConfirm = () => {
    verificationMutate(joinUserData);
  };

  return {
    handleRequestVerificationCode,
    handleVerificationCodeConfirm,
    isVerificationCodeDisabled,
    isVerificationCodeConfirm,
    isVerificationCodeSend,
  };
};

export const useInput = () => {
  const [joinUser, setJoinUser] = useState<Join>({
    phoneNumber: '',
    code: '',
    name: '',
    password: '',
    password_confirm: '',
  });

  const handleJoinUserChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setJoinUser({ ...joinUser, [name]: value });
  };

  return { joinUser, handleJoinUserChange };
};
