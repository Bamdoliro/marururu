'use client';

import Terms from '@/components/signup/Terms/Terms';
import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Button, ButtonInput, Column, Input, PreviewInput, Text, TimeLimitInput } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { useInput, useJoinAction, useTimer, useVerificationAction } from './signup.hooks';

const SignUpPage = () => {
    const [termsAgree, setTermsAgree] = useState(false);
    const { startTimer, timerTime, setTimerTime } = useTimer();
    const { joinUserData, handleJoinUserDataChange } = useInput();
    const {
        handleRequestVerificationButtonClick,
        handleVerificationButtonClick,
        isRequestVerificationDisabled,
        isVerificationDisabled,
        isVerification,
    } = useVerificationAction(joinUserData);
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
                    <SignUpBox>
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
                            <ButtonInput
                                label="전화번호 인증"
                                buttonText={isVerification ? '재전송' : '인증'}
                                onClick={() => {
                                    handleRequestVerificationButtonClick();
                                    startTimer();
                                }}
                                enabled={isRequestVerificationDisabled}
                                type="phoneNumber"
                                placeholder="- 없이 입력해주세요."
                                width="100%"
                                name="phoneNumber"
                                onChange={handleJoinUserDataChange}
                                value={joinUserData.phoneNumber}
                            />
                            {isVerification && (
                                <TimeLimitInput
                                    label="인증코드"
                                    width="100%"
                                    maxLength={6}
                                    name="code"
                                    onChange={handleJoinUserDataChange}
                                    onClick={handleVerificationButtonClick}
                                    timerTime={isVerificationDisabled ? 0 : timerTime}
                                    setTimerTime={setTimerTime}
                                    isError={joinUserData.code.length < 6}
                                    buttonText="인증번호 확인"
                                    enabled={isVerificationDisabled}
                                    errorMessage="발송된 전화번호의 인증번호를 입력해주세요."
                                />
                            )}
                            <PreviewInput
                                label="비밀번호"
                                width="100%"
                                name="password"
                                placeholder="비밀번호를 입력해주세요."
                                onChange={handleJoinUserDataChange}
                            />
                            <PreviewInput
                                label="비밀번호 재확인"
                                width="100%"
                                name="password_confirm"
                                placeholder="비밀번호를 다시 입력해주세요."
                                onChange={handleJoinUserDataChange}
                                isError={joinUserData.password !== joinUserData.password_confirm}
                                errorMessage="비밀번호가 맞지 않습니다."
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
    height: 100vh;
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

const SignUpBox = styled.div`
    ${flex({ flexDirection: 'column' })};
    gap: 36px;
    width: 446px;
    height: fit-content;
    margin: 120px 0;
`;
