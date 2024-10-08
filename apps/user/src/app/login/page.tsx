'use client';

import { ROUTES } from '@/constants/common/constant';
import { AppLayout } from '@/layouts';
import { IconArrowRight } from '@maru/icon';
import { color, font } from '@maru/design-token';
import { Button, Column, Input, PreviewInput } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useCTAButton, useInput, useLoginAction } from './login.hooks';

const LoginPage = () => {
  const { handleMoveMainPage } = useCTAButton();
  const { loginUser, handleLoginUserChange } = useInput();
  const { handleLogin } = useLoginAction(loginUser);

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <AppLayout backgroundColor={color.gray100}>
      <StyledLoginPage>
        <LoginBox>
          <Column
            gap={56}
            alignItems="center"
            justifyContent="center"
            width={446}
            height="100%"
          >
            <Image
              src="/svg/logo.svg"
              onClick={handleMoveMainPage}
              style={{ cursor: 'pointer' }}
              width={232}
              height={70}
              alt="logo"
            />
            <Column gap={36} width="100%">
              <Column gap={24}>
                <Input
                  label="전화번호"
                  width="100%"
                  name="phoneNumber"
                  placeholder="전화번호를 입력해주세요."
                  onChange={handleLoginUserChange}
                />
                <PreviewInput
                  label="비밀번호"
                  width="100%"
                  name="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={handleLoginUserChange}
                  onKeyDown={handleEnterKeyPress}
                />
              </Column>
              <Column gap={16} alignItems="flex-end">
                <Button width="100%" onClick={handleLogin}>
                  로그인
                </Button>
                <FindPasswordLink href={ROUTES.CHANGE_PASSWORD}>
                  비밀번호 변경
                  <IconArrowRight color={color.gray500} width={16} height={16} />
                </FindPasswordLink>
              </Column>
            </Column>
            <SignUpLinkBox>
              회원이 아니신가요?
              <SignUpLink href={ROUTES.SIGNUP}>회원가입</SignUpLink>
            </SignUpLinkBox>
          </Column>
        </LoginBox>
      </StyledLoginPage>
    </AppLayout>
  );
};

export default LoginPage;

const StyledLoginPage = styled.div`
  ${flex({ justifyContent: 'center', alignItems: 'center' })};
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

const FindPasswordLink = styled(Link)`
  ${font.p2}
  color: ${color.gray500};
  ${flex({ alignItems: 'center' })}
  &:hover {
    text-decoration-line: underline;
    text-decoration-color: ${color.gray500};
  }
`;

const SignUpLinkBox = styled.div`
  ${font.p2}
  color: ${color.gray500};
  ${flex({ alignItems: 'center' })}
  gap: 8px;
`;

const SignUpLink = styled(Link)`
  ${font.p2}
  color: ${color.gray500};
  text-decoration-line: underline;
  text-decoration-color: ${color.gray500};
`;
