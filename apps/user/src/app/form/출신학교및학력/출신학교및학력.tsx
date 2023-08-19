import { FindSchoolModal, FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { ButtonInput, Input, RadioGroup } from '@maru/ui';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import { useCTAButton, useInput } from './출신학교및학력.hooks';

const 출신학교및학력 = () => {
    const overlay = useOverlay();
    const form = useFormValueStore();
    const { handle출신학교및학력DataChange } = useInput();
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();

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
                <div></div>
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
                <div></div>
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
                <ButtonInput
                    name="schoolLocation"
                    label="지역"
                    value={form.education.schoolLocation}
                    buttonText="검색"
                    onClick={() => {}}
                    placeholder="도로명 주소"
                    readOnly
                    isError={form.education.schoolLocation.length > 20}
                    errorMessage="20자여야 합니다."
                />
                <Input
                    name="schoolCode"
                    label="학교 나이스번호"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                    value={form.education.schoolCode}
                    onChange={handle출신학교및학력DataChange}
                    isError={form.education.schoolCode.length > 10}
                    errorMessage="10자여야 합니다."
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 48px;
`;
