import { joinUserParamsType } from '@/services/auth/api';
import { useJoinUserMutation, useRequestEmailMutation } from '@/services/auth/mutations';
import { ChangeEventHandler, useState } from 'react';

const useSignUp = () => {
    const [joinUserData, setJoinUserData] = useState<joinUserParamsType>({
        email: '',
        code: '',
        password: '',
        repassword: '',
    });

    /**
     * 이용약관 동의를 했으면 true
     * 이용약관 동의를 하지 않았으면 false
     */
    const [checkTermsAgree, setCheckTermsAgree] = useState(false);

    const handleJoinUserData: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setJoinUserData({ ...joinUserData, [name]: value });
    };

    const clickSignUp = () => {
        if (joinUserData.password === joinUserData.repassword) {
            if (checkTermsAgree == true) {
                joinUserMutate.mutate();
            } else {
                alert('이용약관 동의를 해주세요');
            }
        } else {
            alert('비밀번호를 한번만 확인해주세요');
        }
    };

    const joinUserMutate = useJoinUserMutation(joinUserData);
    const requestEmailMutate = useRequestEmailMutation(joinUserData);

    return {
        handleJoinUserData,
        requestEmailMutate,
        clickSignUp,
        setCheckTermsAgree,
    };
};

export default useSignUp;
