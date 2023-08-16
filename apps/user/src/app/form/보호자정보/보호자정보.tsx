import { FindAddressModal, FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { ButtonInput, Column, Input, Row } from '@maru/ui';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import { useParentInfoState } from '../../../stores/form/보호자정보.state';
import { useCTAButton, useInput } from './보호자정보.hooks';

const 보호자정보 = () => {
    const overlay = useOverlay();
    const { parentInfo, setParentInfo } = useParentInfoState();
    const { handleParentInfoDataChange } = useInput();
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();

    const openFindAdressModal = () => {
        overlay.open(({ isOpen, close }) => (
            <FindAddressModal isOpen={isOpen} onClose={close} setParentInfo={setParentInfo} />
        ));
    };

    return (
        <FormLayout title="보호자 정보">
            <Styled보호자정보>
                <Column gap={30}>
                    <Row gap={48}>
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
                        onClick={openFindAdressModal}
                        width="100%"
                        value={parentInfo.address}
                        readOnly
                    />
                    <Row gap={48}>
                        <Input
                            name="detailAddress"
                            value={parentInfo.detailAddress}
                            onChange={handleParentInfoDataChange}
                            label="상세 주소"
                            width="100%"
                        />
                        <Input
                            name="zoneCode"
                            value={parentInfo.zoneCode}
                            onChange={handleParentInfoDataChange}
                            label="우편번호"
                            width="100%"
                            readOnly
                        />
                    </Row>
                </Column>
            </Styled보호자정보>
            <FormController
                onPrevious={handlePreviousButtonClick}
                onNext={handleNextButtonClick}
                step="보호자정보"
            />
        </FormLayout>
    );
};

export default 보호자정보;

const Styled보호자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
