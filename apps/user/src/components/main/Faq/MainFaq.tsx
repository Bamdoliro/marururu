import { useRouter } from 'next/navigation';
import QuestionItem from './MainFaqList/MainFaqItem/MainFaqItem';
import ROUTES from '@/constants/routes';
import { Link } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { IconArrowRight } from '@maru/icon';
import styled from 'styled-components';
import { useFaqListQuery } from '@/services/faq/queries';
import MainFaqList from './MainFaqList/MainFaqList';

const MainFaq = () => {
    const router = useRouter();
    const { data: mainFaqListData } = useFaqListQuery('TOP_QUESTION');

    if (!mainFaqListData) return null;

    return (
        <StyledMainFaq>
            <Link onClick={() => router.push(ROUTES.FAQ)} gap="8px">
                <Title>자주묻는 질문</Title>
                <IconArrowRight color={color.gray900} width={24} height={24} />
            </Link>
            <MainFaqList mainFaqListData={mainFaqListData} />
        </StyledMainFaq>
    );
};

export default MainFaq;

const StyledMainFaq = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    width: 596px;
    height: 100%;
`;

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;
