'use client';

import { useFormStepState } from '@/hooks/state/useFormStepState';
import { AppLayout } from '@/layouts';
import { useInterval } from '@maru/hooks';
import { IconCancelCircle, IconCheckCircle } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useState } from 'react';
import { useCheckFilledForm, useCTAButton, useSubmitDraftFormAction } from './초안작성완료.hooks';
import { CompleteAlaram, CheckFormComplete, DraftFormConfirm } from '@/components/form';
import styled from 'styled-components';
import { useOverlay } from '@toss/use-overlay';

const 초안작성완료 = () => {
    const overlay = useOverlay();
    const [isShowCompleteAlaram, setIsShowCompleteAlaram] = useState(true);
    const { setFormStep } = useFormStepState();
    const { handleAgainCheckFormButtonClick } = useCTAButton();
    const {
        applicantFieldCount,
        parentFieldCount,
        educationFieldCount,
        typeFieldCount,
        documentFieldCount,
        isFilledForm,
    } = useCheckFilledForm();
    const { handleSubmitDraftFormButtonClick } = useSubmitDraftFormAction();

    useInterval(() => {
        setIsShowCompleteAlaram(false);
    }, 1000);

    const openDraftFormConfrim = () => {
        overlay.open(({ isOpen, close }) => (
            <DraftFormConfirm
                isOpen={isOpen}
                onClose={close}
                onConfirm={() => {
                    handleSubmitDraftFormButtonClick();
                    close();
                }}
            />
        ));
    };

    return (
        <AppLayout header>
            {isShowCompleteAlaram ? (
                <CompleteAlaram
                    isComplete={isFilledForm}
                    completeText="원서 초안 작성 완료"
                    inCompleteText="아직 작성하지 않은 곳이 있어요"
                />
            ) : (
                <Styled초안작성완료 isFilledForm={isFilledForm}>
                    <Row gap={8} alignItems="center">
                        {isFilledForm ? (
                            <IconCheckCircle width={64} height={64} />
                        ) : (
                            <IconCancelCircle width={64} height={64} />
                        )}
                        <Text fontType="H1" color={color.gray900}>
                            {isFilledForm
                                ? '원서 초안 작성 완료'
                                : '아직 작성하지 않은 곳이 있어요'}
                        </Text>
                    </Row>
                    <Column gap={12}>
                        {isFilledForm ? (
                            <Text fontType="p1" color={color.gray900}>
                                원서 접수에 필요한 초안을 모두 작성하셨습니다.
                            </Text>
                        ) : (
                            <Text fontType="p1" color={color.gray900}>
                                원서 작성 중 입력하지 않은 곳이 있습니다.
                            </Text>
                        )}
                        {isFilledForm ? (
                            <Text fontType="H4" color={color.red}>
                                원서 초안 제출 시 부산소프트웨어마이스터고등학교 입학전형에 응시한
                                것으로 처리되며
                                <br />더 이상 입학원서 수정이 불가능합니다.
                            </Text>
                        ) : (
                            <Text fontType="H4" color={color.red}>
                                원서 작성 중 입력하지 않은 곳이 있다면 초안을 제출할 수 없습니다.
                            </Text>
                        )}
                        {isFilledForm ? (
                            <Text fontType="p1" color={color.gray900}>
                                잘못 입력한 곳이 있는지 면밀히 검토해주시기 바랍니다.
                            </Text>
                        ) : (
                            <Text fontType="p1" color={color.gray900}>
                                또한 잘못 입력한 곳이 있는지 면밀히 검토해주시기 바랍니다.
                            </Text>
                        )}
                    </Column>
                    <CheckFormCompleteBox>
                        <CheckFormComplete
                            onClick={() => setFormStep('지원자정보')}
                            formStep="지원자 정보"
                            maxCompleteOfNumber={5}
                            completeOfNumber={applicantFieldCount}
                        />
                        <CheckFormComplete
                            onClick={() => setFormStep('보호자정보')}
                            formStep="보호자 정보"
                            maxCompleteOfNumber={5}
                            completeOfNumber={parentFieldCount}
                        />
                        <CheckFormComplete
                            onClick={() => setFormStep('출신학교및학력')}
                            formStep="출신학교 및 학력"
                            maxCompleteOfNumber={8}
                            completeOfNumber={educationFieldCount}
                        />
                        <CheckFormComplete
                            onClick={() => setFormStep('전형선택')}
                            formStep="전형 선택"
                            maxCompleteOfNumber={1}
                            completeOfNumber={typeFieldCount}
                        />
                        <CheckFormComplete
                            onClick={() => setFormStep('성적입력')}
                            formStep="성적 입력"
                            maxCompleteOfNumber={4}
                            completeOfNumber={4}
                        />
                        <CheckFormComplete
                            onClick={() => setFormStep('자기소개서')}
                            formStep="자기소개서 및 학업계획서"
                            maxCompleteOfNumber={2}
                            completeOfNumber={documentFieldCount}
                        />
                    </CheckFormCompleteBox>

                    {isFilledForm && (
                        <Column gap={24}>
                            <Text fontType="H3" color={color.gray900}>
                                제출하시겠습니까?
                            </Text>
                            <Row gap={16}>
                                <Button
                                    onClick={handleAgainCheckFormButtonClick}
                                    option="SECONDARY"
                                    size="LARGE">
                                    다시 한번 확인하기
                                </Button>
                                <Button onClick={openDraftFormConfrim} size="LARGE">
                                    원서 초안 제출하기
                                </Button>
                            </Row>
                        </Column>
                    )}
                </Styled초안작성완료>
            )}
        </AppLayout>
    );
};

export default 초안작성완료;

const Styled초안작성완료 = styled.div<{ isFilledForm: boolean }>`
    ${flex({ flexDirection: 'column' })}
    gap: ${(props) => (props.isFilledForm ? '48px' : '62px')};
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
`;

const CheckFormCompleteBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
    height: 248px;
`;
