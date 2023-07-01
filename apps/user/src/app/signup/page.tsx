'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Terms from '@/components/signup/Terms/Terms';
import BaseLayout from '@/layouts/BaseLayout';
import useSignUp from './signup.hook';
import { useState } from 'react';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { ButtonInput, PreviewInput, Button, Column, TimeLimitInput } from '@maru/ui';

const SignUpPage = () => {
    const {
        handleJoinUserData,
        handleRequestEmailButtonClick,
        handleSignUpButtonClick,
        setCheckTermsAgree,
    } = useSignUp();

    const [timerLimitTime, setTimerLimitTime] = useState(0);
    /**
     * true면 인증 요청을 보낸 상태
     * false면 인증 요청을 아직 보내지 않은 상태
     */
    const requestEmailEnabled = timerLimitTime !== 0;
    return (
        <BaseLayout>
            <StyledSignUpPage>
                <Image
                    src="/assets/ColaboLogo.svg"
                    style={{ margin: '0 auto' }}
                    width={477}
                    height={290}
                    alt="colabo-logo"
                />
                <ContentBox>
                    <SignUpBox enabled={requestEmailEnabled}>
                        <Column gap="24px">
                            <Title>회원가입</Title>
                            <ButtonInput
                                label="이메일 인증"
                                buttonText="인증"
                                handleButtonClick={() => {
                                    handleRequestEmailButtonClick();
                                    setTimerLimitTime(300);
                                }}
                                type="email"
                                placeholder="이메일"
                                width="100%"
                                name="email"
                                onChange={handleJoinUserData}
                                enabled={requestEmailEnabled}
                            />
                            {requestEmailEnabled && (
                                <TimeLimitInput
                                    label="인증코드"
                                    width="100%"
                                    maxLength={6}
                                    msg="발송된 이메일의 인증번호를 입력해주세요."
                                    name="code"
                                    onChange={handleJoinUserData}
                                    time={timerLimitTime}
                                    setTime={setTimerLimitTime}
                                />
                            )}
                            <PreviewInput
                                label="비밀번호"
                                width="100%"
                                msg="8~16자의 영문 대소문자, 숫자, 특수문자만 가능합니다."
                                name="password"
                                onChange={handleJoinUserData}
                            />
                            <PreviewInput
                                label="비밀번호 재확인"
                                width="100%"
                                name="repassword"
                                onChange={handleJoinUserData}
                            />
                        </Column>
                        {/* 이용약관 동의 */}
                        <Terms setCheckTermsAgree={setCheckTermsAgree} />
                        <Button width="100%" onClick={handleSignUpButtonClick}>
                            회원가입
                        </Button>
                    </SignUpBox>
                </ContentBox>
            </StyledSignUpPage>
        </BaseLayout>
    );
};

export default SignUpPage;

const StyledSignUpPage = styled.div`
    ${flex({ justifyContent: 'space-between', alignItems: 'center' })}
    width: 100%;
    height: 100%;
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

const SignUpBox = styled.div<{ enabled: boolean }>`
    ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
    width: 446px;
    height: ${(props) => (props.enabled ? '721px' : '592px')};
    margin: 120px 0px;
`;

const Title = styled.p`
    ${font.H2}
    color: ${color.gray900};
`;
