import { FormController, ProfileUploader } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { Column, Input, RadioGroup, Row } from '@maru/ui';
import { useCTAButton, useInput } from './지원자정보.hooks';

const 지원자정보 = () => {
  const form = useFormValueStore();
  const { handle지원자정보Change } = useInput();
  const { handleMoveNextStep } = useCTAButton();

  return (
    <FormLayout title="지원자 정보">
      <Row width="100%" justifyContent="space-between">
        <ProfileUploader />
        <Column gap={30} width={492}>
          <Input
            label="성명"
            value={form.applicant.name}
            onChange={handle지원자정보Change}
            name="name"
            placeholder="예) 홍길동"
            width="100%"
            isError={form.applicant.name.length > 20}
            errorMessage="20자 이하여야 합니다."
            readOnly
          />
          <Input
            label="생년월일"
            value={form.applicant.birthday}
            onChange={handle지원자정보Change}
            name="birthday"
            placeholder="예) 20061103"
            width="100%"
          />
          <Row gap={40} alignItems="flex-end">
            <RadioGroup
              label="성별"
              value={form.applicant.gender}
              onChange={handle지원자정보Change}
              name="gender"
              items={[
                { label: '남자', value: 'MALE' },
                { label: '여자', value: 'FEMALE' },
              ]}
            />
          </Row>
          <Input
            label="전화번호"
            value={form.applicant.phoneNumber}
            onChange={handle지원자정보Change}
            name="phoneNumber"
            placeholder="- 없이 입력해주세요."
            width="100%"
            isError={
              !!form.applicant.phoneNumber && form.applicant.phoneNumber.length !== 11
            }
            errorMessage="11글자여야 합니다"
            readOnly
          />
        </Column>
      </Row>
      <FormController onNext={handleMoveNextStep} step="지원자정보" />
    </FormLayout>
  );
};

export default 지원자정보;
