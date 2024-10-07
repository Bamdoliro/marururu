import { TOKEN } from '@/constants/common/constant';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const accessTokenAtomState = atom<string | null>({
  key: TOKEN.ACCESS,
  default: null,
});

export const useAccessTokenStore = () => useRecoilState(accessTokenAtomState);
export const useAccessTokenValueStore = () => useRecoilValue(accessTokenAtomState);
export const useSetAccessTokenStore = () => useSetRecoilState(accessTokenAtomState);
