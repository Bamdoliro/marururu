import { DateBox, FormController, ProfileUploader } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { Column, Input, RadioGroup, Row } from '@maru/ui';
import styled from 'styled-components';
import { useCTAButton, useInput } from './지원자정보.hooks';

const 지원자정보 = () => {
    const form = useFormValueStore();
    const { handle지원자정보DataChange } = useInput();
    const { handleNextButtonClick } = useCTAButton();

    return (
        <FormLayout title="지원자 정보">
            <Styled지원자정보>
                <Row width="100%" justifyContent="space-between">
                    <ProfileUploader />
                    <Column gap={30} width={492}>
                        <Input
                            label="성명"
                            value={form.applicant.name}
                            onChange={handle지원자정보DataChange}
                            name="name"
                            width="100%"
                            isIncorrect={form.applicant.name.length > 20}
                            msg="20자 이하여야 합니다."
                        />
                        <DateBox />
                        <Row gap={40} alignItems="flex-end">
                            <RadioGroup
                                label="성별"
                                value={form.applicant.gender}
                                onChange={handle지원자정보DataChange}
                                name="gender"
                                list={[
                                    { label: '남자', value: 'MALE' },
                                    { label: '여자', value: 'FEMALE' },
                                ]}
                            />
                        </Row>
                        <Input
                            label="전화번호"
                            value={form.applicant.phoneNumber}
                            onChange={handle지원자정보DataChange}
                            name="phoneNumber"
                            placeholder="- 없이 입력해주세요"
                            width="100%"
                            isIncorrect={form.applicant.phoneNumber.length !== 11}
                            msg="11글자여야 합니다"
                        />
                    </Column>
                </Row>
            </Styled지원자정보>
            <FormController onNext={handleNextButtonClick} step="지원자정보" />
        </FormLayout>
    );
};

export default 지원자정보;

const Styled지원자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
