import { Button, Row } from '@maru/ui';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClickConfirm: () => void;
    onClickCancel: () => void;
    confirmText?: string;
}

const ConfirmButton = ({ onClickConfirm, onClickCancel, confirmText, disabled, style }: Props) => {
    return (
        <Row gap={16} style={style}>
            <Button option="SECONDARY" size="SMALL" onClick={onClickCancel}>
                취소
            </Button>
            <Button
                size="SMALL"
                onClick={onClickConfirm}
                option={disabled ? 'DISABLED' : 'PRIMARY'}>
                {confirmText || '완료'}
            </Button>
        </Row>
    );
};

export default ConfirmButton;
