import { ButtonInput, Column, Input, Row } from '@maru/ui';
import { useState } from 'react';
import FindAddressModal from './FindAddressModal/FindAddressModal';
import styled from 'styled-components';
import FormController from '../FormController/FormController';
import { FormLayout } from '@/layouts';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const 보호자정보 = ({ onPrevious, onNext }: PropsType) => {
    const [isOpenFindAddressModal, setIsOpenFindAddressModal] = useState(false);
    const [address, setAddress] = useState('');

    const openFindAddressModal = () => {
        setIsOpenFindAddressModal(true);
    };

    return (
        <FormLayout title="보호자 정보">
            <Styled보호자정보>
                <Column gap={30}>
                    <Row gap={48} alignItems="center">
                        <Input label="성명" width="100%" />
                        <Input label="전화번호" placeholder="- 없이 입력" width="100%" />
                    </Row>
                    <ButtonInput
                        label="주소"
                        buttonText="검색"
                        handleInputButtonClick={openFindAddressModal}
                        width="100%"
                        value={address}
                        readOnly
                    />
                    <Input label="상세 주소" width="100%" />
                </Column>
            </Styled보호자정보>
            <FormController onPrevious={onPrevious} onNext={onNext} step="보호자 정보" />
            {isOpenFindAddressModal && (
                <FindAddressModal
                    closeModal={() => setIsOpenFindAddressModal(false)}
                    setAddress={setAddress}
                />
            )}
        </FormLayout>
    );
};

export default 보호자정보;

const Styled보호자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
