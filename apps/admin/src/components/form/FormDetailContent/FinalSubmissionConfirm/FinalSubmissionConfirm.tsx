import { IconClose } from '@maru/icon';
import { color } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler, useState } from 'react';
import { css, styled } from 'styled-components';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

type ApprovalStatus = '승인' | '반려' | '';

const FinalSubmissionConfirm = ({ isOpen, onClose }: Props) => {
    const [approvalStatus, setApprovalStatus] = useState<ApprovalStatus>('');

    const handleApprovalRadioChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setApprovalStatus(e.target.value as ApprovalStatus);
    };
    return (
        <BlurBackground $isOpen={isOpen}>
            <StyledFinalSubmissionConfirm>
                <Row justifyContent="space-between">
                    <Column gap={8}>
                        <Text fontType="H2" color={color.gray900}>
                            지원자의 원서와 증빙서류를 확인해주시기 바랍니다.
                        </Text>
                        <Text fontType="p3" color={color.gray600}>
                            무슨 명단을 엑셀로 내보내실 건가요?
                        </Text>
                    </Column>
                    <IconClose
                        width={36}
                        height={36}
                        color={color.gray600}
                        cursor="pointer"
                        onClick={onClose}
                    />
                </Row>
                <Row gap={12}>
                    <CardRadio approvalStatusType="승인" $checked={approvalStatus === '승인'}>
                        <Text
                            fontType="context"
                            color={approvalStatus === '승인' ? color.maruDefault : color.gray600}>
                            승인
                        </Text>
                        <input
                            type="radio"
                            name="approvalStatus"
                            value="승인"
                            onChange={handleApprovalRadioChange}
                            hidden
                        />
                    </CardRadio>
                    <CardRadio approvalStatusType="반려" $checked={approvalStatus === '반려'}>
                        <Text
                            fontType="context"
                            color={approvalStatus === '반려' ? color.red : color.gray600}>
                            반려
                        </Text>
                        <input
                            type="radio"
                            name="approvalStatus"
                            value="반려"
                            onChange={handleApprovalRadioChange}
                            hidden
                        />
                    </CardRadio>
                </Row>
                <Row gap={16} style={{ alignSelf: 'flex-end' }}>
                    <Button size="SMALL" option="SECONDARY" onClick={onClose}>
                        취소
                    </Button>
                    <Button size="SMALL" option={approvalStatus ? 'PRIMARY' : 'DISABLED'}>
                        내보내기
                    </Button>
                </Row>
            </StyledFinalSubmissionConfirm>
        </BlurBackground>
    );
};

export default FinalSubmissionConfirm;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const StyledFinalSubmissionConfirm = styled.div`
    ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
    width: 720px;
    height: 350px;
    padding: 36px;
    border-radius: 16px;
    background: ${color.white};
`;

const CardRadio = styled.label<{ approvalStatusType: ApprovalStatus; $checked: boolean }>`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: 100%;
    height: 80px;
    padding: 12px 0;
    background-color: white;
    border-radius: 12px;
    border: 1px solid ${color.gray200};

    ${({ $checked, approvalStatusType }) =>
        $checked &&
        (approvalStatusType === '승인'
            ? css`
                  border: 1px solid ${color.maruDefault};
                  background: ${color.maruLightBlue};
              `
            : approvalStatusType === '반려'
            ? css`
                  border: 1px solid ${color.red};
                  background: rgba(244, 67, 54, 0.1);
              `
            : null)}
`;
