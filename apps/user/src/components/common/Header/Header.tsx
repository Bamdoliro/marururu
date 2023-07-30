import { Storage } from '@/apis/storage/storage';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { color } from '@maru/theme';
import { flex } from '@maru/utils';
import { Button, Row } from '@maru/ui';
import Profile from './Profile';
import ROUTES from '@/constants/routes';
import TOKEN from '@/constants/token';
import Image from 'next/image';

const HEADER_DATA = [
    {
        id: 0,
        name: '홈',
        route: ROUTES.MAIN,
    },
    {
        id: 1,
        name: '원서접수',
        route: ROUTES.FORM,
    },
    {
        id: 2,
        name: '공지사항',
        route: ROUTES.NOTICE,
    },
    {
        id: 3,
        name: '자주 묻는 질문',
        route: ROUTES.FAQ,
    },
    {
        id: 4,
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
                <Image
                    src="/svg/logo.svg"
                    style={{ cursor: 'pointer' }}
                    width={107}
                    height={72}
                    onClick={() => router.push(ROUTES.MAIN)}
                    alt="logo"
                />
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
