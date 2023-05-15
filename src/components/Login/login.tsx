import AppLayout from "@/layouts/AppLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import Image from "next/image";
import styled from "styled-components";
import Button from "../Common/Button/button";
import FlexColumn from "../Common/Flex/column";
import FlexRow from "../Common/Flex/row";
import RightArrowIcon from "../Common/Icon/RightArrow";
import Input from "../Common/Input/input";
import PreviewInput from "../Common/Input/preview";

const Login = () => {
  return (
    <AppLayout>
      <StyledLogin>
        <LoginBox>
          <Image src="/assets/Logo.svg" width={232} height={70} alt="logo" />
          <FlexColumn gap="36px">
            <FlexColumn gap="24px">
              <Input desc="아이디" width="100%" />
              <PreviewInput desc="비밀번호" width="100%" />
            </FlexColumn>
            <FlexColumn gap="16px" alignItems="flex-end">
              <Button width="100%">로그인</Button>
              <FindPassword>
                비밀번호 찾기 <RightArrowIcon color={color.gray500} />
              </FindPassword>
            </FlexColumn>
          </FlexColumn>
          <SignUp>회원이 아니신가요? 회원가입</SignUp>
        </LoginBox>
      </StyledLogin>
    </AppLayout>
  );
};

export default Login;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${color.white};
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  width: 446px;
`;

const FindPassword = styled.a`
  ${font.p2}
  color: ${color.gray500};
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration-line: underline;
    text-decoration-color: ${color.gray500};
  }
`;

const SignUp = styled.a`
  ${font.p2}
  color: ${color.gray500};
`;
