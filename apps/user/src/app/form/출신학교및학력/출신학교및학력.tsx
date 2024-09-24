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
  const [isTeacherPhoneNumberError, setIsTeacherPhoneNumberError] = useState('');
  const [isTeacherNameError, setIsTeacherNameError] = useState(false);
  const [isTeacherMobilePhoneNumberError, setIsTeacherMobilePhoneNumberError] =
    useState(false);
  const [isGraduationYearError, setIsGraduationYearError] = useState(false);
  const [isGraduationYearReadOnly, setIsGraduationYearReadOnly] = useState(false);

  const validateForm = () => {
    const {
      graduationType,
      schoolName,
      schoolCode,
      teacherPhoneNumber,
      teacherName,
      teacherMobilePhoneNumber,
      graduationYear,
    } = form.education;

    if (graduationType === 'QUALIFICATION_EXAMINATION') {
      return graduationYear?.trim().length === 4;
    } else {
      const schoolNameValid =
        (schoolName?.trim().length ?? 0) > 0 && (schoolName?.trim().length ?? 0) < 30;
      const schoolCodeValid = (schoolCode?.trim().length ?? 0) === 7;
      const teacherPhoneNumberValid =
        (teacherPhoneNumber?.trim().length ?? 0) >= 10 &&
        (teacherPhoneNumber?.trim().length ?? 0) <= 20;
      const teacherNameValid = (teacherName?.trim().length ?? 0) >= 2;
      const teacherMobilePhoneNumberValid =
        (teacherMobilePhoneNumber?.trim().length ?? 0) === 11;
      const graduationYearValid = (graduationYear?.trim().length ?? 0) === 4;

      return (
        schoolNameValid &&
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
          graduationYear: form.education.graduationYear,
        },
      }));
      setIsGraduationYearReadOnly(false);
    } else if (form.education.graduationType === 'EXPECTED') {
      setForm((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          graduationYear: '2025',
        },
      }));
      setIsGraduationYearReadOnly(true);
    } else if (form.education.graduationType === 'GRADUATED') {
      setForm((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          graduationYear: form.education.graduationYear,
        },
      }));
      setIsGraduationYearReadOnly(false);
    }
  }, [form.education.graduationType, form.education.graduationYear, setForm]);

  const openFindSchoolModal = () => {
    overlay.open(({ isOpen, close }) => (
      <FindSchoolModal isOpen={isOpen} onClose={close} />
    ));
  };

  const handleNextClick = () => {
    setIsNextClicked(true);

    const isValid = validateForm();

    setIsSchoolNameError(
      form.education.graduationType !== 'QUALIFICATION_EXAMINATION' &&
        ((form.education.schoolName?.trim().length ?? 0) === 0 ||
          (form.education.schoolName?.trim().length ?? 0) >= 30)
    );
    const teacherPhoneNumberError =
      form.education.graduationType !== 'QUALIFICATION_EXAMINATION' &&
      ((form.education.teacherPhoneNumber?.trim().length ?? 0) < 10
        ? '10자 이상 입력해주세요.'
        : (form.education.teacherPhoneNumber?.trim().length ?? 0) > 20
        ? '20자 이하로 입력해주세요.'
        : '');
    setIsTeacherPhoneNumberError(teacherPhoneNumberError || '');
    setIsTeacherNameError(
      form.education.graduationType !== 'QUALIFICATION_EXAMINATION' &&
        (form.education.teacherName?.trim().length ?? 0) < 2
    );
    setIsTeacherMobilePhoneNumberError(
      form.education.graduationType !== 'QUALIFICATION_EXAMINATION' &&
        (form.education.teacherMobilePhoneNumber?.trim().length ?? 0) !== 11
    );
    setIsGraduationYearError((form.education.graduationYear?.trim().length ?? 0) !== 4);

    if (isValid) {
      handleMoveNextStep();
    }
  };

  useEffect(() => {
    if (isNextClicked) {
      setIsSchoolNameError(
        (form.education.graduationType !== 'QUALIFICATION_EXAMINATION' &&
          (form.education.schoolName?.trim().length ?? 0) === 0) ||
          (form.education.schoolName?.trim().length ?? 0) >= 30
      );
      const teacherPhoneNumberError =
        form.education.graduationType !== 'QUALIFICATION_EXAMINATION' &&
        ((form.education.teacherPhoneNumber?.trim().length ?? 0) < 10
          ? '10자 이상 입력해주세요.'
          : (form.education.teacherPhoneNumber?.trim().length ?? 0) > 20
          ? '20자 이하로 입력해주세요.'
          : '');
      setIsTeacherPhoneNumberError(teacherPhoneNumberError || '');
      setIsTeacherNameError(
        form.education.graduationType !== 'QUALIFICATION_EXAMINATION' &&
          (form.education.teacherName?.trim().length ?? 0) < 2
      );
      setIsTeacherMobilePhoneNumberError(
        form.education.graduationType !== 'QUALIFICATION_EXAMINATION' &&
          (form.education.teacherMobilePhoneNumber?.trim().length ?? 0) !== 11
      );
      setIsGraduationYearError((form.education.graduationYear?.trim().length ?? 0) !== 4);
    }
  }, [
    form.education.schoolName,
    form.education.schoolCode,
    form.education.teacherPhoneNumber,
    form.education.teacherName,
    form.education.teacherMobilePhoneNumber,
    form.education.graduationYear,
    form.education.graduationType,
    isNextClicked,
  ]);

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
              isError={isNextClicked && isSchoolNameError}
              errorMessage={
                isNextClicked && isSchoolNameError ? '출신 학교를 입력해주세요.' : ''
              }
              enabled={true}
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
            />
          )}
        </Row>
        <Row gap={48} alignItems="center">
          <Input
            name="graduationYear"
            label={
              form.education.graduationType === 'QUALIFICATION_EXAMINATION'
                ? '합격연도'
                : '졸업(예정)연도'
            }
            placeholder="예) 2024"
            width={
              form.education.graduationType === 'QUALIFICATION_EXAMINATION'
                ? '50%'
                : '100%'
            }
            value={form.education.graduationYear}
            onChange={handle출신학교및학력Change}
            isError={isNextClicked && isGraduationYearError}
            errorMessage={
              isNextClicked && isGraduationYearError
                ? '졸업 연도, 합격 연도를 입력해주세요.'
                : ''
            }
            readOnly={isGraduationYearReadOnly}
          />
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Input
              name="schoolLocation"
              label="지역"
              placeholder="학교를 선택하면 자동완성됩니다."
              readOnly
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
            />
          )}
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Input
              name="teacherPhoneNumber"
              label="학교 대표 연락처"
              placeholder="학교의 교무실 연락처를 입력해주세요."
              width="100%"
              value={form.education.teacherPhoneNumber ?? ''}
              onChange={handle출신학교및학력Change}
              isError={isNextClicked && !!isTeacherPhoneNumberError}
              errorMessage={
                isNextClicked && isTeacherPhoneNumberError
                  ? isTeacherPhoneNumberError
                  : ''
              }
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
              isError={isNextClicked && isTeacherNameError}
              errorMessage={
                isNextClicked && isTeacherNameError
                  ? '작성 교사 이름을 입력해주세요.'
                  : ''
              }
            />
          )}
          {form.education.graduationType !== 'QUALIFICATION_EXAMINATION' && (
            <Input
              name="teacherMobilePhoneNumber"
              label="작성 교사 연락처(휴대전화)"
              placeholder="- 없이 입력해 주세요"
              width="100%"
              value={form.education.teacherMobilePhoneNumber ?? ''}
              onChange={handle출신학교및학력Change}
              isError={isNextClicked && isTeacherMobilePhoneNumberError}
              errorMessage={
                isNextClicked && isTeacherMobilePhoneNumberError
                  ? '11자리를 입력해주세요.'
                  : ''
              }
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
