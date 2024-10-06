import { useNoticeDetailQuery } from '@/services/notice/queries';
import { formatFileName, resizeTextarea } from '@/utils';
import { color, font } from '@maru/design-token';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import type { ChangeEventHandler } from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNotieEditAction } from './NoticeEdit.hooks';
import NoticeUploadModal from '../NoticeUploadModal/NoticeUploadModal';
import { useOverlay } from '@toss/use-overlay';
import { IconClip } from '@maru/icon';

interface Props {
  id: number;
}

const NoticeEdit = ({ id }: Props) => {
  const { data: noticeDetailData } = useNoticeDetailQuery(id);

  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [noticeData, setNoticeData] = useState({
    title: noticeDetailData?.title ?? '',
    content: noticeDetailData?.content ?? '',
    fileList: noticeDetailData?.fileList?.map((file) => file.fileName) ?? [],
  });

  const { handleNoticeEditButtonClick } = useNotieEditAction(id, {
    ...noticeData,
    fileNameList: noticeData.fileList.map((file) => file),
  });
  const overlay = useOverlay();

  const handleNoticeDataChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setNoticeData({ ...noticeData, [name]: value });
    console.log(noticeData);
    resizeTextarea(contentTextareaRef);
  };

  useEffect(() => resizeTextarea(contentTextareaRef), []);

  const handleNoticeFileModalButtonClick = () => {
    overlay.open(({ isOpen, close }) => (
      <NoticeUploadModal
        isOpen={isOpen}
        onClose={close}
        onFileAttach={(file) => {
          if (file) {
            setNoticeData((prevData) => ({
              ...prevData,
              fileList: [...prevData.fileList, file.name],
            }));
          }
        }}
      />
    ));
  };

  const handleDeleteNoticeFile = (fileNameToDelete: string) => {
    setNoticeData((prevData) => ({
      ...prevData,
      fileList: prevData.fileList.filter((file) => file !== fileNameToDelete),
    }));
  };

  return (
    <StyledNoticeEdit>
      <Column gap={36}>
        <NoticeHeader>
          <TitleInput
            name="title"
            value={noticeData.title}
            onChange={handleNoticeDataChange}
            placeholder="제목을 입력해주세요"
          />
          <Row gap={10} alignItems="flex-end">
            <Button
              size="SMALL"
              icon="CLIP_ICON"
              styleType={noticeData.fileList.length >= 3 ? 'DISABLED' : 'SECONDARY'}
              width={124}
              onClick={handleNoticeFileModalButtonClick}
              disabled={noticeData.fileList.length >= 3}
            >
              파일 첨부
            </Button>
            <Button size="SMALL" onClick={handleNoticeEditButtonClick}>
              수정하기
            </Button>
          </Row>
        </NoticeHeader>
        <ContentTextarea
          ref={contentTextareaRef}
          name="content"
          value={noticeData.content}
          onChange={handleNoticeDataChange}
          placeholder="내용을 작성해주세요."
          rows={1}
        />
        {noticeData.fileList && (
          <Column gap={12}>
            {noticeData.fileList.map((file, index) => (
              <Row alignItems="center" gap={12} key={index}>
                <StyledNoticeFile>
                  <Row alignItems="center" gap={10}>
                    <IconClip width={19} height={12} />
                    <Text fontType="p3" color={color.gray750}>
                      {formatFileName(file)}
                    </Text>
                  </Row>
                </StyledNoticeFile>
                <DeleteButton onClick={() => handleDeleteNoticeFile(file)}>
                  <Text fontType="caption" color={color.red}>
                    [삭제]
                  </Text>
                </DeleteButton>
              </Row>
            ))}
          </Column>
        )}
      </Column>
    </StyledNoticeEdit>
  );
};

export default NoticeEdit;

const StyledNoticeEdit = styled.div`
  ${flex({ flexDirection: 'column' })}
  padding: 0px 7px;
`;

const NoticeHeader = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  gap: 172px;
  width: 100%;
  height: 66px;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 16px;
`;

const TitleInput = styled.input`
  ${font.H1}
  color: ${color.gray900};
  width: 100%;

  &::placeholder {
    color: ${color.gray400};
  }
`;

const ContentTextarea = styled.textarea`
  ${font.p2};
  color: ${color.gray900};

  &::placeholder {
    color: ${color.gray500};
  }
  resize: none;
`;

const StyledNoticeFile = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })};
  gap: 12px;
  height: 36px;
  padding: 0 15px 0 15px;
  border-radius: 999px;
  background: ${color.gray200};
  width: auto;
  min-width: fit-content;
  max-width: fit-content;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    background-color: ${color.gray300};
  }
`;

const DeleteButton = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })};
  cursor: pointer;
`;
