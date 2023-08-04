import { ReactNode } from 'react';
import { useModalState } from './state/useModalState';

const useModal = () => {
    const { setModal } = useModalState();

    const openModal = (modal: ReactNode) => {
        setModal(modal);
    };

    const closeModal = () => {
        setModal(null);
    };

    return { openModal, closeModal };
};

export default useModal;
