import { useOutsideClick } from '@maru/hooks';
import { flex } from '@maru/utils';
import { Dispatch, SetStateAction } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import styled from 'styled-components';
import { ParentInfo } from '../../../app/form/보호자정보/보호자정보.hooks';

interface PropsType {
    setParentInfo: Dispatch<SetStateAction<ParentInfo>>;
    closeModal: () => void;
}

const FindAddressModal = ({ closeModal, setParentInfo }: PropsType) => {
    const findAddressModalRef = useOutsideClick(closeModal);

    const handleCompleteFindAddress = ({ address, zonecode }: Address) => {
        setParentInfo((prev) => ({ ...prev, address, zoneCode: zonecode }));
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
