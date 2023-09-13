import { Admin } from '@/types/admin/client';
import { atom, useRecoilState } from 'recoil';

const adminAtomState = atom<Admin>({
    key: 'admin',
    default: {
        phoneNumber: '',
        authority: '',
        name: '',
    },
});

export const useAdminStore = () => useRecoilState(adminAtomState);
