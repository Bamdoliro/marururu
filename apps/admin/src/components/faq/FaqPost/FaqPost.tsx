import { FAQ_CATEGORY } from '@/constants/faq/constants';
import type { Category } from '@/types/faq/client';
import { resizeTextarea } from '@/utils';
import { color, font } from '@maru/design-token';
import { Button, Column, Dropdown, Row } from '@maru/ui';
import { flex } from '@maru/utils';
import type { ChangeEventHandler } from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useFaqPostAction } from './FaqPost.hooks';

const FaqPost = () => {
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [faqData, setFaqData] = useState({
    title: '',
    content: '',
    category: '',
  });

  const { handleFaqPostButtonClick } = useFaqPostAction(faqData);

  const handleFaqDataChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setFaqData({ ...faqData, [name]: value });

    resizeTextarea(contentTextareaRef);
  };

  const handleFaqCategoryChange = (value: string, name: string) => {
    setFaqData({ ...faqData, [name]: value });
  };

  return (
    <StyledFaqPost>
      <Column gap={36}>
        <FaqHeader>
          <Row justifyContent="space-between" alignItems="center">
            <TitleInput
              name="title"
              value={faqData.title}
              onChange={handleFaqDataChange}
              placeholder="제목을 입력해주세요"
            />
            <Button size="SMALL" onClick={handleFaqPostButtonClick}>
              게시하기
            </Button>
          </Row>
          <Dropdown
            name="category"
            data={[
              { value: 'SCHOOL_LIFE', label: '학교생활' },
              { value: 'SUBMIT_DOCUMENT', label: '관련 제출 서류' },
              { value: 'ADMISSION_PROCESS', label: '입학 과정' },
              { value: 'TOP_QUESTION', label: '질문 TOP' },
            ]}
            size="SMALL"
            value={FAQ_CATEGORY[faqData.category as Category]}
            width={140}
            placeholder="카테고리"
            onChange={handleFaqCategoryChange}
          />
        </FaqHeader>
        <ContentTextarea
          ref={contentTextareaRef}
          name="content"
          value={faqData.content}
          onChange={handleFaqDataChange}
          placeholder="내용을 작성해주세요."
          rows={1}
        />
      </Column>
    </StyledFaqPost>
  );
};

export default FaqPost;

const StyledFaqPost = styled.div`
  ${flex({ flexDirection: 'column' })}
  padding: 0px 7px;
`;

const FaqHeader = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 20px;
  width: 100%;
  height: 126px;
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
