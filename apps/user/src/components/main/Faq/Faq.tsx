import { RightArrowIcon } from '../../common/Icons';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useMainFaqListQuery } from '@/services/main/queries';
import QuestionItem from './FaqItem';
import ROUTES from '@/constants/routes';
import { Link } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';

const Faq = () => {
    const router = useRouter();
    const mainFaqListQuery = useMainFaqListQuery();

    return (
        <StyledFaq>
            <Link onClick={() => router.push(ROUTES.FAQ)} gap="8px">
                <Title>자주묻는 질문</Title>
                <RightArrowIcon color={color.gray900} size={22} />
            </Link>
            <QuestionList>
                {mainFaqListQuery.data?.map((item) => (
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
