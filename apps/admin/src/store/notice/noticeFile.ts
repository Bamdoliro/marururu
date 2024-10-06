import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const noticeFileAtomState = atom<File[] | null>({
  key: 'notice-file',
  default: null,
});

const visibleNoticeFileAtomState = atom<File | null>({
  key: 'visible-notice-file',
  default: null,
});

export const useVisibleNoticeFileStore = () => useRecoilState(visibleNoticeFileAtomState);
export const useVisibleNoticeFileValueStore = () =>
  useRecoilState(visibleNoticeFileAtomState);
export const useSetVisibleNoticeFileStore = () =>
  useRecoilState(visibleNoticeFileAtomState);

export const useNoticeFileStore = () => useRecoilState(noticeFileAtomState);
export const useNoticeFileValueStore = () => useRecoilValue(noticeFileAtomState);
export const useSetNoticeFileStore = () => useSetRecoilState(noticeFileAtomState);
