import { Column, Input, Row, RadioGroup } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import ProfileUpload from './ProfileUpload/ProfileUpload';
import { FormLayout } from '@/layouts';
import FormController from '../FormController/FormController';
import { useInput } from './지원자정보.hooks';
import styled from 'styled-components';
import { useEffect } from 'react';

interface PropsType {
    onNext: () => void;
}

const 지원자정보 = ({ onNext }: PropsType) => {
    const { userInfo, handleUserInfoDataChange, date, setDate } = useInput();

    return (
        <FormLayout title="지원자 정보">
            <Styled지원자정보>
                <Row width="100%" justifyContent="space-between">
                    <ProfileUpload />
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
            <FormController onNext={onNext} step="지원자 정보" />
        </FormLayout>
    );
};

export default 지원자정보;

const Styled지원자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
