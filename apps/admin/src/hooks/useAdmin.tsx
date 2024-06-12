import { useAdminQuery } from '@/services/user/queries';
import { useAdminStore } from '@/store';
import { useEffect } from 'react';

const useAdmin = () => {
  const [admin, setAdmin] = useAdminStore();
  const { data: adminData } = useAdminQuery();

  useEffect(() => {
    if (adminData) setAdmin(adminData);
  }, [setAdmin, adminData]);

  return { adminData: admin, isLoggedIn: !!adminData };
};

export default useAdmin;
