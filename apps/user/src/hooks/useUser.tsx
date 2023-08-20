import { useUserQuery } from '@/services/user/queries';
import { useEffect } from 'react';
import { useUserStore } from '@/store';

const useUser = () => {
    const [user, setUser] = useUserStore();
    const { data: userData } = useUserQuery();

    useEffect(() => {
        if (userData) setUser(userData);
    }, [setUser, userData]);

    return { userData: user, isLoggedIn: !!userData };
};

export default useUser;
