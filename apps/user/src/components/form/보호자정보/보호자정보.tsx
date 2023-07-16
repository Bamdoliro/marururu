import { ButtonInput, Column, Input, Row } from '@maru/ui';
import { useState } from 'react';
import styled from 'styled-components';
import AddressModal from './AddressModal/AddressModal';

const 보호자정보 = () => {
    const [isOpenAddressModal, setIsOpenAddressModal] = useState(false);

    const openAddressModal = () => {
        setIsOpenAddressModal(true);
    };

    return (
        <>
            <Styled보호자정보>
                <Column gap={30}>
                    <Row gap={48} alignItems="center">
                        <Input label="성명" width="100%" />
                        <Input label="전화번호" placeholder="- 없이 입력" width="100%" />
                    </Row>
                    <ButtonInput
                        label="주소"
                        buttonText="검색"
                        handleButtonClick={openAddressModal}
                        width="100%"
                    />
                    <Input label="상세 주소" width="100%" />
                </Column>
            </Styled보호자정보>
            <AddressModal
                isOpenAddressModal={isOpenAddressModal}
                isClose={() => setIsOpenAddressModal(false)}
            />
        </>
    );
};

export default 보호자정보;

const Styled보호자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
