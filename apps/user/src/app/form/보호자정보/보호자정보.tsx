import { FindAddressModal, FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import useModal from '@maru/hooks/src/useModal';
import { ButtonInput, Column, Input, Row } from '@maru/ui';
import styled from 'styled-components';
import { useCTAButton, useInput } from './보호자정보.hooks';
import { useParentInfoState } from './보호자정보.state';

const 보호자정보 = () => {
    const { parentInfo, setParentInfo } = useParentInfoState();
    const { isOpen, openModal, closeModal } = useModal();
    const { handleParentInfoDataChange } = useInput();
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();

    return (
        <FormLayout title="보호자 정보">
            <Styled보호자정보>
                <Column gap={30}>
                    <Row gap={48} alignItems="center">
                        <Input
                            name="name"
                            value={parentInfo.name}
                            onChange={handleParentInfoDataChange}
                            label="성명"
                            width="100%"
                        />
                        <Input
                            name="phoneNumber"
                            value={parentInfo.phoneNumber}
                            onChange={handleParentInfoDataChange}
                            label="전화번호"
                            placeholder="- 없이 입력"
                            width="100%"
                        />
                    </Row>
                    <ButtonInput
                        label="주소"
                        buttonText="검색"
                        handleInputButtonClick={openModal}
                        width="100%"
                        value={parentInfo.address}
                        readOnly
                    />
                    <Input
                        name="detailAddress"
                        value={parentInfo.detailAddress}
                        onChange={handleParentInfoDataChange}
                        label="상세 주소"
                        width="100%"
                    />
                </Column>
            </Styled보호자정보>
            <FormController
                onPrevious={handlePreviousButtonClick}
                onNext={handleNextButtonClick}
                step="보호자정보"
            />
            {isOpen && <FindAddressModal closeModal={closeModal} setParentInfo={setParentInfo} />}
        </FormLayout>
    );
};

export default 보호자정보;

const Styled보호자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
