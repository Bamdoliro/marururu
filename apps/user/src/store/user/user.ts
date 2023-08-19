import { User } from '@/types/user/client';
import { atom, useRecoilState } from 'recoil';

const userAtomState = atom<User>({
    key: 'user',
    default: {
        email: '',
        authority: 'USER',
        name: '',
    },
});

const isSaveFormLoadedAtomState = atom({
    key: 'save form loaded state',
    default: false,
});

export const useUserStore = () => useRecoilState(userAtomState);
export const useIsSaveFormLoadedStore = () => useRecoilState(isSaveFormLoadedAtomState);
