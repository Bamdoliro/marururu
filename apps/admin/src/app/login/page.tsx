'use client';

import { color } from '@maru/design-token';
import { Button, Column, Input, PreviewInput } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import { styled } from 'styled-components';
import { useCTAButton, useInput, useLoginAction } from './login.hooks';

const LoginPage = () => {
  const { handleGoMainPageButtonClick } = useCTAButton();
  const { loginAdminData, handleLoginAdminDataChange } = useInput();
  const { handleLogin } = useLoginAction(loginAdminData);

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <StyledLoginPage>
      <LoginBox>
        <Column gap={56} alignItems="center" width={446}>
          <Image
            src="/svg/logo_black.svg"
            onClick={handleGoMainPageButtonClick}
            style={{ cursor: 'pointer' }}
            width={232}
            height={70}
            alt="logo"
          />
          <Column gap="36px" width="100%">
            <Column gap="24px">
              <Input
                label="전화번호"
                width="100%"
                name="phoneNumber"
                onChange={handleLoginAdminDataChange}
              />
              <PreviewInput
                label="비밀번호"
                width="100%"
                name="password"
                onChange={handleLoginAdminDataChange}
                onKeyDown={handleEnterKeyPress}
              />
            </Column>
            <Column gap="16px" alignItems="flex-end">
              <Button width="100%" onClick={handleLogin}>
                로그인
              </Button>
            </Column>
          </Column>
        </Column>
      </LoginBox>
    </StyledLoginPage>
  );
};

export default LoginPage;

const StyledLoginPage = styled.div`
  ${flex({ justifyContent: 'center' })}
  width: 100%;
  height: 100vh;
`;

const LoginBox = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  justify-content: center;
  width: 818px;
  height: 100%;
  background-color: ${color.white};
`;
