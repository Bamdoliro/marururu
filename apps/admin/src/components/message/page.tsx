import { MESSAGE_CATEGORY } from '@/constants/message/constants';
import type { Category } from '@/types/message/client';
import { color, font } from '@maru/design-token';
import { resizeTextarea } from '@/utils';
import { Button, Row, Dropdown, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import type { ChangeEventHandler } from 'react';
import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useMessagePostAction } from './MessagePost.hooks';

const Message = () => {
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [messageData, setMessageData] = useState({
    title: '',
    content: '',
    category: '',
  });

  const { handleMessagePostButtonClick } = useMessagePostAction(messageData);

  const handleMessageDataChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setMessageData({ ...messageData, [name]: value });

    resizeTextarea(contentTextareaRef);
  };

  const handleMessageCategoryChange = (value: string, name: string) => {
    setMessageData({ ...messageData, [name]: value });
  };

  return (
    <StyledMessage>
      <Text fontType="H1" color={color.gray900}>
        단체 메시지 발송
      </Text>
      <MessageHeader>
        <TitleInput
          name="title"
          onChange={handleMessageDataChange}
          placeholder="제목을 입력해주세요"
        ></TitleInput>
        <Row gap={32}>
          <Dropdown
            name="mail"
            data={[
              { value: 'SCHOOL_LIFE', label: '원서 승인 완료자' },
              { value: 'SUBMIT_DOCUMENT', label: '원서 반려자' },
              { value: 'ADMISSION_PROCESS', label: '1차 합격자' },
              { value: 'TOP_QUESTION', label: '최종 합격자' },
            ]}
            size="SMALL"
            value={MESSAGE_CATEGORY[messageData.category as Category]}
            placeholder="받는 사람"
            width="160px"
            onChange={handleMessageCategoryChange}
          />
          <Button size="SMALL" onClick={handleMessagePostButtonClick}>
            발송하기
          </Button>
        </Row>
      </MessageHeader>
      <Separator></Separator>
      <ContentTextarea
        ref={contentTextareaRef}
        name="content"
        value={messageData.content}
        onChange={handleMessageDataChange}
        placeholder="내용을 작성해주세요."
        rows={1}
      />
    </StyledMessage>
  );
};

export default Message;

const StyledMessage = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  min-height: 100vh;
  padding: 64px 60px;
`;

const MessageHeader = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 126px;
`;

const TitleInput = styled.input`
  ${font.H1}
  color: ${color.gray900};
  width: 875px;
  &::placeholder {
    color: ${color.gray400};
  }
`;
const Separator = styled.p`
  border: 1px solid ${color.gray200};
  margin-bottom: 16px 0;
  width: 100%;
  margin-bottom: 40px;
`;

const ContentTextarea = styled.textarea`
  ${font.p2};
  color: ${color.gray900};

  &::placeholder {
    color: ${color.gray500};
  }
  resize: none;
`;
