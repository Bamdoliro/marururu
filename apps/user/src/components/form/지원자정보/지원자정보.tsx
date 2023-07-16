import { Column, Input, Row, RadioGroup, Button } from '@maru/ui';
import { flex } from '@maru/utils';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import ProfileUpload from './ProfileUpload/ProfileUpload';
import { FormLayout } from '@/layouts';
import styled from 'styled-components';

interface PropsType {
    onNext: () => void;
}

const 지원자정보 = ({ onNext }: PropsType) => {
    return (
        <FormLayout title="지원자 정보">
            <Styled지원자정보>
                <Row width="100%" justifyContent="space-between">
                    <ProfileUpload />
                    <Column gap={30} width={492}>
                        <Input label="성명" width="100%" />
                        <Row gap={16} alignItems="flex-end">
                            <Dropdown label="생년월일" data={[]} placeholder="년" />
                            <Dropdown data={[]} placeholder="월" />
                            <Dropdown data={[]} placeholder="일" />
                        </Row>
                        <Row gap={40} alignItems="flex-end">
                            <RadioGroup label="성별" name="gender" list={['남자', '여자']} />
                        </Row>
                        <Input label="전화번호" placeholder="- 없이 입력해주세요" width="100%" />
                    </Column>
                </Row>
            </Styled지원자정보>
            <FormControllerBar>
                <Button width={150} onClick={onNext}>
                    다음
                </Button>
            </FormControllerBar>
        </FormLayout>
    );
};

export default 지원자정보;

const Styled지원자정보 = styled.div`
    width: 100%;
    height: 100%;
`;

const FormControllerBar = styled.div`
    ${flex({ justifyContent: 'flex-end' })}
    width: 100%;
    margin-top: 60px;
`;
