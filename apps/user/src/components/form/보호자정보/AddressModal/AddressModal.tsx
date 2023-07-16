import DaumPostcode from 'react-daum-postcode';
import { useOutsideClick } from '@maru/hooks';
import styled from 'styled-components';
import { SetStateAction, Dispatch } from 'react';

interface PropsType {
    isOpenAddressModal: boolean;
    setAddress: Dispatch<SetStateAction<string>>;
    closeModal: () => void;
}

const AddressModal = ({ isOpenAddressModal, isClose, setAddress }: PropsType) => {
    const addressModalRef = useOutsideClick(isClose);

    const onComplete = ({ address }: { address: string }) => {
        setAddress(address);
        isClose();
    };

    return (
        <Background isOpen={isOpenAddressModal}>
            <StyledAddressModal ref={addressModalRef}>
                <DaumPostcode onComplete={onComplete} style={{ width: '100%', height: '100%' }} />
            </StyledAddressModal>
        </Background>
    );
};

export default AddressModal;

const Background = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const StyledAddressModal = styled.div`
    width: 500px;
    height: 500px;
`;
