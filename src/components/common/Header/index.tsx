import { Storage } from "@/lib/storage";
import { ACCESS_KEY } from "@/constants/token";
import { color } from "@/styles/color";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Button from "../Button";
import Row from "../Flex/Row";
import LogoIcon from "../Icon/Logo";
import NavigationBar from "./NavigationBar";
import Profile from "./Profile";
import {
  FORM_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  NOTICE_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
} from "@/constants/router";

const Header = () => {
  const router = useRouter();

  // 로그인 상태 테스트입니다
  const loginStatus = Storage.getItem(ACCESS_KEY);

  return (
    <StyledHeader>
      <HeaderBar>
        <LogoIcon
          cursor="pointer"
          onClick={() => router.push(MAIN_PAGE_ROUTE)}
        />
        {loginStatus ? (
          <Profile name="밤돌이로" />
        ) : (
          <Row gap="10px" alignItems="center">
            <Button
              option="QUATERNARY"
              size="SMALL"
              onClick={() => router.push(LOGIN_PAGE_ROUTE)}
            >
              로그인
            </Button>
            <Button
              option="PRIMARY"
              size="SMALL"
              onClick={() => router.push(SIGNUP_PAGE_ROUTE)}
            >
              회원가입
            </Button>
          </Row>
        )}
      </HeaderBar>
      <NavigationBar>
        <Button
          option="HOVER_UNDERLINE"
          size="LARGE"
          onClick={() => router.push(MAIN_PAGE_ROUTE)}
        >
          홈
        </Button>
        <Button
          option="HOVER_UNDERLINE"
          size="LARGE"
          onClick={() => router.push(FORM_PAGE_ROUTE)}
        >
          원서접수
        </Button>
        <Button
          option="HOVER_UNDERLINE"
          size="LARGE"
          onClick={() => router.push(NOTICE_PAGE_ROUTE)}
        >
          공지사항
        </Button>
        <Button option="HOVER_UNDERLINE" size="LARGE">
          도움말
        </Button>
      </NavigationBar>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 126px;
  background-color: ${color.white};
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86%;
  height: 72px;
`;
