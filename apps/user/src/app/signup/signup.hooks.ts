import {
  useJoinUserMutation,
  useRequestVerificationCodeMutation,
  useVerificationMutation,
} from '@/services/auth/mutations';
import type { Join } from '@/types/auth/client';
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

export const useVerificationCodeAction = (joinUserData: Join) => {
  const [isVerificationCodeSend, setIsVerificationCodeSend] = useState(false);
  const [isVerificationCodeDisabled, setisVerificationCodeDisabled] = useState(false);
  const [isVerificationCodeConfirm, setisVerificationCodeConfirm] = useState(false);

  const { verificationMutate } = useVerificationMutation(setisVerificationCodeConfirm);
  const { requestVerificationCodeMutate } = useRequestVerificationCodeMutation(
    joinUserData.phoneNumber,
    'SIGNUP'
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
    type: 'SIGNUP',
  });

  const handleJoinUserChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      const numbersOnly = value.replace(/\D/g, '');
      setJoinUser({ ...joinUser, [name]: numbersOnly });
    } else {
      setJoinUser({ ...joinUser, [name]: value });
    }
  };

  return { joinUser, handleJoinUserChange };
};
