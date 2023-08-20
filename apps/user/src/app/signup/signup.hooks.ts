import { PostJoinAuthReq } from '@/types/auth/remote';
import { useJoinUserMutation, useRequestEmailMutation } from '@/services/auth/mutations';
import { ChangeEventHandler, useState } from 'react';
import { useBoolean } from '@maru/hooks';

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

export const useRequestEmailAction = (email: string) => {
    // 이메일 요청을 보냈는가?
    const { value: isRequestEmail, setValue: setIsRequestEmail } = useBoolean(false);
    // 이메일 전송 활성화 비활성화
    const { value: isButtonDisabled, setValue: setIsButtonDisabled } = useBoolean(false);
    const { requestEmailMutate } = useRequestEmailMutation(email);

    const handleRequestEmailButtonClick = () => {
        requestEmailMutate();
        setIsButtonDisabled(true);
        setIsRequestEmail(true);

        // 5초뒤 비활성화를 풀어줌
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 5000);
    };

    return { handleRequestEmailButtonClick, isButtonDisabled, isRequestEmail };
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
        email: '',
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
