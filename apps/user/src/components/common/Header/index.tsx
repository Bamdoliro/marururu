import { Storage } from '@/apis/storage/storage';
import { ACCESS_KEY } from '@/constants/token';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { color } from '@maru/theme';
import { flex } from '@maru/utils';
import { Button, Row } from '@maru/ui';
import Profile from './Profile';
import {
    FAQ_PAGE_ROUTE,
    FORM_PAGE_ROUTE,
    LOGIN_PAGE_ROUTE,
    MAIN_PAGE_ROUTE,
    NOTICE_PAGE_ROUTE,
    SIGNUP_PAGE_ROUTE,
} from '@/constants/routes';
import LogoIcon from '../Icons/Logo';

const HEADER_DATA = [
    {
        id: 0,
        name: '홈',
        route: MAIN_PAGE_ROUTE,
    },
    {
        id: 1,
        name: '원서접수',
        route: FORM_PAGE_ROUTE,
    },
    {
        id: 2,
        name: '공지사항',
        route: NOTICE_PAGE_ROUTE,
    },
    {
        id: 3,
        name: '자주 묻는 질문',
        route: FAQ_PAGE_ROUTE,
    },
    {
        id: 4,
        name: '학교 소개',
        route: '/',
    },
];

const Header = () => {
    const router = useRouter();
    const loginStatus = Storage.getItem(ACCESS_KEY);

    return (
        <StyledHeader>
            <HeaderBar>
                <LogoIcon cursor="pointer" onClick={() => router.push(MAIN_PAGE_ROUTE)} />
                {loginStatus ? (
                    <Profile name="밤돌이로" />
                ) : (
                    <Row gap="10px" alignItems="center">
                        <Button
                            option="QUATERNARY"
                            size="SMALL"
                            onClick={() => router.push(LOGIN_PAGE_ROUTE)}>
                            로그인
                        </Button>
                        <Button
                            option="PRIMARY"
                            size="SMALL"
                            onClick={() => router.push(SIGNUP_PAGE_ROUTE)}>
                            회원가입
                        </Button>
                    </Row>
                )}
            </HeaderBar>
            <NavigationBar>
                {HEADER_DATA.map((item) => (
                    <Button
                        key={item.id}
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
    border-bottom: 1px solid ${color.gray200};
`;
