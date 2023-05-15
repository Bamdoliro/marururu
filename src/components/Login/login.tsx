import AppLayout from "@/layouts/AppLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import Image from "next/image";
import styled from "styled-components";
import Button from "../Common/Button/button";
import Column from "../Common/Flex/column";
import RightArrowIcon from "../Common/Icon/RightArrow";
import Input from "../Common/Input/input";
import PreviewInput from "../Common/Input/preview";

const Login = () => {
  return (
    <AppLayout backgroundColor={color.gray100}>
      <StyledLogin>
        <LoginBox>
          <Image src="/assets/Logo.svg" width={232} height={70} alt="logo" />
          <Column gap="36px">
            <Column gap="24px">
              <Input desc="아이디" width="100%" />
              <PreviewInput desc="비밀번호" width="100%" />
            </Column>
            <Column gap="16px" alignItems="flex-end">
              <Button width="100%">로그인</Button>
              <FindPassword>
                비밀번호 찾기 <RightArrowIcon color={color.gray500} />
              </FindPassword>
            </Column>
          </Column>
          <SignUp>
            회원이 아니신가요? <SignUpLink>회원가입</SignUpLink>
          </SignUp>
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
  width: 818px;
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

const SignUp = styled.div`
  ${font.p2}
  color: ${color.gray500};
`;

const SignUpLink = styled.a`
  ${font.p2}
  color: ${color.gray500};
  text-decoration-line: underline;
  text-decoration-color: ${color.gray500};
  cursor: pointer;
`;
