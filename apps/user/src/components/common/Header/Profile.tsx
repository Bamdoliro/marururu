import DownArrowIcon from '../Icons/ArrowDropDown';
import { color, font } from '@maru/global-style';
import styled from 'styled-components';

interface PropsType {
    name: string;
}

const Profile = ({ name }: PropsType) => {
    return (
        <StyledProfile>
            <Name>{name} 님</Name>
            <DownArrowIcon />
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Name = styled.p`
    ${font.H5};
    color: ${color.gray900};
`;
