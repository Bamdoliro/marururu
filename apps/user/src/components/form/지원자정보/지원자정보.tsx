import { Column, Input, Row, Radio } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import ProfileUpload from './ProfileUpload/ProfileUpload';
import styled from 'styled-components';

const 지원자정보 = () => {
    return (
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
                        <Radio name="gender" value="남자" label="성별" />
                        <Radio name="gender" value="여자" />
                    </Row>
                    <Input label="전화번호" placeholder="- 없이 입력해주세요" width="100%" />
                </Column>
            </Row>
        </Styled지원자정보>
    );
};

export default 지원자정보;

const Styled지원자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
