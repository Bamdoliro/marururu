import QuestionIcon from '@/components/common/Icons/Question';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import { FAQ_PAGE_ROUTE } from '@/constants/routes';
import { font, color } from '@maru/styles';

interface PropsType {
    id: number;
    question: string;
}

const QuestionItem = ({ id, question }: PropsType) => {
    const router = useRouter();

    return (
        <StyledQuestionItem onClick={() => router.push(`${FAQ_PAGE_ROUTE}/${id}`)}>
            <QuestionIcon color={color.maruDefault} />
            <Question>{question}</Question>
        </StyledQuestionItem>
    );
};

export default QuestionItem;

const StyledQuestionItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0px 16px;
    border-bottom: 1px solid ${color.gray300};
    cursor: pointer;
`;

const Question = styled.a`
    ${font.p1}
    color: ${color.gray750};
    // 일정 길이 넘어가면 ... 처리
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 12px;
`;
