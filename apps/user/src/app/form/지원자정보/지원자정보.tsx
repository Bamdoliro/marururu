import { FormLayout } from '@/layouts';
import { Column, Input, RadioGroup, Row, Dropdown } from '@maru/ui';
import { useInput, useCTAButton } from './지원자정보.hooks';
import { ProfileUpload, FormController } from '@/components/form';
import { useUserInfoProvider } from './지원자정보.provider';
import styled from 'styled-components';

const 지원자정보 = () => {
    const { userInfo, setUserInfo } = useUserInfoProvider();
    const { handleUserInfoDataChange, date, setDate } = useInput();
    const { handleNextButtonClick } = useCTAButton();

    return (
        <FormLayout title="지원자 정보">
            <Styled지원자정보>
                <Row width="100%" justifyContent="space-between">
                    <ProfileUpload userInfo={userInfo} setUserInfo={setUserInfo} />
                    <Column gap={30} width={492}>
                        <Input
                            label="성명"
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
                                onChange={handleUserInfoDataChange}
                                name="gender"
                                list={['남자', '여자']}
                            />
                        </Row>
                        <Input
                            label="전화번호"
                            onChange={handleUserInfoDataChange}
                            name="phoneNumber"
                            placeholder="- 없이 입력해주세요"
                            width="100%"
                        />
                    </Column>
                </Row>
            </Styled지원자정보>
            <FormController onNext={handleNextButtonClick} step="지원자 정보" />
        </FormLayout>
    );
};

export default 지원자정보;

const Styled지원자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
