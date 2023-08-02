import { ParentInfo } from '@/types/form/client';
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

export const useParentInfoState = () => {
    const [parentInfo, setParentInfo] = useRecoilState(parentInfoAtomState);

    return { parentInfo, setParentInfo };
};
