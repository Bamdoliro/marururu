import React, { useEffect, useState } from 'react';
import { FindSchoolModal, FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore, useSetFormStore } from '@/store';
import { ButtonInput, Input, RadioGroup, Row } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import { useCTAButton, useInput } from './출신학교및학력.hooks';

interface Props {
  graduationType: string;
}

const 출신학교및학력 = () => {
  const overlay = useOverlay();
  const form = useFormValueStore();
  const setForm = useSetFormStore();
  const { handle출신학교및학력Change } = useInput();
  const { handleMoveNextStep, handleMovePreviousStep } = useCTAButton();

  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isSchoolNameError, setIsSchoolNameError] = useState(false);
  const [isSchoolAddressError, setIsSchoolAddressError] = useState(false);
  const [isSchoolLocationError, setIsSchoolLocationError] = useState(false);
  const [isSchoolCodeError, setIsSchoolCodeError] = useState(false);
  const [isTeacherPhoneNumberError, setIsTeacherPhoneNumberError] = useState(false);
  const [isTeacherNameError, setIsTeacherNameError] = useState(false);
  const [isTeacherMobilePhoneNumberError, setIsTeacherMobilePhoneNumberError] =
    useState(false);
  const [isGraduationYeareError, setIsGraduationYearError] = useState(false);

  const validateForm = () => {
    const {
      graduationType,
      schoolName,
      schoolAddress,
      schoolLocation,
      schoolCode,
      teacherPhoneNumber,
      teacherName,
      teacherMobilePhoneNumber,
      graduationYear,
    } = form.education;

    if (graduationType === 'QUALIFICATION_EXAMINATION') {
      return graduationYear.length === 4;
    } else {
      const schoolNameValid = (schoolName ?? '').length === null;
      const schoolAddressValid = (schoolAddress ?? '').length === null;
      const schoolLocationValid = (schoolLocation ?? '').length === null;
      const schoolCodeValid = (schoolCode ?? '').length === null;
      const teacherPhoneNumberValid = (teacherPhoneNumber ?? '').length === null;
      const teacherNameValid = (teacherName ?? '').length === null;
      const teacherMobilePhoneNumberValid =
        (teacherMobilePhoneNumber ?? '').length === null;
      const graduationYearValid = (graduationYear ?? '').length === 4;

      return (
        schoolNameValid &&
        schoolAddressValid &&
        schoolLocationValid &&
        schoolCodeValid &&
        teacherPhoneNumberValid &&
        teacherNameValid &&
        teacherMobilePhoneNumberValid &&
        graduationYearValid
      );
    }
  };

  useEffect(() => {
    if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
      setForm((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          schoolName: null,
          schoolAddress: null,
          schoolLocation: null,
          schoolCode: null,
          teacherPhoneNumber: null,
          teacherName: null,
          teacherMobilePhoneNumber: null,
        },
      }));
    }
  }, [form.education.graduationType, setForm]);

  const openFindSchoolModal = () => {
    overlay.open(({ isOpen, close }) => (
      <FindSchoolModal isOpen={isOpen} onClose={close} />
    ));
  };

  const handleNextClick = () => {
    setIsNextClicked(true);

    const isValid = validateForm();

    setIsSchoolNameError(
      (form.education.schoolName ?? '').length === 0 ||
        ((form.education.schoolName ?? '').length >= 25 &&
          (form.education.schoolName ?? '').length < 0)
    );
    setIsSchoolAddressError(
      (form.education.schoolAddress ?? '').length === 0 ||
        ((form.education.schoolAddress ?? '').length > 40 &&
          (form.education.schoolName ?? '').length < 0)
    );
    setIsSchoolLocationError(
      (form.education.schoolLocation ?? '').length === 0 ||
        ((form.education.schoolLocation ?? '').length > 20 &&
          (form.education.schoolName ?? '').length < 0)
    );
    setIsSchoolCodeError((form.education.schoolCode ?? '').length !== 7);
    setIsTeacherPhoneNumberError(
      (form.education.teacherPhoneNumber ?? '').length === 0 ||
        (form.education.teacherPhoneNumber ?? '').length !== 11
    );
    setIsTeacherNameError(
      (form.education.teacherName ?? '').length === 0 ||
        ((form.education.teacherName ?? '').length > 20 &&
          (form.education.schoolName ?? '').length < 0)
    );
    setIsTeacherMobilePhoneNumberError(
      (form.education.teacherMobilePhoneNumber ?? '').length !== 11
    );
    setIsGraduationYearError((form.education.graduationYear ?? '').length !== 4);

    if (isValid) {
      handleMoveNextStep();
    }
  };

  useEffect(() => {
    if (isNextClicked) {
      setIsSchoolNameError(
        (form.education.schoolName ?? '').length === 0 ||
          ((form.education.schoolName ?? '').length >= 25 &&
            (form.education.schoolName ?? '').length < 0)
      );
      setIsSchoolAddressError(
        (form.education.schoolAddress ?? '').length === 0 ||
          ((form.education.schoolAddress ?? '').length > 40 &&
            (form.education.schoolName ?? '').length < 0)
      );
      setIsSchoolLocationError(
        (form.education.schoolLocation ?? '').length === 0 ||
          ((form.education.schoolLocation ?? '').length > 20 &&
            (form.education.schoolName ?? '').length < 0)
      );
      setIsSchoolCodeError((form.education.schoolCode ?? '').length !== 7);
      setIsTeacherPhoneNumberError(
        (form.education.teacherPhoneNumber ?? '').length === 0 ||
          (form.education.teacherPhoneNumber ?? '').length !== 11
      );
      setIsTeacherNameError(
        (form.education.teacherName ?? '').length === 0 ||
          ((form.education.teacherName ?? '').length > 20 &&
            (form.education.schoolName ?? '').length < 0)
      );
      setIsTeacherMobilePhoneNumberError(
        (form.education.teacherMobilePhoneNumber ?? '').length !== 11
      );
      setIsGraduationYearError((form.education.graduationYear ?? '').length !== 4);
    }
  }, [form, isNextClicked]);

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
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <ButtonInput
              name="schoolName"
              label="출신학교"
              value={form.education.schoolName ?? ''}
              buttonText="검색"
              onClick={openFindSchoolModal}
              placeholder="검색 버튼을 눌러 학교를 검색하세요."
              readOnly
              isError={isSchoolNameError}
              errorMessage=""
            />
          )}
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Input
              name="schoolAddress"
              label="도로명주소"
              placeholder="학교를 선택하면 자동완성됩니다."
              width="100%"
              readOnly
              value={form.education.schoolAddress ?? ''}
              onChange={handle출신학교및학력Change}
              isError={isSchoolAddressError}
              errorMessage=""
            />
          )}
        </Row>
        <Row gap={48} alignItems="center">
          <Input
            name="graduationYear"
            label={
              form.education.graduationType === 'QUALIFICATION_EXAMINATION'
                ? '합격연도'
                : '졸업연도'
            }
            placeholder="예) 2024"
            width={
              form.education.graduationType === 'QUALIFICATION_EXAMINATION'
                ? '50%'
                : '100%'
            }
            value={form.education.graduationYear}
            onChange={handle출신학교및학력Change}
            isError={isGraduationYeareError}
            errorMessage=""
          />
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Input
              name="schoolLocation"
              label="지역"
              placeholder="학교를 선택하면 자동완성됩니다."
              readOnly
              isError={isSchoolLocationError}
              errorMessage=""
              width="100%"
              value={form.education.schoolLocation ?? ''}
              onChange={handle출신학교및학력Change}
            />
          )}
        </Row>
        <Row gap={48} alignItems="center">
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Input
              name="schoolCode"
              label="표준 학교 코드"
              placeholder="학교를 선택하면 자동완성됩니다."
              readOnly
              width="100%"
              value={form.education.schoolCode ?? ''}
              onChange={handle출신학교및학력Change}
              isError={isSchoolCodeError}
              errorMessage=""
            />
          )}
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Input
              name="teacherPhoneNumber"
              label="학교 연락처"
              placeholder="학교의 교무실 연락처를 입력해주세요."
              width="100%"
              value={form.education.teacherPhoneNumber ?? ''}
              onChange={handle출신학교및학력Change}
              isError={isTeacherPhoneNumberError}
              errorMessage=""
            />
          )}
        </Row>
        <Row gap={48} alignItems="center">
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Input
              name="teacherName"
              label="작성 교사 이름"
              placeholder="예) 홍길동"
              width="100%"
              value={form.education.teacherName ?? ''}
              onChange={handle출신학교및학력Change}
              isError={isTeacherNameError}
              errorMessage=""
            />
          )}
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Input
              name="teacherMobilePhoneNumber"
              label="작성 교사 연락처"
              placeholder="- 없이 입력해 주세요"
              width="100%"
              value={form.education.teacherMobilePhoneNumber ?? ''}
              onChange={handle출신학교및학력Change}
              isError={isTeacherMobilePhoneNumberError}
              errorMessage=""
            />
          )}
        </Row>
      </Styled출신학교및학력>
      <StyledFormController graduationType={form.education.graduationType}>
        <FormController
          onPrevious={handleMovePreviousStep}
          onNext={handleNextClick}
          step="출신학교및학력"
        />
      </StyledFormController>
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

const StyledFormController = styled.div<Props>`
  margin-top: ${(props) =>
    props.graduationType === 'QUALIFICATION_EXAMINATION' ? '290.391px' : '0px'};
`;
