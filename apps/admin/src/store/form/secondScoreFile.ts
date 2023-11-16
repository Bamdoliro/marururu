import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const secondScoreFileAtomState = atom<File | null>({
  key: 'second-score-file',
  default: null,
});

export const useSecondScoreFileStore = () => useRecoilState(secondScoreFileAtomState);
export const useSecondScoreFileValueStore = () =>
  useRecoilValue(secondScoreFileAtomState);
export const useSetSecondScoreFileStore = () =>
  useSetRecoilState(secondScoreFileAtomState);
