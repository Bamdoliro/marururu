import { CompleteAlaram } from '@/components/form';
import { AppLayout } from '@/layouts';
import { useInterval } from '@maru/hooks';
import { IconCheckCircle } from '@maru/icon';
import { color } from '@maru/theme';
import { Row, Button, Text, Column } from '@maru/ui';
import { flex } from '@maru/utils';
import { useState } from 'react';
import styled from 'styled-components';
import { useCTAButton } from './초안제출완료.hooks';

const 초안제출완료 = () => {
    const [isShowCompleteAlaram, setIsShowCompleteAlaram] = useState(true);
    const { handleGoMainPageButtonClick, handleGo최종제출PageButtonClick } = useCTAButton();

    useInterval(() => {
        setIsShowCompleteAlaram(false);
    }, 1000);

    return (
        <AppLayout header>
            {isShowCompleteAlaram ? (
                <CompleteAlaram
                    isComplete={isShowCompleteAlaram}
                    completeText="원서 초안 제출 완료"
                />
            ) : (
                <Styled초안제출완료>
                    <Row gap={8} alignItems="center">
                        <IconCheckCircle width={64} height={64} />
                        <Text fontType="H1" color={color.gray900}>
                            원서 초안 제출 완료
                        </Text>
                    </Row>
                    <Column gap={12}>
                        <Text fontType="p1" color={color.gray900}>
                            원서 초안을 제출 완료하셨습니다.
                        </Text>
                        <Text fontType="H4" color={color.red}>
                            원서 초안과 기타 제출서류를 함께 제출해야 최종적으로 원서 제출이
                            완료됩니다.
                        </Text>
                    </Column>
                    <Row gap={16}>
                        <Button
                            onClick={handleGoMainPageButtonClick}
                            option="SECONDARY"
                            size="LARGE">
                            홈으로 돌아가기
                        </Button>
                        <Button onClick={handleGo최종제출PageButtonClick} size="LARGE">
                            최종 제출 페이지로 이동하기
                        </Button>
                    </Row>
                </Styled초안제출완료>
            )}
        </AppLayout>
    );
};

export default 초안제출완료;

const Styled초안제출완료 = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap:48px;
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
`;
