import { ParentInfo } from '@/types/form';
import { atom, useRecoilState } from 'recoil';

const parentInfoAtomState = atom<ParentInfo>({
    key: 'parent-info',
    default: {
        name: '',
        phoneNumber: '',
        zoneCode: '',
        address: '',
        detailAddress: '',
    },
});

export const useParentInfoProvider = () => {
    const [parentInfo, setParentInfo] = useRecoilState(parentInfoAtomState);

    return { parentInfo, setParentInfo };
};
