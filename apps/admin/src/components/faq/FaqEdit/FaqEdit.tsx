import { FAQ_CATEGORY } from '@/constants/faq/constants';
import { useFaqDetailQuery } from '@/services/faq/queries';
import { Category } from '@/types/faq/client';
import { resizeTextarea } from '@/utils';
import { color, font } from '@maru/theme';
import { Button, Column, Dropdown, Row } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useFaqEditAction } from './FaqEdit.hooks';

interface Props {
    id: number;
}

const FaqEdit = ({ id }: Props) => {
    const { data: faqDetailData } = useFaqDetailQuery(id);

    const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
    const [faqData, setFaqData] = useState({
        title: faqDetailData?.title ?? '',
        content: faqDetailData?.content ?? '',
        category: faqDetailData?.category ?? '',
    });

    const { handleFaqEditButtonClick } = useFaqEditAction(id, faqData);

    const handleFaqDataChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
        setFaqData({ ...faqData, [name]: value });

        resizeTextarea(contentTextareaRef);
    };

    const handleFaqCategoryChange = (value: string, name: string) => {
        setFaqData({ ...faqData, [name]: value });
    };

    useEffect(() => resizeTextarea(contentTextareaRef), []);

    return (
        <StyledFaqEdit>
            <Column gap={36}>
                <FaqHeader>
                    <Row justifyContent="space-between" alignItems="center">
                        <TitleInput
                            name="title"
                            value={faqData.title}
                            onChange={handleFaqDataChange}
                            placeholder="제목을 입력해주세요"
                        />
                        <Button size="SMALL" onClick={handleFaqEditButtonClick}>
                            수정하기
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
        </StyledFaqEdit>
    );
};

export default FaqEdit;

const StyledFaqEdit = styled.div`
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
