import { color } from "@/styles/color";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Button from "../Button/button";
import Row from "../Flex/row";
import LogoIcon from "../Icon/Logo";

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <HeaderWrap>
        <LogoIcon cursor="pointer" onClick={() => router.push("/")} />
        <Row gap="10px" alignItems="center">
          <Button option="QUATERNARY" size="SMALL">
            로그인
          </Button>
          <Button option="PRIMARY" size="SMALL">
            회원가입
          </Button>
        </Row>
      </HeaderWrap>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  background-color: ${color.white};
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86%;
  height: 100%;
`;
