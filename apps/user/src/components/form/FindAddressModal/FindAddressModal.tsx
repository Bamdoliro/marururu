import { useSetFormStore } from '@/store';
import { useOutsideClick } from '@maru/hooks';
import DaumPostcode, { Address } from 'react-daum-postcode';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FindAddressModal = ({ isOpen, onClose }: Props) => {
  const setForm = useSetFormStore();
  const findAddressModalRef = useOutsideClick(onClose);

  const handleCompleteFindAddress = ({ address, zonecode }: Address) => {
    setForm((prev) => ({
      ...prev,
      parent: { ...prev.parent, address, zoneCode: zonecode },
    }));
    onClose();
  };

  return (
    <BlurBackground $isOpen={isOpen}>
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

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const StyledFindAddressModal = styled.div`
  width: 500px;
  height: 500px;
`;
