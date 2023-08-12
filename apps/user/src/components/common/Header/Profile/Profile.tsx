import { useLogoutUserMutation } from '@/services/auth/mutations';
import { useBoolean, useOutsideClick } from '@maru/hooks';
import { IconArrowDropdown } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    name: string;
}

const Profile = ({ name }: PropsType) => {
    const { value: isMenuOpen, toggle: toggleMenuOpen, setFalse: closeMenu } = useBoolean();

    const menuListBoxRef = useOutsideClick(closeMenu);

    const { logoutUserMutate } = useLogoutUserMutation();

    const handleLogoutButtonClick = () => {
        logoutUserMutate();
    };

    return (
        <StyledProfile ref={menuListBoxRef}>
            <MenuButton onClick={toggleMenuOpen}>
                <Name>{name} 님</Name>
                <IconArrowDropdown color={color.gray600} width={24} height={24} />
            </MenuButton>
            {isMenuOpen && (
                <MenuListBox>
                    <MenuList>
                        <NameMenu>
                            <Name>{name}</Name>
                            <NickName>@happyhappyhappy</NickName>
                        </NameMenu>
                        <Menu>프로필</Menu>
                        <Menu>이어서 원서 작성하기</Menu>
                        <Menu onClick={handleLogoutButtonClick}>로그아웃</Menu>
                    </MenuList>
                </MenuListBox>
            )}
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'flex-end' })}
`;

const MenuButton = styled.button`
    ${flex({ alignItems: 'center' })}
    cursor: pointer;
`;

const Name = styled.p`
    ${font.H5};
    color: ${color.gray900};
    word-break: keep-all;
`;

const MenuListBox = styled.div`
    position: relative;
    display: flex;
    z-index: 2;
`;

const MenuList = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 10px;
    background-color: ${color.white};
    border-radius: 12px;
    border: 1px solid ${color.gray200};
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
    padding-bottom: 12px;
`;

const NameMenu = styled.div`
    ${flex({ alignItems: 'center' })}
    height: 72px;
    padding: 0px 24px;
    gap: 16px;
    border-bottom: 1px solid ${color.gray200};
`;

const NickName = styled.p`
    ${font.p3}
    color: ${color.gray600};
`;

const Menu = styled.button`
    ${font.p2}
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 48px;
    padding: 9px 24px;
    cursor: pointer;
`;
