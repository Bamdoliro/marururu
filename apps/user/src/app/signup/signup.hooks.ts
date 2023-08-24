import { useJoinUserMutation, useVerificationMutation } from '@/services/auth/mutations';
import { PostJoinAuthReq } from '@/types/auth/remote';
import { useBooleanState } from '@maru/hooks';
import { ChangeEventHandler, useState } from 'react';

export const useJoinAction = (joinUserData: PostJoinAuthReq, termsAgree: boolean) => {
    const { joinUserMutate } = useJoinUserMutation(joinUserData);

    const handleJoinButtonClick = () => {
        if (joinUserData.password === joinUserData.password_confirm) {
            if (termsAgree) {
                joinUserMutate();
                return;
            }
            if (!termsAgree) {
                alert('이용약관 동의를 해주세요');
                return;
            }
        }
        if (joinUserData.password !== joinUserData.password_confirm) {
            alert('비밀번호를 한번만 확인해주세요');
            return;
        }
    };

    return { handleJoinButtonClick };
};

export const useVerificationAction = (phoneNumber: string) => {
    // 전화번호 요청을 보냈는가?
    const { value: isVerification, setValue: setIsVerification } = useBooleanState(false);
    // 전화번호 전송 활성화 비활성화
    const { value: isButtonDisabled, setValue: setIsButtonDisabled } = useBooleanState(false);
    const { requestVerificationMutate } = useVerificationMutation(phoneNumber);

    const handleVerificationButtonClick = () => {
        requestVerificationMutate();
        setIsButtonDisabled(true);
        setIsVerification(true);

        // 5초뒤 비활성화를 풀어줌
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 7000);
    };

    return { handleVerificationButtonClick, isButtonDisabled, isVerification };
};

export const useTimer = () => {
    const [timerTime, setTimerTime] = useState(0);

    const startTimer = () => {
        setTimerTime(300); // 5분
    };

    return { startTimer, timerTime, setTimerTime };
};

export const useInput = () => {
    const [joinUserData, setJoinUserData] = useState<PostJoinAuthReq>({
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
