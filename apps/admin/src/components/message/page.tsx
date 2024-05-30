import { color, font } from '@maru/design-token';
import { Button, Row, Dropdown, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import AnyPage from './anything';

const Message = () => {
  return (
    <StyledMessage>
      <Text fontType="H1" color={color.gray900}>
        단체 메시지 발송
      </Text>
      <MessageHeader>
        <TitleInput name="title" placeholder="제목을 입력해주세요"></TitleInput>
        <Row>
          <Dropdown
            name="mail"
            data={[
              { value: 'SCHOOL_LIFE', label: '원서 승인 완료자' },
              { value: 'SUBMIT_DOCUMENT', label: '원서 반려자' },
              { value: 'ADMISSION_PROCESS', label: '1차 합격자' },
              { value: 'TOP_QUESTION', label: '최종 합격자' },
            ]}
            size="SMALL"
            value={'받는 사람'}
            placeholder="받는 사람"
            onChange={AnyPage}
            width="160px"
          />
          <Button size="SMALL">수정하기</Button>
        </Row>
      </MessageHeader>
      <Separator></Separator>
      <ContentTextarea
        //   ref={contentTextareaRef}
        name="content"
        //   value={faqData.content}
        //   onChange={handleFaqDataChange}
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
  ${flex({ flexDirection: 'row' })}
  width: 100%;
  height: 126px;
  padding: 80px 194px 0 191px;
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
  margin: 16px 0;
  width: 100%;
`;

const ContentTextarea = styled.textarea`
  ${font.p2};
  color: ${color.gray900};

  &::placeholder {
    color: ${color.gray500};
  }
  resize: none;
`;
