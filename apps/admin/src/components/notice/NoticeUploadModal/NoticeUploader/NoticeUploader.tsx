import { useVisibleNoticeFileStore } from '@/store/notice/noticeFile';
import { color } from '@maru/design-token';
import { IconClose } from '@maru/icon';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useEffect, useState, type DragEvent } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  removeFileInputValue: () => void;
  handleUploadFileButtonClick: () => void;
}

const NoticeUploader = ({
  isOpen,
  removeFileInputValue,
  handleUploadFileButtonClick,
}: Props) => {
  const [visibleFile, setVisibleFile] = useVisibleNoticeFileStore();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisibleFile(null);
    }
  }, [isOpen, setVisibleFile]);

  const handleUploadCancelButtonClick = () => {
    removeFileInputValue();
    setVisibleFile(null);
  };

  const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setVisibleFile(droppedFile);
      setIsDragging(false);
    }
  };

  return (
    <StyledNoticeUploader
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      $isDragging={isDragging}
    >
      <Column gap={12} alignItems="center">
        {visibleFile ? (
          <FileNameBox>
            <Text fontType="p2" color={color.gray900}>
              {visibleFile.name}
            </Text>
            <IconClose
              width={18}
              height={18}
              cursor="pointer"
              onClick={handleUploadCancelButtonClick}
            />
          </FileNameBox>
        ) : (
          <>
            <Button size="SMALL" onClick={handleUploadFileButtonClick}>
              파일 선택
            </Button>
            <Text fontType="p2" color={color.gray500}>
              또는
            </Text>
            <Text fontType="p2" color={color.gray500}>
              여기로 파일을 끌어오세요
            </Text>
          </>
        )}
      </Column>
    </StyledNoticeUploader>
  );
};

export default NoticeUploader;

const StyledNoticeUploader = styled.div<{ $isDragging: boolean }>`
  ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })};
  height: 240px;
  border-radius: 6px;
  background: ${color.gray50};
  border: 1px dashed ${(props) => (props.$isDragging ? color.maruDefault : color.gray400)};
`;

const FileNameBox = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })};
  gap: 12px;
  height: 36px;
  padding: 0 8px 0 12px;
  border-radius: 6px;
  background: ${color.gray200};
`;
