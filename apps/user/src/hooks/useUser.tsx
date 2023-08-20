import { useUserQuery } from '@/services/user/queries';
import { useUserStore } from '@/store';
import { useEffect } from 'react';

const useUser = () => {
    const [user, setUser] = useUserStore();
    const { data: userData } = useUserQuery();

    useEffect(() => {
        if (userData) setUser(userData);
    }, [setUser, userData]);

    return { userData: user, isLoggedIn: !!user };
};

export default useUser;
