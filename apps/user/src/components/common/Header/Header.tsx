import { Storage } from '@/apis/storage/storage';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { color } from '@maru/theme';
import { flex } from '@maru/utils';
import { Button, Row } from '@maru/ui';
import Profile from './Profile';
import ROUTES from '@/constants/routes';
import TOKEN from '@/constants/token';
import { LogoIcon } from '../Icons';

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
    {
        name: '학교 소개',
        route: '/',
    },
];

const Header = () => {
    const router = useRouter();
    const loginStatus = Storage.getItem(TOKEN.ACCESS);

    return (
        <StyledHeader>
            <HeaderBar>
                <LogoIcon cursor="pointer" onClick={() => router.push(ROUTES.MAIN)} />
                {loginStatus ? (
                    <Profile name="밤돌이로" />
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
                {NAVIGATION_DATA.map((item, index) => (
                    <Button
                        key={`navigation ${index}`}
                        option="HOVER_UNDERLINE"
                        size="LARGE"
                        onClick={() => router.push(item.route)}>
                        {item.name}
                    </Button>
                ))}
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
    margin-bottom: 44px;
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
