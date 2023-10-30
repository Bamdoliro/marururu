import { FindAddressModal, FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { ButtonInput, Column, Input, Row } from '@maru/ui';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import { useCTAButton, useInput } from './보호자정보.hooks';

const 보호자정보 = () => {
  const overlay = useOverlay();
  const form = useFormValueStore();
  const { handle보호자정보DataChange } = useInput();
  const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();

  const openFindAdressModal = () => {
    overlay.open(({ isOpen, close }) => (
      <FindAddressModal isOpen={isOpen} onClose={close} />
    ));
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
              placeholder="예) 홍길동"
              width="100%"
              isError={form.parent.name.length > 20}
              errorMessage="20자 이하여야 합니다."
            />
            <Input
              name="phoneNumber"
              value={form.parent.phoneNumber}
              onChange={handle보호자정보DataChange}
              label="전화번호"
              placeholder="- 없이 입력해주세요."
              width="100%"
              isError={!!form.parent.phoneNumber && form.parent.phoneNumber.length !== 11}
              errorMessage="11글자여야 합니다"
            />
          </Row>
          <Input
            label="보호자 관계"
            value={form.parent.relation}
            onChange={handle보호자정보DataChange}
            name="relation"
            placeholder="예) 부, 모"
            width="calc(50% - 24px)"
          />
          <ButtonInput
            label="주소"
            buttonText="검색"
            onClick={openFindAdressModal}
            width="100%"
            value={form.parent.address}
            placeholder="예) 부산광역시 강서구 가락대로 1393 봉림동 15 "
            readOnly
            isError={form.parent.address.length > 100}
            errorMessage="100자 이하여야 합니다."
          />
          <Row gap={48}>
            <Input
              name="detailAddress"
              value={form.parent.detailAddress}
              onChange={handle보호자정보DataChange}
              label="상세 주소"
              placeholder="상세 주소를 입력해주세요."
              width="100%"
              isError={form.parent.detailAddress.length > 100}
              errorMessage="100자 이하여야 합니다."
            />
            <Input
              name="zoneCode"
              value={form.parent.zoneCode}
              onChange={handle보호자정보DataChange}
              label="우편번호"
              placeholder="우편번호 5자리를 입력해주세요."
              width="100%"
              isError={!!form.parent.zoneCode && form.parent.zoneCode.length !== 5}
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
