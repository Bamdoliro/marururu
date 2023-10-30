import { useSecondScoreFileStore } from '@/store/form/secondScoreFile';
import { IconClose } from '@maru/icon';
import { color } from '@maru/theme';
import { Button, Column, Row, Text, TextButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler, useRef } from 'react';
import styled from 'styled-components';
import {
  useDownloadSecondScoreFormatAction,
  useUploadSecondScoreFormatAction,
} from './SecondScoreUploadModal.hooks';
import SecondScoreUploader from './SecondScoreUploader/SecondScoreUploader';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SecondScoreUploadModal = ({ isOpen, onClose }: Props) => {
  const { handleDownloadSecondScoreFormatButtonClick } =
    useDownloadSecondScoreFormatAction();
  const [fileData, setFileData] = useSecondScoreFileStore();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeFileInputValue = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.value = '';
  };

  const handleFileDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;

    if (!files || files.length === 0) return;
    setFileData(files[0]);
  };

  const removeFileAndCloseModal = () => {
    setFileData(null);
    removeFileInputValue();
    onClose();
  };

  const { handleUploadSecondScoreFormatButtonClick } = useUploadSecondScoreFormatAction(
    fileData,
    removeFileAndCloseModal
  );

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledSecondScoreUploadModal>
        <Row justifyContent="space-between">
          <Column gap={8}>
            <Text fontType="H2" color={color.gray900}>
              2차 전형 점수 입력
            </Text>
            <Text fontType="p3" color={color.gray600}>
              .xlsx 형식의 파일을 업로드해주세요.
            </Text>
          </Column>
          <IconClose
            width={36}
            height={36}
            color={color.gray600}
            cursor="pointer"
            onClick={removeFileAndCloseModal}
          />
        </Row>
        <Column gap={16}>
          <SecondScoreUploader
            removeFileInputValue={removeFileInputValue}
            handleUploadFileButtonClick={handleUploadFileButtonClick}
          />
          <TextButton
            fontType="btn2"
            color={color.gray600}
            onClick={handleDownloadSecondScoreFormatButtonClick}
          >
            [ 엑셀 포맷 다운로드 ]
          </TextButton>
        </Column>
        <Row gap={16} style={{ alignSelf: 'flex-end' }}>
          <Button size="SMALL" option="SECONDARY" onClick={removeFileAndCloseModal}>
            취소
          </Button>
          <Button
            size="SMALL"
            option={fileData ? 'PRIMARY' : 'DISABLED'}
            onClick={handleUploadSecondScoreFormatButtonClick}
          >
            입력하기
          </Button>
        </Row>
      </StyledSecondScoreUploadModal>
      <input
        type="file"
        ref={fileInputRef}
        accept=".xlsx"
        onChange={handleFileDataChange}
        hidden
      />
    </BlurBackground>
  );
};

export default SecondScoreUploadModal;

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

const StyledSecondScoreUploadModal = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 720px;
  height: 540px;
  padding: 36px;
  border-radius: 16px;
  background: ${color.white};
`;

const UploadFileBox = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
  height: 240px;
  border: 1px dashed ${color.gray400};
  border-radius: 6px;
  background: ${color.gray50};
`;
