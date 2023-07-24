import { Join } from '@/services/auth/api';
import { useJoinUserMutation, useRequestEmailMutation } from '@/services/auth/mutations';
import { ChangeEventHandler, useState } from 'react';

export const useJoin = (joinUserData: Join, termsAgree: boolean) => {
    const joinUserMutation = useJoinUserMutation(joinUserData);

    const handleJoinButtonClick = () => {
        if (joinUserData.password === joinUserData.password_confirm) {
            if (termsAgree) {
                joinUserMutation.mutate();
            } else {
                alert('이용약관 동의를 해주세요');
            }
        } else {
            alert('비밀번호를 한번만 확인해주세요');
        }
    };

    return { handleJoinButtonClick };
};

export const useRequestEmail = (email: string) => {
    const requestEmailMutation = useRequestEmailMutation(email);

    const handleRequestEmailButtonClick = () => {
        requestEmailMutation.mutate();
    };

    return { handleRequestEmailButtonClick };
};

export const useInput = () => {
    const [joinUserData, setJoinUserData] = useState<Join>({
        email: '',
        code: '',
        password: '',
        password_confirm: '',
    });

    const handleJoinUserDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setJoinUserData({ ...joinUserData, [name]: value });
    };

    return { joinUserData, handleJoinUserDataChange };
};
