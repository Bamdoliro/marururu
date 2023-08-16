import { FormController, ProfileUploader } from '@/components/form';
import { FormLayout } from '@/layouts';
import { Column, Input, RadioGroup, Row } from '@maru/ui';
import { useFormState } from '../form.state';
import { useCTAButton, useInput } from './지원자정보.hooks';
import { useUserInfoState, useUserInfoDateState } from './지원자정보.state';
import { DateBox } from '@/components/form';
import styled from 'styled-components';

const 지원자정보 = () => {
    const { form } = useFormState();
    const { userInfo, setUserInfo } = useUserInfoState();
    const { date, setDate } = useUserInfoDateState();
    const { handleUserInfoDataChange } = useInput();
    const { handleNextButtonClick } = useCTAButton();

    return (
        <FormLayout title="지원자 정보">
            <Styled지원자정보>
                <Row width="100%" justifyContent="space-between">
                    <ProfileUploader userInfo={userInfo} setUserInfo={setUserInfo} />
                    <Column gap={30} width={492}>
                        <Input
                            label="성명"
                            value={form.applicant?.name}
                            onChange={handleUserInfoDataChange}
                            name="name"
                            width="100%"
                        />
                        <DateBox form={form} date={date} setDate={setDate} />
                        <Row gap={40} alignItems="flex-end">
                            <RadioGroup
                                label="성별"
                                value={form.applicant?.gender}
                                onChange={handleUserInfoDataChange}
                                name="gender"
                                list={[
                                    { label: '남자', value: 'MALE' },
                                    { label: '여자', value: 'FEMALE' },
                                ]}
                            />
                        </Row>
                        <Input
                            label="전화번호"
                            value={form.applicant?.phoneNumber}
                            onChange={handleUserInfoDataChange}
                            name="phoneNumber"
                            placeholder="- 없이 입력해주세요"
                            width="100%"
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
