import { useRouter } from 'next/navigation';
import QuestionItem from './FaqItem/FaqItem';
import ROUTES from '@/constants/routes';
import { Link } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { IconArrowRight } from '@maru/icon';
import styled from 'styled-components';
import { useFaqListQuery } from '@/services/faq/queries';

const Faq = () => {
    const router = useRouter();
    const { data: mainFaqList, isLoading } = useFaqListQuery('TOP_QUESTION');

    if (isLoading || mainFaqList === undefined) {
        return null;
    }

    return (
        <StyledFaq>
            <Link onClick={() => router.push(ROUTES.FAQ)} gap="8px">
                <Title>자주묻는 질문</Title>
                <IconArrowRight color={color.gray900} width={24} height={24} />
            </Link>
            <QuestionList>
                {mainFaqList.splice(0, 3).map((item) => (
                    <QuestionItem title={item.title} />
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
