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
import {
  useInput,
  useUpdateAction,
  useVerificationCodeAction,
} from './change-password.hooks';
import { Validate } from '@/components/signup';

const ChangePasswordPage = () => {
  const [timerTime, setTimerTime] = useState(0);
  const { updateUser, handleUpdateUserChange } = useInput();
  const {
    handleRequestVerificationCode,
    handleVerificationCodeConfirm,
    isVerificationCodeDisabled,
    isVerificationCodeConfirm,
    isVerificationCodeSend,
  } = useVerificationCodeAction(updateUser);
  const { handleUpdate } = useUpdateAction(updateUser);

  const startTimer = () => {
    setTimerTime(300);
  };

  const isPhoneNumberValid = updateUser.phoneNumber.length === 11;

  return (
    <AppLayout backgroundColor={color.gray100}>
      <StyledChangePasswordPage>
        <ChagePasswordBox>
          <Column gap={32} width="60%">
            <Text fontType="H2">비밀번호 변경</Text>
            <Input
              label="이름"
              width="100%"
              name="name"
              placeholder="예) 홍길동"
              value={updateUser.name}
              onChange={handleUpdateUserChange}
            />
            <ButtonInput
              label="전화번호 인증"
              buttonText={isVerificationCodeSend ? '재전송' : '인증번호 전송'}
              onClick={() => {
                handleRequestVerificationCode();
                startTimer();
              }}
              enabled={isPhoneNumberValid && !isVerificationCodeDisabled}
              type="phoneNumber"
              placeholder="- 없이 입력해주세요."
              width="100%"
              name="phoneNumber"
              onChange={handleUpdateUserChange}
              value={updateUser.phoneNumber}
            />
            {isVerificationCodeSend && (
              <TimeLimitInput
                label="인증코드"
                width="100%"
                maxLength={6}
                name="code"
                onChange={handleUpdateUserChange}
                onClick={handleVerificationCodeConfirm}
                timerTime={isVerificationCodeConfirm ? 0 : timerTime}
                setTimerTime={setTimerTime}
                isError={updateUser.code.length < 6}
                buttonText="인증번호 확인"
                enabled={isVerificationCodeConfirm}
                placeholder="인증번호를 입력해주세요."
              />
            )}
            <Column gap={6}>
              <PreviewInput
                label="새 비밀번호"
                width="100%"
                name="password"
                placeholder="새 비밀번호를 입력해주세요."
                onChange={handleUpdateUserChange}
              />
              {Validate(updateUser.password)}
            </Column>
            <PreviewInput
              label="비밀번호 재입력"
              width="100%"
              name="password_confirm"
              placeholder="비밀번호를 다시 입력해주세요."
              onChange={handleUpdateUserChange}
            />
            <Button onClick={handleUpdate}>비밀번호 변경</Button>
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
