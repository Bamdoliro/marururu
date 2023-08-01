'use client';

import Image from 'next/image';
import { AppLayout } from '@/layouts';
import { useCTAButton, useInput, useLogin } from './login.hooks';
import { Button, Column, Input, PreviewInput } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { IconArrowRight } from '@maru/icon';
import styled from 'styled-components';

const LoginPage = () => {
    const { handleGoSingUpPageButtonClick } = useCTAButton();
    const { loginUserData, handleLoginUserDataChange } = useInput();
    const { handleLoginButtonClick } = useLogin(loginUserData);

    return (
        <AppLayout header={true} footer={true} backgroundColor={color.gray100}>
            <StyledLoginPage>
                <LoginBox>
                    <LoginBoxWrap>
                        <Image src="/svg/logo.svg" width={232} height={70} alt="logo" />
                        <Column gap="36px" width="100%">
                            <Column gap="24px">
                                <Input
                                    label="아이디"
                                    width="100%"
                                    name="email"
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
                                <GoFindPasswordPageButton>
                                    비밀번호 찾기
                                    <IconArrowRight color={color.gray500} width={16} height={16} />
                                </GoFindPasswordPageButton>
                            </Column>
                        </Column>
                        <GoSignUpPageButtonBox>
                            회원이 아니신가요?
                            <GoSignUpPageButton onClick={handleGoSingUpPageButtonClick}>
                                회원가입
                            </GoSignUpPageButton>
                        </GoSignUpPageButtonBox>
                    </LoginBoxWrap>
                </LoginBox>
            </StyledLoginPage>
        </AppLayout>
    );
};

export default LoginPage;

const StyledLoginPage = styled.div`
    ${flex({ justifyContent: 'center' })}
    width: 100%;
    height: 100%;
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

const GoFindPasswordPageButton = styled.a`
    ${font.p2}
    color: ${color.gray500};
    cursor: pointer;
    ${flex({ alignItems: 'center' })}
    &:hover {
        text-decoration-line: underline;
        text-decoration-color: ${color.gray500};
    }
`;

const GoSignUpPageButtonBox = styled.div`
    ${font.p2}
    color: ${color.gray500};
    ${flex({ alignItems: 'center' })}
    gap: 8px;
`;

const GoSignUpPageButton = styled.a`
    ${font.p2}
    color: ${color.gray500};
    text-decoration-line: underline;
    text-decoration-color: ${color.gray500};
    cursor: pointer;
`;
