import { IconArrowDropdown } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    name: string;
}

const Profile = ({ name }: PropsType) => {
    return (
        <StyledProfile>
            <Name>{name} 님</Name>
            <IconArrowDropdown width={24} height={24} />
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`
    ${flex({ alignItems: 'center' })}
    cursor: pointer;
`;

const Name = styled.p`
    ${font.H5};
    color: ${color.gray900};
`;
