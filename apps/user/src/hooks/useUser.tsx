import { useUserQuery } from '@/services/user/queries';
import { useUserStore } from '@/store';
import { useEffect } from 'react';

const useUser = () => {
  const [user, setUser] = useUserStore();
  const { data: userData } = useUserQuery().data ?? {};

  useEffect(() => {
    if (userData) setUser(userData);
  }, [setUser, userData]);

  return { userData: user, isLoggedIn: !!userData };
};

export default useUser;
