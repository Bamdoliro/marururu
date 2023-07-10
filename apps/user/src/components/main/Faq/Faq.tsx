import { RightArrowIcon } from '../../common/Icons';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useMainFaqListQuery } from '@/services/main/queries';
import QuestionItem from './FaqItem';
import ROUTES from '@/constants/routes';
import { Link } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';

const FAQ_LIST_DATA = [
    {
        id: 1,
        question: '하루 일과가 마치는 시간이 어떻게 되나요?',
    },
    {
        id: 2,
        question: '입학하기 전에 선행학습을 해야하나요?',
    },
    {
        id: 3,
        question: '현재 다른 학교 고등학생인데 전학 갈 수 있나요?',
    },
];

const Faq = () => {
    const router = useRouter();
    // const mainFaqListQuery = useMainFaqListQuery();

    return (
        <StyledFaq>
            <Link onClick={() => router.push(ROUTES.FAQ)} gap="8px">
                <Title>자주묻는 질문</Title>
                <RightArrowIcon color={color.gray900} size={22} />
            </Link>
            <QuestionList>
                {FAQ_LIST_DATA.map((item) => (
                    <QuestionItem key={item.id} id={item.id} question={item.question} />
                ))}
            </QuestionList>
        </StyledFaq>
    );
};

export default Faq;

const StyledFaq = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    width: 596px;
    height: 100%;
`;

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;

const QuestionList = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;
