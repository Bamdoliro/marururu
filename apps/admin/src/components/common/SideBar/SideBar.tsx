'use client';

import { ROUTES } from '@/constants/common/constant';
import useAdmin from '@/hooks/useAdmin';
import { useLogoutAdminMutation } from '@/services/auth/mutations';
import { flex } from '@maru/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled, { css } from 'styled-components';
import { color, font } from '@maru/design-token';

const NAVIGATION_DATA = [
  {
    name: '원서 관리',
    route: ROUTES.FORM,
  },
  {
    name: '공지사항',
    route: ROUTES.NOTICE,
  },
  {
    name: '자주 묻는 질문',
    route: ROUTES.FAQ,
  },
  {
    name: '단체 메시지 발송',
    route: ROUTES.MESSAGE,
  },
  {
    name: '입학 설명회 관리',
    route: ROUTES.FAIR,
  },
  {
    name: '분석',
    route: ROUTES.ANALYSIS,
  },
] as const;

const SideBar = () => {
  const pathName = usePathname();
  const { isLoggedIn } = useAdmin();
  const { logoutAdminMutate } = useLogoutAdminMutation();

  const handleLogoutAdmin = () => {
    logoutAdminMutate();
  };

  return (
    <StyledSideBar>
      <Link href={ROUTES.FORM}>
        <Image
          style={{
            position: 'absolute',
            top: 36,
            left: 36,
            color: 'white',
          }}
          src="/svg/logo.svg"
          alt="logo"
          width={120}
          height={36}
        />
      </Link>
      <SideNavigationBar>
        {NAVIGATION_DATA.map(({ route, name }) => (
          <StyledLink
            key={`navigation ${name}`}
            href={route}
            $active={route === pathName}
          >
            {name}
          </StyledLink>
        ))}
      </SideNavigationBar>
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutAdmin}>로그아웃</LogoutButton>
      ) : (
        <LoginLink href="/">로그인</LoginLink>
      )}
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  width: 240px;
  height: 100vh;

  background: ${color.gray900};

  flex-shrink: 0;
`;

const SideNavigationBar = styled.div`
  margin-top: 142px;
`;

const StyledLink = styled(Link)<{ $active: boolean }>`
  ${font.H5}
  position: relative;
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 56px;
  color: ${color.white};
  padding-left: 36px;

  ${(props) =>
    props.$active &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: ${color.maruDefault};
      }
      background: linear-gradient(
        90deg,
        rgba(37, 124, 255, 0.15) 0%,
        rgba(37, 124, 255, 0) 100%
      );
    `}
  box-sizing: border-box;
`;

const LogoutButton = styled.button`
  ${font.H5}
  ${flex({ alignItems: 'center' })}
    height: 56px;
  padding: 0px 36px;
  color: ${color.white};
  margin: auto 0 48px;
`;

const LoginLink = styled(Link)`
  ${font.btn1}
  ${flex({ alignItems: 'center' })}
    height: 56px;
  padding: 0px 36px;
  color: ${color.white};
  margin: auto 0 48px;
`;
