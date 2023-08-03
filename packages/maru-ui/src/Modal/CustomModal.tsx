import { IconClose } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { ReactNode } from 'react';
import Button from '../Button/Button';
import Row from '../Flex/Row';
import styled from 'styled-components';

interface PropsType {
    title: string;
    content: ReactNode;
    onClose: () => void;
    onConfirm: () => void;
}

const CustomModal = ({ title, content, onClose, onConfirm }: PropsType) => {
    return (
        <BlurBackground>
            <StyledCustomModal>
                <Row
                    style={{ marginBottom: 20 }}
                    justifyContent="space-between"
                    alignItems="center">
                    <Title>{title}</Title>
                    <IconClose color={color.gray600} width={36} height={36} cursor="pointer" />
                </Row>
                {content}
                <Row gap={16} justifyContent="flex-end">
                    <Button option="SECONDARY" size="SMALL" onClick={onClose}>
                        취소
                    </Button>
                    <Button size="SMALL" onClick={onConfirm}>
                        완료
                    </Button>
                </Row>
            </StyledCustomModal>
        </BlurBackground>
    );
};

export default CustomModal;

const BlurBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const StyledCustomModal = styled.div`
    ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
    width: 600px;
    height: 350px;
    min-height: 350px;
    padding: 36px;
    background-color: ${color.white};
    border-radius: 16px;
`;

const Title = styled.p`
    ${font.H2}
    color: ${color.gray900};
`;
