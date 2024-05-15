'use client';

import Terms from '@/components/signup/Terms/Terms';
import { AppLayout } from '@/layouts';
import { color } from '@maru/design-token';
import {
  Button,
  ButtonInput,
  Column,
  Input,
  PreviewInput,
  Text,
  TimeLimitInput,
} from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { useInput, useJoinAction, useVerificationCodeAction } from './signup.hooks';
import { Validate } from '@/components/signup';

const SignUpPage = () => {
  const [timerTime, setTimerTime] = useState(0);
  const [termsAgree, setTermsAgree] = useState(false);
  const { joinUser, handleJoinUserChange } = useInput();
  const {
    handleRequestVerificationCode,
    handleVerificationCodeConfirm,
    isVerificationCodeDisabled,
    isVerificationCodeConfirm,
    isVerificationCodeSend,
  } = useVerificationCodeAction(joinUser);
  const { handleJoin } = useJoinAction(joinUser, termsAgree);

  const startTimer = () => {
    setTimerTime(300); // 5분
  };

  return (
    <AppLayout>
      <StyledSignUpPage>
        <Image
          src="/svg/signup_school_logo.svg"
          style={{ margin: '0 auto' }}
          width={480}
          height={139}
          alt="colabo-logo"
        />
        <ContentBox>
          <SignUpBox>
            <Column gap={24}>
              <Text fontType="H2" color={color.gray900}>
                회원가입
              </Text>
              <Input
                label="이름"
                width="100%"
                name="name"
                placeholder="이름을 입력해주세요."
                onChange={handleJoinUserChange}
              />
              <ButtonInput
                label="전화번호 인증"
                buttonText={isVerificationCodeSend ? '재전송' : '인증'}
                onClick={() => {
                  handleRequestVerificationCode();
                  startTimer();
                }}
                enabled={isVerificationCodeDisabled}
                type="phoneNumber"
                placeholder="- 없이 입력해주세요."
                width="100%"
                name="phoneNumber"
                onChange={handleJoinUserChange}
                value={joinUser.phoneNumber}
              />
              {isVerificationCodeSend && (
                <TimeLimitInput
                  label="인증코드"
                  width="100%"
                  maxLength={6}
                  name="code"
                  onChange={handleJoinUserChange}
                  onClick={handleVerificationCodeConfirm}
                  timerTime={isVerificationCodeConfirm ? 0 : timerTime}
                  setTimerTime={setTimerTime}
                  isError={joinUser.code.length < 6}
                  buttonText="인증번호 확인"
                  enabled={isVerificationCodeConfirm}
                  errorMessage="발송된 전화번호의 인증번호를 입력해주세요."
                />
              )}
              <Column gap={12}>
                <PreviewInput
                  label="비밀번호"
                  width="100%"
                  name="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={handleJoinUserChange}
                />
                {Validate(joinUser.password)}
              </Column>
              <PreviewInput
                label="비밀번호 재확인"
                width="100%"
                name="password_confirm"
                placeholder="비밀번호를 다시 입력해주세요."
                onChange={handleJoinUserChange}
                isError={joinUser.password !== joinUser.password_confirm}
                errorMessage="비밀번호가 맞지 않습니다."
              />
            </Column>
            {/* 이용약관 동의 */}
            <Terms setTermsAgree={setTermsAgree} />
            <Button width="100%" onClick={handleJoin}>
              회원가입
            </Button>
          </SignUpBox>
        </ContentBox>
      </StyledSignUpPage>
    </AppLayout>
  );
};

export default SignUpPage;

const StyledSignUpPage = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })}
  width: 100%;
  height: 100vh;
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

const SignUpBox = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 36px;
  width: 446px;
  height: fit-content;
  margin: 16% 0;
`;
