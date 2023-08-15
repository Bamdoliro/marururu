import { ParentInfo } from '@/types/form/client';
import { atom, useRecoilState } from 'recoil';

const parentInfoAtomState = atom<ParentInfo>({
    key: 'parent-info',
    default: {
        name: null,
        phoneNumber: null,
        zoneCode: null,
        address: null,
        detailAddress: null,
    },
});

export const useParentInfoState = () => {
    const [parentInfo, setParentInfo] = useRecoilState(parentInfoAtomState);

    return { parentInfo, setParentInfo };
};
