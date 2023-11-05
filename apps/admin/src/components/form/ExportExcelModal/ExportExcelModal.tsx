import type { ExportExcelType } from '@/types/form/client';
import { IconClose } from '@maru/icon';
import { color } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useExportExcelAction } from './ExportExcelModal.hooks';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ExportExcelModal = ({ isOpen, onClose }: Props) => {
  const [exportExcelType, setExportExcelType] = useState<ExportExcelType | null>(null);

  const handleExportExcelTypeRadioChagne: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setExportExcelType(value as ExportExcelType);
  };

  const { handleExportExcelButtonClick } = useExportExcelAction(exportExcelType);

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledExportExcelModal>
        <Row justifyContent="space-between">
          <Column gap={8}>
            <Text fontType="H2" color={color.gray900}>
              엑셀 내보내기
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
        <Row justifyContent="space-between" gap={12}>
          <CardRadioBox $checked={exportExcelType === '전체 내보내기'}>
            <Text
              fontType="context"
              color={
                exportExcelType === '전체 내보내기' ? color.maruDefault : color.gray600
              }
            >
              전체 내보내기
            </Text>
            <input
              type="radio"
              name="exportExcelType"
              value="전체 내보내기"
              onChange={handleExportExcelTypeRadioChagne}
              hidden
            />
          </CardRadioBox>
          <CardRadioBox $checked={exportExcelType === '1차 전형 결과'}>
            <Text
              fontType="context"
              color={
                exportExcelType === '1차 전형 결과' ? color.maruDefault : color.gray600
              }
            >
              1차 전형 결과
            </Text>
            <input
              type="radio"
              name="exportExcelType"
              value="1차 전형 결과"
              onChange={handleExportExcelTypeRadioChagne}
              hidden
            />
          </CardRadioBox>
          <CardRadioBox $checked={exportExcelType === '2차 전형 결과'}>
            <Text
              fontType="context"
              color={
                exportExcelType === '2차 전형 결과' ? color.maruDefault : color.gray600
              }
            >
              2차 전형 결과
            </Text>
            <input
              type="radio"
              name="exportExcelType"
              value="2차 전형 결과"
              onChange={handleExportExcelTypeRadioChagne}
              hidden
            />
          </CardRadioBox>
          <CardRadioBox $checked={exportExcelType === '최종 합격자'}>
            <Text
              fontType="context"
              color={
                exportExcelType === '최종 합격자' ? color.maruDefault : color.gray600
              }
            >
              최종 합격자
            </Text>
            <input
              type="radio"
              name="exportExcelType"
              value="최종 합격자"
              onChange={handleExportExcelTypeRadioChagne}
              hidden
            />
          </CardRadioBox>
        </Row>
        <Row gap={16} style={{ alignSelf: 'flex-end' }}>
          <Button size="SMALL" styleType="SECONDARY" onClick={onClose}>
            취소
          </Button>
          <Button
            size="SMALL"
            styleType={exportExcelType ? 'PRIMARY' : 'DISABLED'}
            onClick={handleExportExcelButtonClick}
          >
            내보내기
          </Button>
        </Row>
      </StyledExportExcelModal>
    </BlurBackground>
  );
};

export default ExportExcelModal;

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

const StyledExportExcelModal = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 720px;
  height: 350px;
  padding: 36px;
  border-radius: 16px;
  background: ${color.white};
`;

const CardRadioBox = styled.label<{ $checked: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  height: 80px;
  width: 100%;
  padding: 12px 0px;
  background: ${color.white};
  border-radius: 12px;
  border: 1px solid ${color.gray200};

  ${({ $checked }) =>
    $checked &&
    css`
      background: ${color.maruLightBlue};
    `}
`;
