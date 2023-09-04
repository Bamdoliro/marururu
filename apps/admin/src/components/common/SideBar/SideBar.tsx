import { ROUTES } from '@/constants/common/constants';
import { flex } from '@maru/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled, { css } from 'styled-components';
import { color, font } from '../../../../../../packages/maru-theme';

const NAVIGATION_DATA = [
    {
        name: '원서조회',
        route: ROUTES.MAIN,
    },
    {
        name: '원서검토',
        route: ROUTES.REVIEW,
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
        name: '분석',
        route: ROUTES.ANALYSIS,
    },
] as const;

const SideBar = () => {
    const pathName = usePathname();

    return (
        <StyledSideBar>
            <Link href="/">
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
                {NAVIGATION_DATA.map(({ route, name }, index) => (
                    <StyledLink
                        key={`navigation ${index}`}
                        href={route}
                        $active={route === pathName}>
                        {name}
                    </StyledLink>
                ))}
            </SideNavigationBar>
            <LogoutButton>로그아웃</LogoutButton>
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
    ${font.btn1}
    ${flex({ alignItems: 'center' })}
    height: 56px;
    padding: 0px 36px;
    color: ${color.white};
    margin: auto 0 48px;
`;
