import { useModalState } from '@/hooks/state/useModalState';

const GlobalModal = () => {
    const { modal } = useModalState();

    const provide = () => {
        if (!modal) return null;
        return modal;
    };

    return <>{provide()}</>;
};

export default GlobalModal;
