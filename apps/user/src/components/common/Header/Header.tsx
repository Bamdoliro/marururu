import { ROUTES, TOKEN } from '@/constants/common/constant';
import { useUser } from '@/hooks';
import { color } from '@maru/design-token';
import { Button, Row, UnderlineButton } from '@maru/ui';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Profile from './Profile/Profile';
import {
  이차_전형_끝,
  이차_전형_시작,
  일차_합격_발표,
  입학_등록_기간,
  입학_등록_기간_마감,
  제출_마감_날짜,
  제출_시작_날짜,
  최종_합격_발표,
} from '@/constants/form/constant';
import GuardFormModal from '@/components/main/GuardFormModal/GuardFormModal';
import { useOverlay } from '@toss/use-overlay';
import { Storage } from '@/apis/storage/storage';
import NeedLoginModal from '@/components/main/NeedLoginModal/NeedLoginModal';

const NAVIGATION_LIST = [
  {
    name: '홈',
    route: ROUTES.MAIN,
  },
  {
    name: '원서작성',
    route: ROUTES.FORM,
  },
  {
    name: '원서관리',
    route: ROUTES.FORM_MANAGEMENT,
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
  const overlay = useOverlay();

  const handleNavigationClickForm = (route: string) => {
    const accessToken = Storage.getItem(TOKEN.ACCESS);
    const refreshToken = Storage.getItem(TOKEN.REFRESH);

    if (
      (route === ROUTES.FORM_MANAGEMENT || route === ROUTES.FORM) &&
      (!accessToken || !refreshToken)
    ) {
      overlay.open(({ isOpen, close }) => (
        <NeedLoginModal isOpen={isOpen} onClose={close} />
      ));
      return;
    }

    if (route === ROUTES.FORM) {
      const now = dayjs();
      if (!now.isBetween(제출_시작_날짜, 제출_마감_날짜)) {
        overlay.open(({ isOpen, close }) => (
          <GuardFormModal isOpen={isOpen} onClose={close} />
        ));
        return;
      }
    }

    if (route === ROUTES.FORM_MANAGEMENT) {
      const now = dayjs();
      const notAdmissionProcess = !(
        now.isBetween(제출_시작_날짜, 제출_마감_날짜) ||
        now.isBetween(이차_전형_시작, 이차_전형_끝) ||
        now.isBetween(일차_합격_발표, 최종_합격_발표) ||
        now.isBetween(입학_등록_기간, 입학_등록_기간_마감)
      );

      if (notAdmissionProcess) {
        overlay.open(({ isOpen, close }) => (
          <GuardFormModal isOpen={isOpen} onClose={close} />
        ));
        return;
      }
    }

    router.push(route);
  };

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
            src="/svg/logo.svg"
            style={{ cursor: 'pointer' }}
            width={120}
            height={36}
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
          {NAVIGATION_LIST.map(({ route, name }, index) => (
            <UnderlineButton
              key={`navigation ${index}`}
              active={route === pathName}
              onClick={() => handleNavigationClickForm(route)}
            >
              {name}
            </UnderlineButton>
          ))}
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
