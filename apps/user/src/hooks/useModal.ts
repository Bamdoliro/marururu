import { ReactNode } from 'react';
import { useModalState } from './state/useModalState';

const useModal = () => {
    const { setModal } = useModalState();

    const openModal = (component: ReactNode) => {
        setModal(component);
    };

    const closeModal = () => {
        setModal(null);
    };

    return { openModal, closeModal };
};

export default useModal;
