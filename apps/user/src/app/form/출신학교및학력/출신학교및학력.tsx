import { FindSchoolModal, FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import useModal from '@maru/hooks/src/useModal';
import { ButtonInput, Input, RadioGroup } from '@maru/ui';
import { styled } from 'styled-components';
import { useCTAButton, useInput } from './출신학교및학력.hooks';
import { useEducationInfoState } from './출신학교및학력.state';

const 출신학교및학력 = () => {
    const { educationInfo, setEducationInfo } = useEducationInfoState();
    const { isOpen, openModal, closeModal } = useModal();
    const { handleEducationInfoDataChange } = useInput();
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();

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
                    value={educationInfo.graduationType}
                    onChange={handleEducationInfoDataChange}
                />
                <div></div>
                <ButtonInput
                    name="schoolName"
                    label="출신학교"
                    value={educationInfo.schoolName}
                    buttonText="검색"
                    handleInputButtonClick={openModal}
                    placeholder="클릭하여 검색하기"
                    readOnly
                />
                <div></div>
                <Input
                    name="graduationYear"
                    label="졸업 년도, 합격 년도"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                    value={educationInfo.graduationYear}
                    onChange={handleEducationInfoDataChange}
                />
                <ButtonInput
                    name="schoolLocation"
                    label="지역"
                    value={educationInfo.schoolLocation}
                    buttonText="검색"
                    handleInputButtonClick={() => {}}
                    placeholder="도로명 주소"
                    readOnly
                />
                <Input
                    name="schoolCode"
                    label="학교 나이스번호"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                    value={educationInfo.schoolCode}
                    onChange={handleEducationInfoDataChange}
                />
                <Input
                    name="teacherPhoneNumber"
                    label="학교 연락처"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                    value={educationInfo.teacherPhoneNumber}
                    onChange={handleEducationInfoDataChange}
                />
                <Input
                    name="teacherName"
                    label="작성 교사 이름"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                    value={educationInfo.teacherName}
                    onChange={handleEducationInfoDataChange}
                />
                <Input
                    name="teacherMobilePhoneNumber"
                    label="작성 교사 연락처"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                    value={educationInfo.teacherMobilePhoneNumber}
                    onChange={handleEducationInfoDataChange}
                />
            </Styled출신학교및학력>
            <FormController
                onPrevious={handlePreviousButtonClick}
                onNext={handleNextButtonClick}
                step="출신학교및학력"
            />
            {isOpen && (
                <FindSchoolModal closeModal={closeModal} setEducationInfo={setEducationInfo} />
            )}
        </FormLayout>
    );
};

export default 출신학교및학력;

const Styled출신학교및학력 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 48px;
`;
