'use client';

import Terms from '@/components/signup/Terms/Terms';
import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Button, ButtonInput, Column, Input, PreviewInput, Text, TimeLimitInput } from '@maru/ui';
import { flex } from '@maru/utils';
import { DebounceClick } from '@toss/react';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { useInput, useJoinAction, useRequestEmail, useTimer } from './signup.hooks';

const SignUpPage = () => {
    const [termsAgree, setTermsAgree] = useState(false);
    const { requestEmailEnabled, startTimer, timerTime, setTimerTime } = useTimer();
    const { joinUserData, handleJoinUserDataChange } = useInput();
    const { handleRequestEmailButtonClick } = useRequestEmail(joinUserData.email);
    const { handleJoinButtonClick } = useJoinAction(joinUserData, termsAgree);

    return (
        <AppLayout>
            <StyledSignUpPage>
                <Image
                    src="/svg/colabo_logo.svg"
                    style={{ margin: '0 auto' }}
                    width={477}
                    height={290}
                    alt="colabo-logo"
                />
                <ContentBox>
                    <SignUpBox enabled={requestEmailEnabled}>
                        <Column gap={24}>
                            <Text fontType="H2" color={color.gray900}>
                                회원가입
                            </Text>
                            <Input
                                label="이름"
                                width="100%"
                                name="name"
                                placeholder="이름을 입력해주세요."
                                onChange={handleJoinUserDataChange}
                            />
                            <DebounceClick wait={500}>
                                <ButtonInput
                                    label="이메일 인증"
                                    buttonText={requestEmailEnabled ? '재전송' : '인증'}
                                    onClick={() => {
                                        handleRequestEmailButtonClick();
                                        startTimer();
                                    }}
                                    type="email"
                                    placeholder="이메일"
                                    width="100%"
                                    name="email"
                                    onChange={handleJoinUserDataChange}
                                />
                            </DebounceClick>
                            {requestEmailEnabled && (
                                <TimeLimitInput
                                    label="인증코드"
                                    width="100%"
                                    maxLength={6}
                                    msg="발송된 이메일의 인증번호를 입력해주세요."
                                    name="code"
                                    onChange={handleJoinUserDataChange}
                                    timerTime={timerTime}
                                    setTimerTime={setTimerTime}
                                />
                            )}
                            <PreviewInput
                                label="비밀번호"
                                width="100%"
                                msg="8~16자의 영문 대소문자, 숫자, 특수문자만 가능합니다."
                                name="password"
                                onChange={handleJoinUserDataChange}
                            />
                            <PreviewInput
                                label="비밀번호 재확인"
                                width="100%"
                                name="password_confirm"
                                onChange={handleJoinUserDataChange}
                            />
                        </Column>
                        {/* 이용약관 동의 */}
                        <Terms setTermsAgree={setTermsAgree} />
                        <Button width="100%" onClick={handleJoinButtonClick}>
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
    ${flex({ flexDirection: 'column' })};
    gap: 36px;
    width: 446px;
    margin: 120px 0;
`;
