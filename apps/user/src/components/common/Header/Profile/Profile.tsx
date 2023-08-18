import { ROUTES } from '@/constants/common/constant';
import useUser from '@/hooks/useUser';
import { useLogoutUserMutation } from '@/services/auth/mutations';
import { useBoolean, useOutsideClick } from '@maru/hooks';
import { IconArrowDropdown } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Profile = () => {
    const router = useRouter();
    const { user } = useUser();
    const { value: isMenuOpen, toggle: toggleMenuOpen, setFalse: closeMenu } = useBoolean();
    const { logoutUserMutate } = useLogoutUserMutation();
    const menuListBoxRef = useOutsideClick(closeMenu);

    const handleLogoutButtonClick = () => {
        logoutUserMutate();
    };

    const handleGoFormPageButtonClick = () => {
        router.push(ROUTES.FORM);
    };

    return (
        <StyledProfile ref={menuListBoxRef}>
            <MenuButton onClick={toggleMenuOpen}>
                <Name>{user.name} 님</Name>
                <IconArrowDropdown color={color.gray600} width={24} height={24} />
            </MenuButton>
            {isMenuOpen && (
                <MenuListBox>
                    <MenuList>
                        <NameMenu>
                            <Name>{user.name}</Name>
                            <Email>@{user.email.split('@')[0]}</Email>
                        </NameMenu>
                        <MenuItem>프로필</MenuItem>
                        <MenuItem onClick={handleGoFormPageButtonClick}>
                            이어서 원서 작성하기
                        </MenuItem>
                        <MenuItem onClick={handleLogoutButtonClick}>로그아웃</MenuItem>
                    </MenuList>
                </MenuListBox>
            )}
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'flex-end' })}
    min-width: 240px;
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
    width: 100%;
    position: relative;
    display: flex;
    z-index: 2;
`;

const MenuList = styled.div`
    width: 100%;
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

const Email = styled.p`
    ${font.p3}
    color: ${color.gray600};
`;

const MenuItem = styled.button`
    ${font.p2}
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 48px;
    padding: 9px 24px;
    cursor: pointer;
`;
