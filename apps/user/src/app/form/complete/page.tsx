'use client';

import CheckFormCompleteItem from '@/components/form/CheckFormCompleteItem/CheckFormCompleteItem';
import { AppLayout } from '@/layouts';
import { IconCancelCircle, IconCheckCircle } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Button, Column, Row } from '@maru/ui';
import { flex } from '@maru/utils';
import styled, { keyframes } from 'styled-components';

const FormCompletePage = () => {
    const complete = true;

    return (
        <AppLayout header={true}>
            <StyledFormCompletePage>
                <Row
                    gap={8}
                    style={{ marginBottom: '55px', position: 'relative', height: 64 }}
                    alignItems="center">
                    <CircleIconBox>
                        {complete ? (
                            <IconCheckCircle width="100%" height="100%" />
                        ) : (
                            <IconCancelCircle width="100%" height="100%" />
                        )}
                    </CircleIconBox>
                    <AlertMessage>
                        {complete ? '원서 초안 작성 완료' : '아직 작성하지 않은 곳이 있어요'}
                    </AlertMessage>
                </Row>
                <FormCompleteContent>
                    <Column gap={12}>
                        <Desc>
                            {complete ? (
                                <p>원서 접수에 필요한 초안을 모두 작성하셨습니다.</p>
                            ) : (
                                <p>원서 작성 중 입력하지 않은 곳이 있습니다.</p>
                            )}
                        </Desc>
                        <StressDesc>
                            {complete ? (
                                <p>
                                    원서 초안 제출 시 부산소프트웨어마이스터고등학교 입학전형에
                                    응시한 것으로 처리되며
                                    <br />더 이상 입학원서 수정이 불가능합니다.
                                </p>
                            ) : (
                                <p>
                                    원서 작성 중 입력하지 않은 곳이 있다면 초안을 제출할 수
                                    없습니다.
                                </p>
                            )}
                        </StressDesc>
                        <Desc>
                            {complete ? (
                                <p>잘못 입력한 곳이 있는지 면밀히 검토해주시기 바랍니다.</p>
                            ) : (
                                <p>또한 잘못 입력한 곳이 있는지 면밀히 검토해주시기 바랍니다.</p>
                            )}
                        </Desc>
                    </Column>
                    <CheckFormCompleteBox>
                        <CheckFormCompleteItem
                            formStep="지원자 정보"
                            maxCompleteOfNumber={5}
                            completeOfNumber={5}
                        />
                        <CheckFormCompleteItem
                            formStep="지원자 정보"
                            maxCompleteOfNumber={5}
                            completeOfNumber={5}
                        />
                        <CheckFormCompleteItem
                            formStep="지원자 정보"
                            maxCompleteOfNumber={5}
                            completeOfNumber={5}
                        />
                        <CheckFormCompleteItem
                            formStep="지원자 정보"
                            maxCompleteOfNumber={5}
                            completeOfNumber={5}
                        />
                        <CheckFormCompleteItem
                            formStep="지원자 정보"
                            maxCompleteOfNumber={5}
                            completeOfNumber={5}
                        />
                        <CheckFormCompleteItem
                            formStep="지원자 정보"
                            maxCompleteOfNumber={5}
                            completeOfNumber={5}
                        />
                    </CheckFormCompleteBox>

                    {complete && (
                        <Column gap={24}>
                            <Question>제출하시겠습니까?</Question>
                            <Row gap={16}>
                                <Button option="SECONDARY" size="LARGE">
                                    다시 한번 확인하기
                                </Button>
                                <Button size="LARGE">원서 초안 제출하기</Button>
                            </Row>
                        </Column>
                    )}
                </FormCompleteContent>
            </StyledFormCompletePage>
        </AppLayout>
    );
};

export default FormCompletePage;

const StyledFormCompletePage = styled.div`
    ${flex({ flexDirection: 'column' })}
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
`;

const circleIconAnimation = keyframes`
    to {
        transform: translate(0, 0) scale(1);
    }
`;

const CircleIconBox = styled.div`
    width: 64px;
    height: 64px;
    transform: translate(368px, 155px) scale(calc(150 / 64));

    animation: ${circleIconAnimation} 0.75s ease-in-out 1.5s forwards;
`;

const alertMessageAnimation = keyframes`
    to {
        ${font.H1};
        transform: translate(0, 0);
    }
`;

const AlertMessage = styled.p`
    ${font.D2}
    color: ${color.gray900};
    transform: translate(55.5px, 303px);

    animation: ${alertMessageAnimation} 0.75s ease-in-out 1.5s forwards;
`;

const formCompleteContentAnimation = keyframes`
    to {
        opacity: 1;
        visibility: visible;
    }
`;

const FormCompleteContent = styled.div`
    visibility: hidden;
    opacity: 0;

    animation: ${formCompleteContentAnimation} 0.75s ease-in-out 1.5s forwards;
`;

const Desc = styled.p`
    ${font.p1}
    color: ${color.gray900};
`;

const StressDesc = styled.p`
    ${font.H4}
    color: ${color.red};
`;

const CheckFormCompleteBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
    height: 248px;
    margin: 48px 0px;
`;

const Question = styled.p`
    ${font.H3}
    color: ${color.black};
`;
