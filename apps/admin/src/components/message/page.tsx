import { MESSAGE_CATEGORY } from '@/constants/message/constants';
import type { Category } from '@/types/message/client';
import { color, font } from '@maru/design-token';
import { resizeTextarea } from '@/utils';
import { Button, Row, SubDropdown, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import type { ChangeEventHandler } from 'react';
import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useMessagePostAction, useMeisterMessagePostAction } from './MessagePost.hooks';

const Message = () => {
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [messageData, setMessageData] = useState({
    title: '',
    text: '',
    status: '',
  });

  const [meisterMessageData, setMeisterMessageData] = useState({
    title: '',
    text: '',
    formType: '',
    isChangeToRegular: false,
  });

  const { handleMessagePostButtonClick } = useMessagePostAction(messageData);
  const { handleMeisterMessagePostButtonClick } =
    useMeisterMessagePostAction(meisterMessageData);

  const handleMessageDataChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setMessageData({ ...messageData, [name]: value });
    setMeisterMessageData({ ...meisterMessageData, [name]: value });
    resizeTextarea(contentTextareaRef);
  };

  const handleMessageCategoryChange = (value: string, name: string) => {
    setMessageData({ ...messageData, [name]: value });
  };

  const handleMeisterMessageCategoryChange = (value: string) => {
    console.log(value);
    if (value === 'TRUE_REGULAR')
      setMeisterMessageData({
        ...meisterMessageData,
        formType: 'REGULAR',
        isChangeToRegular: true,
      });
    else if (value === 'FALSE_REGULAR')
      setMeisterMessageData({
        ...meisterMessageData,
        formType: 'REGULAR',
        isChangeToRegular: false,
      });
    else if (value === 'MEISTER_TALENT')
      setMeisterMessageData({
        ...meisterMessageData,
        formType: 'MEISTER_TALENT',
        isChangeToRegular: false,
      });
  };

  return (
    <StyledMessage>
      <Text fontType="H1" color={color.gray900}>
        단체 메시지 발송
      </Text>
      <MessageHeader>
        <TitleInput
          name="title"
          value={messageData.title}
          onChange={handleMessageDataChange}
          placeholder="제목을 입력해주세요"
        ></TitleInput>
        <Row gap={32}>
          <SubDropdown
            name="status"
            data={[
              { value: 'APPROVED', label: '원서 승인 완료자' },
              { value: 'REJECTED', label: '원서 반려자' },
              {
                value: 'MEISTER_CASE',
                label: '1차 합격자',
                children: [
                  { value: 'MEISTER_TALENT', label: '마이스터인재전형' },
                  { value: 'TRUE_REGULAR', label: '마이스터 -> 일반' },
                  { value: 'FALSE_REGULAR', label: '마이스터 -> 일반 제외' },
                ],
                onChange: handleMeisterMessageCategoryChange,
                setNext: true,
              },
              { value: 'FIRST_PASSED', label: '전체 1차 합격자' },
              { value: 'FINAL_SUBMITTED', label: '최종 합격자' },
            ]}
            size="SMALL"
            value={MESSAGE_CATEGORY[messageData.status as Category]}
            placeholder="받는 사람"
            width="160px"
            onChange={handleMessageCategoryChange}
          />
          <Button
            size="SMALL"
            onClick={() => {
              handleMessagePostButtonClick();
              handleMeisterMessagePostButtonClick();
            }}
          >
            발송하기
          </Button>
        </Row>
      </MessageHeader>
      <Separator></Separator>
      <ContentTextarea
        ref={contentTextareaRef}
        name="text"
        value={messageData.text}
        onChange={handleMessageDataChange}
        placeholder="내용을 작성해주세요."
        rows={1}
      />
    </StyledMessage>
  );
};

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

export default Message;
