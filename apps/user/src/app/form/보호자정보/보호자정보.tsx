import { FormLayout } from '@/layouts';
import { ButtonInput, Column, Input, Row } from '@maru/ui';
import { useState } from 'react';
import useInput from './보호자정보.hooks';
import { FormController, FindAddressModal } from '@/components/form';
import styled from 'styled-components';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const 보호자정보 = ({ onPrevious, onNext }: PropsType) => {
    const [isOpenFindAddressModal, setIsOpenFindAddressModal] = useState(false);
    const { parentInfo, setParentInfo, handleParentInfoDataChange } = useInput();

    const openFindAddressModal = () => {
        setIsOpenFindAddressModal(true);
    };

    return (
        <FormLayout title="보호자 정보">
            <Styled보호자정보>
                <Column gap={30}>
                    <Row gap={48} alignItems="center">
                        <Input
                            name="name"
                            onChange={handleParentInfoDataChange}
                            label="성명"
                            width="100%"
                        />
                        <Input
                            name="phoneNumber"
                            onChange={handleParentInfoDataChange}
                            label="전화번호"
                            placeholder="- 없이 입력"
                            width="100%"
                        />
                    </Row>
                    <ButtonInput
                        label="주소"
                        buttonText="검색"
                        handleInputButtonClick={openFindAddressModal}
                        width="100%"
                        value={parentInfo.address}
                        readOnly
                    />
                    <Input
                        name="detailAddress"
                        onChange={handleParentInfoDataChange}
                        label="상세 주소"
                        width="100%"
                    />
                </Column>
            </Styled보호자정보>
            <FormController onPrevious={onPrevious} onNext={onNext} step="보호자 정보" />
            {isOpenFindAddressModal && (
                <FindAddressModal
                    closeModal={() => setIsOpenFindAddressModal(false)}
                    setParentInfo={setParentInfo}
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
