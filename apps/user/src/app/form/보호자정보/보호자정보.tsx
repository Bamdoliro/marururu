import { FindAddressModal, FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { ButtonInput, Column, Input, Row } from '@maru/ui';
import { useInput, useCTAButton } from './보호자정보.hooks';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import { useFormState } from '../form.state';

const 보호자정보 = () => {
    const overlay = useOverlay();
    const { form } = useFormState();
    const { handle보호자정보DataChange } = useInput();
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();

    const openFindAdressModal = () => {
        overlay.open(({ isOpen, close }) => <FindAddressModal isOpen={isOpen} onClose={close} />);
    };

    return (
        <FormLayout title="보호자 정보">
            <Styled보호자정보>
                <Column gap={30}>
                    <Row gap={48}>
                        <Input
                            name="name"
                            value={form.parent.name}
                            onChange={handle보호자정보DataChange}
                            label="성명"
                            width="100%"
                        />
                        <Input
                            name="phoneNumber"
                            value={form.parent.phoneNumber}
                            onChange={handle보호자정보DataChange}
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
                        value={form.parent.address}
                        readOnly
                    />
                    <Row gap={48}>
                        <Input
                            name="detailAddress"
                            value={form.parent.detailAddress}
                            onChange={handle보호자정보DataChange}
                            label="상세 주소"
                            width="100%"
                        />
                        <Input
                            name="zoneCode"
                            value={form.parent.zoneCode}
                            onChange={handle보호자정보DataChange}
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
