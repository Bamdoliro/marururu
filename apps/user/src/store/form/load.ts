import { atom, useRecoilState } from 'recoil';

const isSaveFormLoadedAtomState = atom({
    key: 'load-form-state',
    default: false,
});

export const useIsSaveFormLoadedStore = () => useRecoilState(isSaveFormLoadedAtomState);
