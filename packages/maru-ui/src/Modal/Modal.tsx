import { IconClose } from '@maru/icon';
import { color } from '@maru/theme';
import { flex } from '@maru/utils';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Column from '../Flex/Column';
import Row from '../Flex/Row';
import Text from '../Text/Text';

interface PropsType {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    style?: CSSProperties;
    height?: CSSProperties['height'];
    width?: CSSProperties['width'];
}

const Modal = ({
    title,
    children,
    isOpen,
    onClose,
    onConfirm,
    style,
    height,
    width,
}: PropsType) => {
    return (
        <BlurBackground isOpen={isOpen}>
            <StyledModal style={{ width, height, ...style }}>
                <Row
                    style={{ marginBottom: 20 }}
                    justifyContent="space-between"
                    alignItems="center">
                    <Text fontType="H2" color={color.gray900}>
                        {title}
                    </Text>
                    <IconClose
                        onClick={onClose}
                        color={color.gray600}
                        width={36}
                        height={36}
                        cursor="pointer"
                    />
                </Row>
                <Column style={{ width: '100%', height: '100%' }}>{children}</Column>
                <Row gap={16} justifyContent="flex-end">
                    <Button option="SECONDARY" size="SMALL" onClick={onClose}>
                        취소
                    </Button>
                    <Button size="SMALL" onClick={onConfirm}>
                        완료
                    </Button>
                </Row>
            </StyledModal>
        </BlurBackground>
    );
};

export default Modal;

const BlurBackground = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
`;

const StyledModal = styled.div`
    ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
    width: 600px;
    height: 350px;
    padding: 36px;
    border-radius: 16px;
    background-color: ${color.white};
`;
