import { useJoinUserMutation, useRequestEmailMutation } from '@/services/auth/mutations';
import { ChangeEventHandler, SetStateAction, Dispatch, useState } from 'react';

interface joinUserDataType {
    email: string;
    code: string;
    password: string;
    repassword: string;
}

const useSignUp = () => {
    const [joinUserData, setJoinUserData] = useState<joinUserDataType>({
        email: '',
        code: '',
        password: '',
        repassword: '',
    });

    const { handleJoinUserData, handleJoinButtonClick, setCheckTermsAgree } = useJoin(
        joinUserData,
        setJoinUserData,
    );
    const { handleRequestEmailButtonClick } = useRequestEmail(joinUserData);

    return {
        handleJoinUserData,
        handleJoinButtonClick,
        handleRequestEmailButtonClick,
        setCheckTermsAgree,
    };
};

const useJoin = (
    joinUserData: joinUserDataType,
    setJoinUserData: Dispatch<SetStateAction<joinUserDataType>>,
) => {
    /**
     * 이용약관 동의를 했으면 true
     * 이용약관 동의를 하지 않았으면 false
     */
    const [checkTermsAgree, setCheckTermsAgree] = useState(false);

    const joinUserMutate = useJoinUserMutation(joinUserData);

    const handleJoinUserData: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setJoinUserData({ ...joinUserData, [name]: value });
    };

    const handleJoinButtonClick = () => {
        if (joinUserData.password === joinUserData.repassword) {
            if (checkTermsAgree === true) {
                joinUserMutate.mutate();
            } else {
                alert('이용약관 동의를 해주세요');
            }
        } else {
            alert('비밀번호를 한번만 확인해주세요');
        }
    };

    return {
        handleJoinUserData,
        handleJoinButtonClick,
        setCheckTermsAgree,
    };
};

const useRequestEmail = (joinUserData: joinUserDataType) => {
    const requestEmailMutate = useRequestEmailMutation(joinUserData);
    const handleRequestEmailButtonClick = () => {
        requestEmailMutate.mutate();
    };

    return { handleRequestEmailButtonClick };
};

export default useSignUp;
