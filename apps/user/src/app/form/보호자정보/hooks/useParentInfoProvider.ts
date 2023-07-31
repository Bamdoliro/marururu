import { atom, useRecoilState } from 'recoil';

export interface ParentInfo {
    name: string;
    phoneNumber: string;
    zoneCode: string;
    address: string;
    detailAddress: string;
}

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
