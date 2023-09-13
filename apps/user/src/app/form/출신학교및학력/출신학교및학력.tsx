import { FindSchoolModal, FormController } from '@/components/form';
import { SUBJECT_LIST, 검정고시_SUBJECT_LIST } from '@/constants/form/data';
import { FormLayout } from '@/layouts';
import { useFormValueStore, useSetSubjectListStore } from '@/store';
import { ButtonInput, Input, RadioGroup, Row } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useCTAButton, useInput } from './출신학교및학력.hooks';

const 출신학교및학력 = () => {
    const overlay = useOverlay();
    const form = useFormValueStore();
    const { handle출신학교및학력DataChange } = useInput();
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();
    const setSubjectList = useSetSubjectListStore();

    useEffect(() => {
        if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
            setSubjectList(검정고시_SUBJECT_LIST);
        } else {
            setSubjectList(SUBJECT_LIST);
        }
    }, [form.education.graduationType]);

    const openFindSchoolModal = () => {
        overlay.open(({ isOpen, close }) => <FindSchoolModal isOpen={isOpen} onClose={close} />);
    };

    return (
        <FormLayout title="출신학교 및 학력">
            <Styled출신학교및학력>
                <RadioGroup
                    label="졸업 구분"
                    name="graduationType"
                    list={[
                        { value: 'EXPECTED', label: '졸업 예정' },
                        { value: 'GRADUATED', label: '졸업' },
                        { value: 'QUALIFICATION_EXAMINATION', label: '고입 검정' },
                    ]}
                    value={form.education.graduationType}
                    onChange={handle출신학교및학력DataChange}
                />
                <ButtonInput
                    name="schoolName"
                    label="출신학교"
                    value={form.education.schoolName}
                    buttonText="검색"
                    onClick={openFindSchoolModal}
                    placeholder="클릭하여 검색하기"
                    readOnly
                    isError={form.education.schoolName.length > 20}
                    errorMessage="20자 이하여야 합니다."
                />
                <Row gap={48} alignItems="center">
                    <Input
                        name="graduationYear"
                        label="졸업 년도, 합격 년도"
                        placeholder="뭐시기 뭐시기"
                        width="100%"
                        value={form.education.graduationYear}
                        onChange={handle출신학교및학력DataChange}
                        isError={
                            !!form.education.graduationYear &&
                            form.education.graduationYear.length !== 4
                        }
                        errorMessage="4자여야 합니다."
                    />
                    <Input
                        name="schoolLocation"
                        label="지역"
                        placeholder="뭐시기 뭐시기"
                        isError={form.education.schoolLocation.length > 20}
                        errorMessage="20자여야 합니다."
                        width="100%"
                        value={form.education.schoolLocation}
                        onChange={handle출신학교및학력DataChange}
                    />
                </Row>
                <Row gap={48} alignItems="center">
                    <Input
                        name="schoolCode"
                        label="표준 학교 코드"
                        placeholder="뭐시기 뭐시기"
                        width="100%"
                        value={form.education.schoolCode}
                        onChange={handle출신학교및학력DataChange}
                        isError={
                            !!form.education.schoolCode && form.education.schoolCode.length !== 7
                        }
                        errorMessage="7자여야 합니다."
                    />
                    <Input
                        name="teacherPhoneNumber"
                        label="학교 연락처"
                        placeholder="뭐시기 뭐시기"
                        width="100%"
                        value={form.education.teacherPhoneNumber}
                        onChange={handle출신학교및학력DataChange}
                        isError={form.education.teacherPhoneNumber.length > 11}
                        errorMessage="11자 이하여야 합니다."
                    />
                </Row>
                <Row gap={48} alignItems="center">
                    <Input
                        name="teacherName"
                        label="작성 교사 이름"
                        placeholder="뭐시기 뭐시기"
                        width="100%"
                        value={form.education.teacherName}
                        onChange={handle출신학교및학력DataChange}
                        isError={form.education.teacherName.length > 20}
                        errorMessage="20자 이하여야 합니다."
                    />
                    <Input
                        name="teacherMobilePhoneNumber"
                        label="작성 교사 연락처"
                        placeholder="뭐시기 뭐시기"
                        width="100%"
                        value={form.education.teacherMobilePhoneNumber}
                        onChange={handle출신학교및학력DataChange}
                        isError={form.education.teacherMobilePhoneNumber.length > 11}
                        errorMessage="11자 이하여야 합니다."
                    />
                </Row>
            </Styled출신학교및학력>
            <FormController
                onPrevious={handlePreviousButtonClick}
                onNext={handleNextButtonClick}
                step="출신학교및학력"
            />
        </FormLayout>
    );
};

export default 출신학교및학력;

const Styled출신학교및학력 = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap:30px;
    width: 100%;
    height: 100%;
`;
