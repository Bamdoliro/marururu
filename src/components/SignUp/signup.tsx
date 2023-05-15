import AppLayout from "@/layouts/AppLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import ButtonInput from "../Common/Input/button";
import PreviewInput from "../Common/Input/preview";
import Button from "../Common/Button/button";
import Input from "../Common/Input/input";
import Image from "next/image";
import SignUpAgreement from "./Agreement/agreement";
import FlexColumn from "../Common/Flex/column";

const SignUp = () => {
  return (
    <AppLayout>
      <StyledSignUp>
        <Image
          src="/assets/ColaboLogo.svg"
          alt="colabo-logo"
          width={477}
          height={290}
          style={{ margin: "0 auto" }}
        />
        <ContentBox>
          <SignUpBox>
            <FlexColumn gap="24px">
              <Title>회원가입</Title>
              <ButtonInput
                desc="이메일 인증"
                buttonText={"인증"}
                type="email"
                buttonClick={() => console.log("인증버튼 클릭")}
                placeholder="이메일"
                width="100%"
              />
              <Input
                desc="인증코드"
                width="100%"
                maxLength={6}
                msg="발송된 이메일의 인증번호를 입력해주세요."
              />
              <PreviewInput
                desc="비밀번호"
                width="100%"
                msg="8~16자의 영문 대소문자, 숫자, 특수문자만 가능합니다."
              />
              <PreviewInput desc="비밀번호 재확인" width="100%" />
            </FlexColumn>
            {/* 이용약관 동의 */}
            <SignUpAgreement />
            <Button icon="NONE" size="MEDIUM" width="100%">
              회원가입
            </Button>
          </SignUpBox>
        </ContentBox>
      </StyledSignUp>
    </AppLayout>
  );
};

export default SignUp;

const StyledSignUp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.gray100};
`;

const ContentBox = styled.div`
  display: flex;
  width: 708px;
  height: 100%;
  background-color: ${color.white};
  padding-left: 105px;
  overflow: scroll;
`;

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 446px;
  height: 721px;
  margin: 120px 0px;
`;

const Title = styled.p`
  ${font.H2}
  color: ${color.black};
`;
