'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import {
  Button,
  ButtonInput,
  Column,
  Input,
  PreviewInput,
  Text,
  TimeLimitInput,
} from '@maru/ui';
import { useState } from 'react';
import { useInput, useVerificationCodeAction } from '../signup/signup.hooks';
import { Validate } from '@/components/signup';

const ChangePasswordPage = () => {
  const [timerTime, setTimerTime] = useState(0);
  const { joinUser, handleJoinUserChange } = useInput();
  const {
    handleRequestVerificationCode,
    handleVerificationCodeConfirm,
    isVerificationCodeDisabled,
    isVerificationCodeConfirm,
    isVerificationCodeSend,
  } = useVerificationCodeAction(joinUser);

  const startTimer = () => {
    setTimerTime(300);
  };

  return (
    <AppLayout backgroundColor={color.gray100}>
      <StyledChangePasswordPage>
        <ChagePasswordBox>
          <Column gap={32} width="60%">
            <Text fontType="H2">비밀번호 변경</Text>
            <Input label="이름" width="100%" name="name" placeholder="예) 홍길동" />
            <ButtonInput
              label="전화번호 인증"
              buttonText={isVerificationCodeSend ? '재전송' : '인증번호 전송'}
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
            <Column gap={6}>
              <PreviewInput
                label="새 비밀번호"
                width="100%"
                name="password"
                placeholder="새 비밀번호를 입력해주세요."
                onChange={handleJoinUserChange}
              />
              {Validate(joinUser.password)}
            </Column>
            <PreviewInput
              label="비밀번호 재입력"
              width="100%"
              name="password_confirm"
              placeholder="비밀번호를 다시 입력해주세요."
            />
            <Button>비밀번호 변경</Button>
          </Column>
        </ChagePasswordBox>
      </StyledChangePasswordPage>
    </AppLayout>
  );
};

export default ChangePasswordPage;

const StyledChangePasswordPage = styled.div`
  ${flex({ justifyContent: 'center', alignItems: 'center' })};
  width: 100%;
  height: 100vh;
`;

const ChagePasswordBox = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  justify-content: center;
  width: 708px;
  height: 100%;
  background-color: ${color.white};
`;
