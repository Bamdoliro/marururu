import { ROUTES } from '@/constants/common/constant';
import { useUser } from '@/hooks';
import { color } from '@maru/theme';
import { Button, Row, UnderlineButton } from '@maru/ui';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';
import Profile from './Profile/Profile';
const NAVIGATION_LIST = [
  {
    name: '홈',
    route: ROUTES.MAIN,
  },
  {
    name: '성적 모의 계산',
    route: ROUTES.SCORE_SIMULATION,
  },
  {
    name: '원서작성',
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
      <HeaderBox>
        <Row
          style={{ padding: '0px 100px' }}
          height={64}
          alignItems="center"
          justifyContent="space-between"
        >
          <Image
            src="/svg/school_logo.svg"
            style={{ cursor: 'pointer' }}
            width={318}
            height={64}
            onClick={() => router.push(ROUTES.MAIN)}
            alt="logo"
          />
          {isLoggedIn ? (
            <Profile />
          ) : (
            <Row gap={10} alignItems="center">
              <Button
                styleType="QUATERNARY"
                size="SMALL"
                onClick={() => router.push(ROUTES.LOGIN)}
              >
                로그인
              </Button>
              <Button
                styleType="PRIMARY"
                size="SMALL"
                onClick={() => router.push(ROUTES.SIGNUP)}
              >
                회원가입
              </Button>
            </Row>
          )}
        </Row>
        <Row style={{ padding: '0px 96px' }} alignItems="center">
          {NAVIGATION_LIST.map(({ route, name }, index) => {
            return (
              <UnderlineButton
                key={`navigation ${index}`}
                active={route === pathName}
                onClick={() => router.push(route)}
              >
                {name}
              </UnderlineButton>
            );
          })}
        </Row>
      </HeaderBox>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 ${color.gray200};
`;

const HeaderBox = styled.div`
  max-width: 1448px;
  height: 100%;
  background-color: ${color.white};
  margin: 0 auto;
`;
