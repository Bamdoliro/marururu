'use client';

import { CancelCircleIcon, CheckCircleIcon } from '@/components/common/Icons';
import { AppLayout } from '@/layouts';
import { color, font } from '@maru/theme';
import { Button, Column, Row } from '@maru/ui';
import { flex } from '@maru/utils';
import styled, { keyframes } from 'styled-components';

const FormCompletePage = () => {
    const complete = true;

    return (
        <AppLayout header>
            <StyledFormCompletePage>
                <Row
                    gap={8}
                    style={{ marginBottom: '55px', position: 'relative', height: 64 }}
                    alignItems="center">
                    <CircleIconBox>
                        {complete ? (
                            <CheckCircleIcon size="100%" />
                        ) : (
                            <CancelCircleIcon size="100%" />
                        )}
                    </CircleIconBox>
                    <AlertMessage>
                        {complete ? '원서를 모두 작성했어요' : '아직 작성하지 않은 곳이 있어요'}
                    </AlertMessage>
                </Row>
                <Content>
                    <Column gap={12}>
                        <Desc>
                            지원확인 및 수험표 발행을 하셔야 인터넷 원서 접수가 완료되며 수험번호가
                            부여됩니다.
                        </Desc>
                        <StressDesc>
                            수험번호 부여 시 부산소프트웨어마이스터고등학교 입학전형에 응시한 것으로
                            <br />
                            처리되며 입학원서는 수정이 불가능합니다.
                        </StressDesc>
                        <Desc>면밀히 검토하시고 확인해 주십시오.</Desc>
                    </Column>
                    <Column gap={16} style={{ margin: '48px 0px' }} alignItems="flex-start">
                        <CheckButton>[ 입학원서 확인하기 ]</CheckButton>
                        <CheckButton>[ 성적일람표 확인하기 ]</CheckButton>
                        <CheckButton>[ 자기소개서 및 학업계획서 확인하기 ]</CheckButton>
                    </Column>
                    <Column gap={24}>
                        <Question>지원하시겠습니까?</Question>
                        <Row gap={16}>
                            <Button option="SECONDARY" size="LARGE">
                                다시 한번 확인할게요
                            </Button>
                            <Button size="LARGE">지원확인 및 수험표 발행</Button>
                        </Row>
                    </Column>
                </Content>
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

const contentAnimation = keyframes`
    to {
        opacity: 1;
        visibility: visible;
    }
`;

const Content = styled.div`
    visibility: hidden;
    opacity: 0;

    animation: ${contentAnimation} 0.75s ease-in-out 1.5s forwards;
`;

const Desc = styled.p`
    ${font.p1}
    color: ${color.gray900};
`;

const StressDesc = styled.p`
    ${font.H4}
    color: ${color.red};
`;

const CheckButton = styled.button`
    ${font.btn2}
    color: ${color.gray600};
`;

const Question = styled.p`
    ${font.H3}
    color: ${color.black};
`;
