import { atom, useRecoilState } from 'recoil';

const isSaveFormLoadedAtomState = atom({
  key: 'load-save-form-state',
  default: false,
});

export const useIsSaveFormLoadedStore = () => useRecoilState(isSaveFormLoadedAtomState);
