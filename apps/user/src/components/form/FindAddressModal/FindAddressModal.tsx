import { useOutsideClick } from '@maru/hooks';
import { flex } from '@maru/utils';
import { Dispatch, SetStateAction } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { ParentInfo } from '@/types/form/client';
import styled from 'styled-components';

interface PropsType {
    isOpen: boolean;
    onClose: () => void;
    setParentInfo: Dispatch<SetStateAction<ParentInfo>>;
}

const FindAddressModal = ({ isOpen, onClose, setParentInfo }: PropsType) => {
    const findAddressModalRef = useOutsideClick(onClose);

    const handleCompleteFindAddress = ({ address, zonecode }: Address) => {
        setParentInfo((prev) => ({ ...prev, address, zoneCode: zonecode }));
        onClose();
    };

    return (
        <BlurBackground isOpen={isOpen}>
            <StyledFindAddressModal ref={findAddressModalRef}>
                <DaumPostcode
                    onComplete={handleCompleteFindAddress}
                    style={{ width: '100%', height: '100%' }}
                />
            </StyledFindAddressModal>
        </BlurBackground>
    );
};

export default FindAddressModal;

const BlurBackground = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const StyledFindAddressModal = styled.div`
    width: 500px;
    height: 500px;
`;
