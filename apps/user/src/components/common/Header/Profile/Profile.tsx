import { useUser } from '@/hooks';
import { useBooleanState, useOutsideClick } from '@maru/hooks';
import { IconArrowDropdown } from '@maru/icon';
import { color, font } from '@maru/design-token';
import { Loader, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useCTAButton, useLogoutAction } from './Profile.hooks';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { 제출_마감_날짜, 제출_시작_날짜 } from '@/constants/form/constant';
import { Suspense } from 'react';

dayjs.extend(isBetween);

const Profile = () => {
  const { userData } = useUser();
  const {
    value: isMenuOpen,
    toggle: toggleMenuOpen,
    setFalse: closeMenu,
  } = useBooleanState();
  const { handleMoveFormPage, handleChangePassword } = useCTAButton();
  const { handleLogout } = useLogoutAction();
  const profileRef = useOutsideClick(closeMenu);
  const now = dayjs();

  const handleMenuItem = () => {
    if (!now.isBetween(제출_시작_날짜, 제출_마감_날짜)) {
      return (
        <>
          <MenuItem onClick={handleChangePassword}>비밀번호 변경</MenuItem>
          <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        </>
      );
    }
    return (
      <>
        <MenuItem onClick={handleMoveFormPage}>이어서 원서 작성하기</MenuItem>
        <MenuItem onClick={handleChangePassword}>비밀번호 변경</MenuItem>
        <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
      </>
    );
  };

  return (
    <StyledProfile ref={profileRef}>
      <MenuButton onClick={toggleMenuOpen}>
        <Name>{userData.name} 님</Name>
        <IconArrowDropdown color={color.gray600} width={24} height={24} />
      </MenuButton>
      {isMenuOpen && (
        <MenuListBox>
          <MenuList>
            <NameMenu>
              <Name>{userData.name}</Name>
              <Text fontType="p3" color={color.gray600}>
                @{userData.phoneNumber}
              </Text>
            </NameMenu>
            <Suspense fallback={<Loader />}>{handleMenuItem()}</Suspense>
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

const MenuItem = styled.button`
  ${font.p2}
  ${flex({ alignItems: 'center' })}
    width: 100%;
  height: 48px;
  padding: 9px 24px;
  cursor: pointer;
`;
