import { resizeTextarea } from '@/utils';
import { color, font } from '@maru/design-token';
import { Button, Column, Row } from '@maru/ui';
import { flex } from '@maru/utils';
import type { ChangeEventHandler } from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNoticePostAction } from './NoticePost.hooks';
import { useOverlay } from '@toss/use-overlay';
import NoticeUploadModal from '../NoticeUploadModal/NoticeUploadModal';
import { IconClip } from '@maru/icon';

const NoticePost = () => {
  const overlay = useOverlay();
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [noticeData, setNoticeData] = useState({
    title: '',
    content: '',
  });
  const [fileName, setFileName] = useState<string | null>(null);

  const { handleNoticePostButtonClick } = useNoticePostAction(noticeData);

  const handleNoticeDataChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setNoticeData({ ...noticeData, [name]: value });

    resizeTextarea(contentTextareaRef);
  };

  const handleNoticeFileModalButtonClick = () => {
    overlay.open(({ isOpen, close }) => (
      <NoticeUploadModal
        isOpen={isOpen}
        onClose={close}
        onFileAttach={(file) => setFileName(file?.name || null)}
      />
    ));
  };

  return (
    <StyledNoticePost>
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
              styleType="SECONDARY"
              width={124}
              onClick={handleNoticeFileModalButtonClick}
            >
              파일 첨부
            </Button>
            <Button size="SMALL" onClick={handleNoticePostButtonClick}>
              게시하기
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
        {fileName && (
          <StyledNoticeFile>
            <Row alignItems="center" gap={10}>
              <IconClip width={19} height={12} />
              {fileName}
            </Row>
          </StyledNoticeFile>
        )}
      </Column>
    </StyledNoticePost>
  );
};

export default NoticePost;

const StyledNoticePost = styled.div`
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
