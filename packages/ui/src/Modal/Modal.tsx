import { color } from '@maru/design-token';
import { IconClose } from '@maru/icon';
import { flex } from '@maru/utils';
import type { CSSProperties, ReactNode } from 'react';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Column from '../Flex/Column';
import Row from '../Flex/Row';
import Text from '../Text/Text';

interface Props {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  style?: CSSProperties;
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  mode: 'complete' | 'check' | 'login';
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
  mode,
}: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledModal style={{ width, height, ...style }}>
        <Row
          style={{ marginBottom: 20 }}
          justifyContent="space-between"
          alignItems="center"
        >
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
          {mode === 'complete' ? (
            <>
              <Button styleType="SECONDARY" size="SMALL" onClick={onClose}>
                취소
              </Button>
              <Button size="SMALL" onClick={onConfirm}>
                완료
              </Button>
            </>
          ) : mode === 'login' ? (
            <>
              <Button styleType="SECONDARY" size="SMALL" onClick={onClose}>
                닫기
              </Button>
              <Button size="SMALL" onClick={onConfirm}>
                로그인 하러 가기
              </Button>
            </>
          ) : (
            <Button size="SMALL" onClick={onConfirm}>
              확인
            </Button>
          )}
        </Row>
      </StyledModal>
    </BlurBackground>
  );
};

export default Modal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
