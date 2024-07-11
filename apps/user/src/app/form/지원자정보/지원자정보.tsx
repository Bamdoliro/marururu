import type { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { FormController, ProfileUploader } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { Column, Input, RadioGroup, Row } from '@maru/ui';
import { useCTAButton, useInput } from './지원자정보.hooks';

const 지원자정보 = () => {
  const form = useFormValueStore();
  const { handle지원자정보Change } = useInput();
  const { handleMoveNextStep } = useCTAButton();

  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isBirthdayError, setIsBirthdayError] = useState(false);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const [isPhotoError, setIsPhotoError] = useState(false);

  useEffect(() => {
    const birthdayValid = form.applicant.birthday.length === 10;
    setIsBirthdayError(!birthdayValid);

    const photoValid = !!form.applicant.identificationPictureUri;
    setIsPhotoUploaded(photoValid);
    setIsPhotoError(!photoValid);
  }, [form.applicant.birthday, form.applicant.identificationPictureUri]);

  const validateForm = () => {
    const birthdayValid = form.applicant.birthday.length === 10;
    const photoValid = isPhotoUploaded;
    return birthdayValid && photoValid;
  };

  const handleNextClick = () => {
    setIsNextClicked(true);
    setIsPhotoError(!isPhotoUploaded);

    if (validateForm()) {
      handleMoveNextStep();
    } else {
      setIsBirthdayError(form.applicant.birthday.length !== 10);
    }
  };

  const handleBirthdayChange = (e: ChangeEvent<HTMLInputElement>) => {
    handle지원자정보Change(e);
    if (isNextClicked) {
      setIsBirthdayError(e.target.value.length !== 10);
    }
  };

  const handlePhotoUpload = (success: boolean) => {
    setIsPhotoUploaded(success);
    setIsPhotoError(!success);
  };

  return (
    <FormLayout title="지원자 정보">
      <Row width="100%" justifyContent="space-between">
        <Column gap={40} alignItems="center">
          <ProfileUploader isError={isPhotoError} onPhotoUpload={handlePhotoUpload} />
        </Column>
        <Column gap={30} width={492}>
          <Input
            label="성명"
            value={form.applicant.name}
            onChange={handle지원자정보Change}
            name="name"
            placeholder="예) 홍길동"
            width="100%"
            readOnly
          />
          <Input
            label="생년월일"
            value={form.applicant.birthday}
            onChange={handleBirthdayChange}
            name="birthday"
            placeholder="예) 2006-11-03"
            isError={isBirthdayError}
            errorMessage=""
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
            readOnly
          />
        </Column>
      </Row>
      <FormController onNext={handleNextClick} step="지원자정보" />
    </FormLayout>
  );
};

export default 지원자정보;
