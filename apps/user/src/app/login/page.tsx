'use client';

import styled from 'styled-components';
import Image from 'next/image';
import BaseLayout from '@/layouts/BaseLayout';
import useLogin from './hook';
import { useRouter } from 'next/navigation';
import { SIGNUP_PAGE_ROUTE } from '@/constants/routes';
import { Button, Column, Input, PreviewInput } from '@maru/ui';
import RightArrowIcon from '@/components/common/Icons/RightArrow';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';

const LoginPage = () => {
    const router = useRouter();
    const { handleLoginUserData, loginUserMutate } = useLogin();

    return (
        <BaseLayout backgroundColor={color.gray100}>
            <StyledLoginPage>
                <LoginBox>
                    <LoginBoxWrap>
                        <Image src="/assets/Logo.svg" width={232} height={70} alt="logo" />
                        <Column gap="36px" width="100%">
                            <Column gap="24px">
                                <Input
                                    label="아이디"
                                    width="100%"
                                    name="email"
                                    onChange={handleLoginUserData}
                                />
                                <PreviewInput
                                    label="비밀번호"
                                    width="100%"
                                    name="password"
                                    onChange={handleLoginUserData}
                                />
                            </Column>
                            <Column gap="16px" alignItems="flex-end">
                                <Button width="100%" onClick={() => loginUserMutate.mutate()}>
                                    로그인
                                </Button>
                                <FindPasswordLink>
                                    비밀번호 찾기
                                    <RightArrowIcon color={color.gray500} size={16} />
                                </FindPasswordLink>
                            </Column>
                        </Column>
                        <SignUp>
                            회원이 아니신가요?
                            <SignUpLink onClick={() => router.push(SIGNUP_PAGE_ROUTE)}>
                                회원가입
                            </SignUpLink>
                        </SignUp>
                    </LoginBoxWrap>
                </LoginBox>
            </StyledLoginPage>
        </BaseLayout>
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

const FindPasswordLink = styled.a`
    ${font.p2}
    color: ${color.gray500};
    cursor: pointer;
    ${flex({ alignItems: 'center' })}
    &:hover {
        text-decoration-line: underline;
        text-decoration-color: ${color.gray500};
    }
`;

const SignUp = styled.div`
    ${font.p2}
    color: ${color.gray500};
    ${flex({ alignItems: 'center' })}
    gap: 8px;
`;

const SignUpLink = styled.a`
    ${font.p2}
    color: ${color.gray500};
    text-decoration-line: underline;
    text-decoration-color: ${color.gray500};
    cursor: pointer;
`;
