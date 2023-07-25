import DaumPostcode from 'react-daum-postcode';
import { useOutsideClick } from '@maru/hooks';
import { SetStateAction, Dispatch } from 'react';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    setAddress: Dispatch<SetStateAction<string>>;
    closeModal: () => void;
}

const FindAddressModal = ({ closeModal, setAddress }: PropsType) => {
    const findAddressModalRef = useOutsideClick(closeModal);

    const handleCompleteFindAddress = ({ address }: { address: string }) => {
        setAddress(address);
        closeModal();
    };

    return (
        <Background>
            <StyledFindAddressModal ref={findAddressModalRef}>
                <DaumPostcode
                    onComplete={handleCompleteFindAddress}
                    style={{ width: '100%', height: '100%' }}
                />
            </StyledFindAddressModal>
        </Background>
    );
};

export default FindAddressModal;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const StyledFindAddressModal = styled.div`
    width: 500px;
    height: 500px;
`;
