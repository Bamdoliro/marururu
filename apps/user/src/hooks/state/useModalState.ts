import { ReactNode } from 'react';
import { useRecoilState, atom } from 'recoil';

const modalAtomState = atom<ReactNode>({
    key: 'modal',
    default: null,
});

export const useModalState = () => {
    const [modal, setModal] = useRecoilState(modalAtomState);

    return { modal, setModal };
};
