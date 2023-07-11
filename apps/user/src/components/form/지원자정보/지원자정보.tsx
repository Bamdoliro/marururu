import styled from 'styled-components';
import ProfileUpload from './ProfileUpload';

const 지원자정보 = () => {
    return (
        <Styled지원자정보>
            <ProfileUpload />
        </Styled지원자정보>
    );
};

export default 지원자정보;

const Styled지원자정보 = styled.div`
    width: 100%;
    height: 100%;
`;
