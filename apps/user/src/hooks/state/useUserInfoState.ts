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

export const useUserInfoState = () => {
    const [user, setUser] = useRecoilState(userAtomState);

    return { user, setUser };
};
