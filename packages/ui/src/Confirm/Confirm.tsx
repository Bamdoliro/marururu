import { IconClose } from '@maru/icon';
import { color } from '@maru/design-token';
import { flex } from '@maru/utils';
import type { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Column from '../Flex/Column';
import Row from '../Flex/Row';
import Text from '../Text/Text';

interface Props {
  title: string;
  desc?: string;
  content: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmButtonText?: string;
  closeButtonText?: string;
  height?: CSSProperties['height'];
}

const Confirm = ({
  title,
  desc,
  content,
  isOpen,
  onClose,
  onConfirm,
  confirmButtonText = '확인',
  closeButtonText = '취소',
  height = 449,
}: Props) => {
  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledConfirm style={{ height, minHeight: height }}>
        <Column
          style={{ paddingBottom: 20, borderBottom: `1px solid ${color.gray200}` }}
          gap={8}
        >
          <Row justifyContent="space-between" alignItems="center">
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
          <Text fontType="p3" color={color.gray600}>
            {desc}
          </Text>
        </Column>
        <Column
          gap={8}
          style={{ height: '100%', width: '100%', marginTop: 20 }}
          alignItems="flex-start"
        >
          {content}
        </Column>
        <Row gap={16} justifyContent="flex-end">
          <Button styleType="SECONDARY" size="SMALL" onClick={onClose}>
            {closeButtonText}
          </Button>
          <Button size="SMALL" onClick={onConfirm}>
            {confirmButtonText}
          </Button>
        </Row>
      </StyledConfirm>
    </BlurBackground>
  );
};

export default Confirm;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const StyledConfirm = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 600px;
  padding: 36px;
  background-color: ${color.white};
  border-radius: 16px;
`;
