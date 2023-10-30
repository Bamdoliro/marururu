import {
  useJoinUserMutation,
  useRequestVerificationMutation,
  useVerificationMutation,
} from '@/services/auth/mutations';
import type { Join } from '@/types/auth/client';
import { useBooleanState } from '@maru/hooks';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

export const useJoinAction = (joinUserData: Join, termsAgree: boolean) => {
  const { joinUserMutate } = useJoinUserMutation(joinUserData);

  const handleJoinButtonClick = () => {
    if (joinUserData.password === joinUserData.password_confirm) {
      if (termsAgree) {
        joinUserMutate();
      } else if (!termsAgree) {
        alert('이용약관 동의를 해주세요');
      }
    } else if (joinUserData.password !== joinUserData.password_confirm) {
      alert('비밀번호를 한번만 확인해주세요');
    }
  };

  return { handleJoinButtonClick };
};

export const useVerificationAction = (joinUserData: Join) => {
  // 전화번호 요청을 보냈는가?
  const { value: isVerification, setValue: setIsVerification } = useBooleanState(false);
  // 전화번호 전송 활성화 비활성화
  const {
    value: isRequestVerificationDisabled,
    setValue: setIsRequestVerificationDisabled,
  } = useBooleanState(false);
  // 전화번호 인증 확인 여부
  const { value: isVerificationDisabled, setValue: setIsVerificationDisabled } =
    useBooleanState(false);

  const { verificationMutate } = useVerificationMutation(setIsVerificationDisabled);
  const { requestVerificationMutate } = useRequestVerificationMutation(
    joinUserData.phoneNumber
  );

  const handleRequestVerificationButtonClick = () => {
    requestVerificationMutate();
    setIsRequestVerificationDisabled(true);
    setIsVerification(true);
    setIsVerificationDisabled(false);

    // 5초뒤 비활성화를 풀어줌
    setTimeout(() => {
      setIsRequestVerificationDisabled(false);
    }, 7000);
  };

  const handleVerificationButtonClick = () => {
    verificationMutate(joinUserData);
  };

  return {
    handleRequestVerificationButtonClick,
    handleVerificationButtonClick,
    isRequestVerificationDisabled,
    isVerificationDisabled,
    isVerification,
  };
};

export const useTimer = () => {
  const [timerTime, setTimerTime] = useState(0);

  const startTimer = () => {
    setTimerTime(300); // 5분
  };

  return { startTimer, timerTime, setTimerTime };
};

export const useInput = () => {
  const [joinUserData, setJoinUserData] = useState<Join>({
    phoneNumber: '',
    code: '',
    name: '',
    password: '',
    password_confirm: '',
  });

  const handleJoinUserDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setJoinUserData({ ...joinUserData, [name]: value });
  };

  return { joinUserData, handleJoinUserDataChange };
};
