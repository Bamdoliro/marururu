'use client';

import { color } from '@maru/theme';
import { Button, Column, Input, PreviewInput } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import { styled } from 'styled-components';
import { useCTAButton, useInput, useLoginAction } from './login.hooks';

const LoginPage = () => {
    const { handleGoMainPageButtonClick } = useCTAButton();
    const { loginUserData, handleLoginUserDataChange } = useInput();
    const { handleLoginButtonClick } = useLoginAction(loginUserData);

    return (
        <StyledLoginPage>
            <LoginBox>
                <LoginBoxWrap>
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
                                onChange={handleLoginUserDataChange}
                            />
                            <PreviewInput
                                label="비밀번호"
                                width="100%"
                                name="password"
                                onChange={handleLoginUserDataChange}
                            />
                        </Column>
                        <Column gap="16px" alignItems="flex-end">
                            <Button width="100%" onClick={handleLoginButtonClick}>
                                로그인
                            </Button>
                        </Column>
                    </Column>
                </LoginBoxWrap>
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

const LoginBoxWrap = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })}
    gap: 56px;
    width: 446px;
`;