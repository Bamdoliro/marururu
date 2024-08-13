import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const noticeFileAtomState = atom<File | null>({
  key: 'notice-file',
  default: null,
});

export const useNoticeFileStore = () => useRecoilState(noticeFileAtomState);
export const useNoticeFileValueStore = () => useRecoilValue(noticeFileAtomState);
export const useSetNoticeFileStore = () => useSetRecoilState(noticeFileAtomState);
