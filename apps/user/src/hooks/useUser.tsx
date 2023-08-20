import { useUserInfoQuery } from '@/services/user/queries';
import { useEffect } from 'react';
import { useUserStore } from '@/store';

const useUser = () => {
    const [user, setUser] = useUserStore();
    const { data: userInfoData } = useUserInfoQuery();

    useEffect(() => {
        if (userInfoData) setUser(userInfoData);
    }, [setUser, userInfoData]);

    return { user, isLoggedIn: !!userInfoData };
};

export default useUser;
