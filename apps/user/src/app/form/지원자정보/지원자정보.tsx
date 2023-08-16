import { FormController, ProfileUploader } from '@/components/form';
import { FormLayout } from '@/layouts';
import { Column, Dropdown, Input, RadioGroup, Row } from '@maru/ui';
import styled from 'styled-components';
import { useUserInfoDateState, useUserInfoState } from '../../../store/form/지원자정보.state';
import { useCTAButton, useInput } from './지원자정보.hooks';

const 지원자정보 = () => {
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
                            value={userInfo.name}
                            onChange={handleUserInfoDataChange}
                            name="name"
                            width="100%"
                        />
                        <Row gap={16} alignItems="flex-end">
                            <Dropdown
                                label="생년월일"
                                onChange={(data: string, name: string) =>
                                    setDate((prev) => ({ ...prev, [name]: data }))
                                }
                                value={date.year}
                                name="year"
                                data={['2006', '2007']}
                                placeholder="년"
                            />
                            <Dropdown
                                onChange={(data: string, name: string) =>
                                    setDate((prev) => ({ ...prev, [name]: data }))
                                }
                                value={date.month}
                                name="month"
                                data={['1']}
                                placeholder="월"
                            />
                            <Dropdown
                                onChange={(data: string, name: string) =>
                                    setDate((prev) => ({ ...prev, [name]: data }))
                                }
                                value={date.day}
                                name="day"
                                data={['2']}
                                placeholder="일"
                            />
                        </Row>
                        <Row gap={40} alignItems="flex-end">
                            <RadioGroup
                                label="성별"
                                value={userInfo.gender}
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
                            value={userInfo.phoneNumber}
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
