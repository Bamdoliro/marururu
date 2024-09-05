import type { ChangeEvent } from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
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

  const isUploadPictureStored = useMemo(
    () => Storage.getItem('isUploadPicture') === 'true',
    []
  );

  useEffect(() => {
    if (isUploadPictureStored) {
      setIsPhotoUploaded(true);
      setIsPhotoError(false);
    } else {
      setIsPhotoUploaded(false);
      setIsPhotoError(true);
    }
  }, [isUploadPictureStored]);

  const validateBirthday = useCallback((birthday: string) => {
    return birthday && birthday.length === 10;
  }, []);

  useEffect(() => {
    setIsBirthdayError(!validateBirthday(form.applicant.birthday));
  }, [form.applicant.birthday, validateBirthday]);

  const handleNextClick = useCallback(() => {
    setIsNextClicked(true);
    const birthdayValid = validateBirthday(form.applicant.birthday);
    const photoValid = isPhotoUploaded;

    setIsPhotoError(!photoValid);
    setIsBirthdayError(!birthdayValid);

    if (birthdayValid && photoValid) {
      handleMoveNextStep();
    }
  }, [form.applicant.birthday, isPhotoUploaded, handleMoveNextStep, validateBirthday]);

  const handleBirthdayChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handle지원자정보Change(e);
    },
    [handle지원자정보Change]
  );

  const handlePhotoUpload = useCallback((success: boolean, url?: string) => {
    if (success && url) {
      setIsPhotoUploaded(true);
      setIsPhotoError(false);
      Storage.setItem('isUploadPicture', 'true');
      Storage.setItem('downloadUrl', url);
    } else {
      setIsPhotoUploaded(false);
      setIsPhotoError(true);
    }
  }, []);

  const memoizedFormValues = useMemo(
    () => ({
      birthday: form.applicant.birthday,
      gender: form.applicant.gender,
    }),
    [form.applicant.birthday, form.applicant.gender]
  );

  return (
    <FormLayout title="지원자 정보">
      <Row width="100%" justifyContent="space-between">
        <Column gap={40} alignItems="center">
          <ProfileUploader
            isError={isNextClicked && isPhotoError}
            onPhotoUpload={handlePhotoUpload}
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
            value={memoizedFormValues.birthday}
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
              value={memoizedFormValues.gender}
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
