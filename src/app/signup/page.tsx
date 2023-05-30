"use client";

import styled from "styled-components";
import ButtonInput from "@/components/common/Input/ButtonInput";
import PreviewInput from "@/components/common/Input/PreviewInput";
import Button from "@/components/common/Button";
import Image from "next/image";
import Terms from "@/components/signup/Terms";
import Column from "@/components/common/Flex/Column";
import BaseLayout from "@/layouts/BaseLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useJoin } from "@/hooks/useJoin";
import TimerInput from "@/components/common/Input/TimerInput";
import { useState } from "react";

const SignUpPage = () => {
  const {
    handleJoinUserData,
    requestEmailMutate,
    clickSignUp,
    setCheckTermsAgree,
  } = useJoin();
  const [time, setTime] = useState(0);
  /**
   * true면 인증 요청을 보낸 상태
   * false면 인증 요청을 아직 보내지 않은 상태
   */
  const requestEmailEnabled = time !== 0;

  return (
    <BaseLayout>
      <StyledSignUp>
        <Image
          src="/assets/ColaboLogo.svg"
          style={{ margin: "0 auto" }}
          width={477}
          height={290}
          alt="colabo-logo"
        />
        <ContentBox>
          <SignUpBox enabled={requestEmailEnabled}>
            <Column gap="24px">
              <Title>회원가입</Title>
              <ButtonInput
                desc="이메일 인증"
                buttonText="인증"
                type="email"
                buttonClick={() => {
                  requestEmailMutate.mutate();
                  setTime(300);
                }}
                placeholder="이메일"
                width="100%"
                name="email"
                onChange={handleJoinUserData}
                enabled={requestEmailEnabled}
              />
              {requestEmailEnabled && (
                <TimerInput
                  desc="인증코드"
                  width="100%"
                  maxLength={6}
                  msg="발송된 이메일의 인증번호를 입력해주세요."
                  name="code"
                  onChange={handleJoinUserData}
                  time={time}
                  setTime={setTime}
                />
              )}
              <PreviewInput
                desc="비밀번호"
                width="100%"
                msg="8~16자의 영문 대소문자, 숫자, 특수문자만 가능합니다."
                name="password"
                onChange={handleJoinUserData}
              />
              <PreviewInput
                desc="비밀번호 재확인"
                width="100%"
                name="repassword"
                onChange={handleJoinUserData}
              />
            </Column>
            {/* 이용약관 동의 */}
            <Terms setCheckTermsAgree={setCheckTermsAgree} />
            <Button width="100%" onClick={clickSignUp}>
              회원가입
            </Button>
          </SignUpBox>
        </ContentBox>
      </StyledSignUp>
    </BaseLayout>
  );
};

export default SignUpPage;

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
  overflow: auto;
`;

const SignUpBox = styled.div<{ enabled: Boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 446px;
  height: ${(props) => (props.enabled ? "721px" : "592px")};
  margin: 120px 0px;
`;

const Title = styled.p`
  ${font.H2}
  color: ${color.gray900};
`;
