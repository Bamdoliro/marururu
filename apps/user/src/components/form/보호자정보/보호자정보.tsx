import { ButtonInput, Column, Input, Row } from '@maru/ui';
import styled from 'styled-components';

const 보호자정보 = () => {
    return (
        <Styled보호자정보>
            <Column gap={30}>
                <Row gap={48} alignItems="center">
                    <Input label="성명" width="100%" />
                    <Input label="전화번호" placeholder="- 없이 입력" width="100%" />
                </Row>
                <ButtonInput
                    label="주소"
                    buttonText="검색"
                    handleButtonClick={() => console.log('검색 입력 창입니다')}
                    width="100%"
                />
                <Input label="상세 주소" width="100%" />
            </Column>
        </Styled보호자정보>
    );
};

export default 보호자정보;

const Styled보호자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
