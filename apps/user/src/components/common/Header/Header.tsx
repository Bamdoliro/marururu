import { ROUTES } from '@/constants/common/constant';
import { useUser } from '@/hooks';
import { color } from '@maru/theme';
import { Button, Row, UnderLineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';
import Profile from './Profile/Profile';
const NAVIGATION_DATA = [
    {
        name: '홈',
        route: ROUTES.MAIN,
    },
    {
        name: '원서접수',
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
] as const;

const Header = () => {
    const router = useRouter();
    const pathName = usePathname();
    const { isLoggedIn } = useUser();

    return (
        <StyledHeader>
            <HeaderBar>
                <Image
                    src="/svg/logo.svg"
                    style={{ cursor: 'pointer' }}
                    width={107}
                    height={72}
                    onClick={() => router.push(ROUTES.MAIN)}
                    alt="logo"
                />
                {isLoggedIn ? (
                    <Profile />
                ) : (
                    <Row gap="10px" alignItems="center">
                        <Button
                            option="QUATERNARY"
                            size="SMALL"
                            onClick={() => router.push(ROUTES.LOGIN)}>
                            로그인
                        </Button>
                        <Button
                            option="PRIMARY"
                            size="SMALL"
                            onClick={() => router.push(ROUTES.SIGNUP)}>
                            회원가입
                        </Button>
                    </Row>
                )}
            </HeaderBar>
            <NavigationBar>
                {NAVIGATION_DATA.map(({ route, name }, index) => {
                    return (
                        <UnderLineButton
                            key={`navigation ${index}`}
                            active={route === pathName}
                            onClick={() => router.push(route)}>
                            {name}
                        </UnderLineButton>
                    );
                })}
            </NavigationBar>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
    width: 100%;
    height: 126px;
    background-color: ${color.white};
    padding: 0px 100px;
    border-bottom: 1px solid ${color.gray200};
`;

const HeaderBar = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    width: 100%;
`;

const NavigationBar = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 54px;
    background-color: ${color.white};
`;
