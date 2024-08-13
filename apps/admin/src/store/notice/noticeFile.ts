import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const noticeFileAtomState = atom<File | null>({
  key: 'notice-file',
  default: null,
});

export const useSecondScoreFileStore = () => useRecoilState(noticeFileAtomState);
export const useSecondScoreFileValueStore = () => useRecoilValue(noticeFileAtomState);
export const useSetSecondScoreFileStore = () => useSetRecoilState(noticeFileAtomState);
