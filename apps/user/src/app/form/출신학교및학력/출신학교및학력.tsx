import { FindSchoolModal, FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { ButtonInput, Input, RadioGroup, Row } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import { useCTAButton, useInput } from './출신학교및학력.hooks';

const 출신학교및학력 = () => {
  const overlay = useOverlay();
  const form = useFormValueStore();
  const { handle출신학교및학력Change } = useInput();
  const { handleMoveNextStep, handleMovePreviousStep } = useCTAButton();

  const openFindSchoolModal = () => {
    overlay.open(({ isOpen, close }) => (
      <FindSchoolModal isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <FormLayout title="출신학교 및 학력">
      <Styled출신학교및학력>
        <RadioGroup
          label="졸업 구분"
          name="graduationType"
          items={[
            { value: 'EXPECTED', label: '졸업 예정' },
            { value: 'GRADUATED', label: '졸업' },
            { value: 'QUALIFICATION_EXAMINATION', label: '고입 검정' },
          ]}
          value={form.education.graduationType}
          onChange={handle출신학교및학력Change}
        />
        <Row gap={48} alignItems="center">
          <ButtonInput
            name="schoolName"
            label="출신학교"
            value={form.education.schoolName}
            buttonText="검색"
            onClick={openFindSchoolModal}
            placeholder="검색 버튼을 눌러 학교를 검색하세요."
            readOnly
            isError={form.education.schoolName.length > 20}
            errorMessage="20자 이하여야 합니다."
          />
          <Input
            name="schoolAddress"
            label="도로명주소"
            placeholder="학교를 선택하면 자동완성됩니다."
            width="100%"
            value={form.education.schoolAddress}
            onChange={handle출신학교및학력Change}
            isError={
              !!form.education.schoolAddress && form.education.schoolAddress.length > 40
            }
            errorMessage="40자 이하여야 합니다."
          />
        </Row>
        <Row gap={48} alignItems="center">
          <Input
            name="graduationYear"
            label="졸업 연도, 합격 연도"
            placeholder="예) 2024"
            width="100%"
            value={form.education.graduationYear}
            onChange={handle출신학교및학력Change}
            isError={
              !!form.education.graduationYear &&
              form.education.graduationYear.length !== 4
            }
            errorMessage="4자여야 합니다."
          />
          <Input
            name="schoolLocation"
            label="지역"
            placeholder="학교를 선택하면 자동완성됩니다."
            isError={form.education.schoolLocation.length > 20}
            errorMessage="20자여야 합니다."
            width="100%"
            value={form.education.schoolLocation}
            onChange={handle출신학교및학력Change}
          />
        </Row>
        <Row gap={48} alignItems="center">
          <Input
            name="schoolCode"
            label="표준 학교 코드"
            placeholder="학교를 선택하면 자동완성됩니다."
            width="100%"
            value={form.education.schoolCode}
            onChange={handle출신학교및학력Change}
            isError={
              !!form.education.schoolCode && form.education.schoolCode.length !== 7
            }
            errorMessage="7자여야 합니다."
          />
          <Input
            name="schoolPhoneNumber"
            label="학교 연락처"
            placeholder="학교의 교무실 연락처를 입력해주세요."
            width="100%"
            value={form.education.schoolPhoneNumber}
            onChange={handle출신학교및학력Change}
            isError={form.education.schoolPhoneNumber.length > 11}
            errorMessage="11자 이하여야 합니다."
          />
        </Row>
        <Row gap={48} alignItems="center">
          <Input
            name="teacherName"
            label="작성 교사 이름"
            placeholder="예) 홍길동"
            width="100%"
            value={form.education.teacherName}
            onChange={handle출신학교및학력Change}
            isError={form.education.teacherName.length > 20}
            errorMessage="20자 이하여야 합니다."
          />
          <Input
            name="teacherMobilePhoneNumber"
            label="작성 교사 연락처"
            placeholder="- 없이 입력해 주세요"
            width="100%"
            value={form.education.teacherMobilePhoneNumber}
            onChange={handle출신학교및학력Change}
            isError={form.education.teacherMobilePhoneNumber.length > 11}
            errorMessage="11자 이하여야 합니다."
          />
        </Row>
      </Styled출신학교및학력>
      <FormController
        onPrevious={handleMovePreviousStep}
        onNext={handleMoveNextStep}
        step="출신학교및학력"
      />
    </FormLayout>
  );
};

export default 출신학교및학력;

const Styled출신학교및학력 = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 30px;
  width: 100%;
  height: 100%;
`;
