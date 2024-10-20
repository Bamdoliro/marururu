'use client';

import { color } from '@maru/design-token';
import { Button, Column, Input, Loader, PreviewInput } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import { styled } from 'styled-components';
import { useInput, useLoginAction } from './login.hooks';
import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/common/constant';
import { Cookie } from '@/apis/cookie/cookie';

const LoginContent = () => {
  const { loginAdminData, handleLoginAdminDataChange } = useInput();
  const { handleLogin } = useLoginAction(loginAdminData);
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  useEffect(() => {
    if (message) {
      alert(message);
      localStorage.clear();
      Cookie.removeItem('refresh-token');
      router.replace(ROUTES.MAIN);
    }
  }, [message, router]);

  return (
    <StyledLoginPage>
      <LoginBox>
        <Column gap={56} alignItems="center" width={446}>
          <Image src="/svg/logo_black.svg" width={232} height={70} alt="logo" />
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

const LoginPage = () => (
  <Suspense fallback={<Loader />}>
    <LoginContent />
  </Suspense>
);

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
