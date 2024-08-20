import { useNoticeFileStore } from '@/store/notice/noticeFile';
import { color } from '@maru/design-token';
import { IconClose } from '@maru/icon';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import type { ChangeEventHandler } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import NoticeUploader from './NoticeUploader/NoticeUploader';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onFileAttach: (file: File | null) => void;
}

const NoticeUploadModal = ({ isOpen, onClose, onFileAttach }: Props) => {
  const [fileData, setFileData] = useNoticeFileStore();
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
    const selectedFile = files[0];
    setFileData(selectedFile);
    onFileAttach(selectedFile);
  };

  const removeFileAndCloseModal = () => {
    setFileData(null);
    removeFileInputValue();
    onFileAttach(null);
    onClose();
  };

  const handleAttachFile = () => {
    if (fileData) {
      onClose();
    }
  };

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledNoticeUploadModal>
        <Row justifyContent="space-between">
          <Column gap={8}>
            <Text fontType="H2" color={color.gray900}>
              파일 첨부
            </Text>
            <Text fontType="p3" color={color.gray600}>
              크기 20MB 이내 파일 1개만 첨부 가능합니다.
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
        <NoticeUploader
          removeFileInputValue={removeFileAndCloseModal}
          handleUploadFileButtonClick={handleUploadFileButtonClick}
        />
        <Row gap={16} style={{ alignSelf: 'flex-end' }}>
          <Button size="SMALL" styleType="SECONDARY" onClick={removeFileAndCloseModal}>
            취소
          </Button>
          <Button
            size="SMALL"
            styleType={fileData ? 'PRIMARY' : 'DISABLED'}
            onClick={handleAttachFile}
          >
            첨부하기
          </Button>
        </Row>
      </StyledNoticeUploadModal>
      <input type="file" ref={fileInputRef} onChange={handleFileDataChange} hidden />
    </BlurBackground>
  );
};

export default NoticeUploadModal;

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

const StyledNoticeUploadModal = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 720px;
  height: 540px;
  padding: 36px;
  border-radius: 16px;
  background: ${color.white};
`;
