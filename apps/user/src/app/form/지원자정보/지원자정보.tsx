import type { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { FormController, ProfileUploader } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { Column, Input, RadioGroup, Row } from '@maru/ui';
import { useCTAButton, useInput } from './지원자정보.hooks';
import { Storage } from '@/apis/storage/storage';

const 지원자정보 = () => {
  const form = useFormValueStore();
  const { handle지원자정보Change } = useInput();
  const { handleMoveNextStep } = useCTAButton();
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isBirthdayError, setIsBirthdayError] = useState(false);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const [isPhotoError, setIsPhotoError] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedImage = Storage.getLocalItem('downloadUrl');

    if (storedImage) {
      setPreviewUrl(storedImage);
      setIsPhotoUploaded(true);
      setIsPhotoError(false);
    } else {
      setIsPhotoUploaded(false);
      setIsPhotoError(true);
    }
  }, []);

  const validateBirthday = (birthday: string) => birthday.length === 10;

  useEffect(() => {
    setIsBirthdayError(!validateBirthday(form.applicant.birthday));
  }, [form.applicant.birthday]);

  const handleNextClick = () => {
    setIsNextClicked(true);
    const birthdayValid = validateBirthday(form.applicant.birthday);
    const photoValid = isPhotoUploaded;

    setIsPhotoError(!photoValid);
    setIsBirthdayError(!birthdayValid);

    if (birthdayValid && photoValid) {
      handleMoveNextStep();
    }
  };

  const handleBirthdayChange = (e: ChangeEvent<HTMLInputElement>) => {
    handle지원자정보Change(e);
  };

  const handlePhotoUpload = (success: boolean, url?: string) => {
    if (success && url) {
      setPreviewUrl(url);
      setIsPhotoUploaded(true);
      setIsPhotoError(false);
      Storage.setLocalItem('downloadUrl', url);
    } else {
      setIsPhotoUploaded(false);
      setIsPhotoError(true);
    }
  };

  return (
    <FormLayout title="지원자 정보">
      <Row width="100%" justifyContent="space-between">
        <Column gap={40} alignItems="center">
          <ProfileUploader
            isError={isNextClicked && isPhotoError}
            onPhotoUpload={handlePhotoUpload}
            previewUrl={previewUrl}
          />
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
            placeholder="예) 20061103"
            isError={isNextClicked && isBirthdayError}
            errorMessage={isBirthdayError ? '8자리를 입력해주세요.' : ''}
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
