import { useUserInfoQuery } from '@/services/user/queries';
import { useUserStore } from '@/store';
import { useEffect } from 'react';

const useUser = () => {
    const [user, setUser] = useUserStore();
    const { data: userInfoData } = useUserInfoQuery();

    useEffect(() => {
        if (userInfoData) setUser(userInfoData);
    }, [setUser, userInfoData]);

    return { user, isLoggedIn: !!userInfoData };
};

export default useUser;
