import { useUser } from '@/hooks';
import {
  useUpdateUserMutation,
  useRequestVerificationCodeMutation,
  useVerificationMutation,
} from '@/services/auth/mutations';
import type { Update } from '@/types/auth/client';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

export const useUpdateAction = (updateUserData: Update) => {
  const { updateUserMutate } = useUpdateUserMutation(updateUserData);

  const handleUpdate = () => {
    if (updateUserData.password === updateUserData.password_confirm) {
      updateUserMutate();
    } else {
      alert('비밀번호를 한번만 확인해주세요');
    }
  };

  return { handleUpdate };
};

export const useVerificationCodeAction = (updateUserData: Update) => {
  const [isVerificationCodeSend, setIsVerificationCodeSend] = useState(false);
  const [isVerificationCodeDisabled, setisVerificationCodeDisabled] = useState(false);
  const [isVerificationCodeConfirm, setisVerificationCodeConfirm] = useState(false);

  const { verificationMutate } = useVerificationMutation(setisVerificationCodeConfirm);
  const { requestVerificationCodeMutate } = useRequestVerificationCodeMutation(
    updateUserData.phoneNumber,
    'UPDATE_PASSWORD'
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
    verificationMutate(updateUserData);
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
  const user = useUser();
  const [updateUser, setUpdateUser] = useState<Update>({
    phoneNumber: user.userData.phoneNumber || '',
    code: '',
    name: user.userData.name || '',
    password: '',
    password_confirm: '',
    type: 'UPDATE_PASSWORD',
  });

  const handleUpdateUserChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setUpdateUser((prevState) => ({
      ...prevState,
      [name]: name === 'phoneNumber' ? value.replace(/\D/g, '') : value,
    }));
  };

  return { updateUser, handleUpdateUserChange };
};
