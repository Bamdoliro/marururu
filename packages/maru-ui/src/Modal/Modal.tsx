import { IconClose } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { ReactNode } from 'react';
import Button from '../Button/Button';
import Column from '../Flex/Column';
import Row from '../Flex/Row';
import styled from 'styled-components';

interface PropsType {
    title: string;
    desc?: string;
    content: string;
    onClose: () => void;
    onConfirm: () => void;
}

const Modal = ({ title, desc, content, onClose, onConfirm }: PropsType) => {
    return (
        <DIM>
            <StyledModal>
                <Column
                    style={{ paddingBottom: 20, borderBottom: `1px solid ${color.gray200}` }}
                    gap={8}>
                    <Row justifyContent="space-between" alignItems="center">
                        <Title>{title}</Title>
                        <IconClose color={color.gray600} width={36} height={36} cursor="pointer" />
                    </Row>
                    <Desc>{desc}</Desc>
                </Column>
                <Column
                    style={{ height: '100%', width: '100%', marginTop: 20 }}
                    alignItems="flex-start">
                    <Content>{content}</Content>
                </Column>
                <Row gap={16} justifyContent="flex-end">
                    <Button option="SECONDARY" size="SMALL" onClick={onClose}>
                        취소
                    </Button>
                    <Button size="SMALL" onClick={onConfirm}>
                        완료
                    </Button>
                </Row>
            </StyledModal>
        </DIM>
    );
};

export default Modal;

const DIM = styled.div`
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

const StyledModal = styled.div`
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

const Desc = styled.p`
    ${font.p3}
    color: ${color.gray600};
`;

const Content = styled.p`
    ${font.p2}
    color:${color.gray900};
`;
