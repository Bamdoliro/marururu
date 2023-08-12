import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';
import { Link } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { IconArrowRight } from '@maru/icon';
import MainFaqList from './MainFaqList/MainFaqList';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Loader } from '@/components/common';

const MainFaq = () => {
    const router = useRouter();

    return (
        <StyledMainFaq>
            <Link onClick={() => router.push(ROUTES.FAQ)} gap="8px">
                <Title>자주묻는 질문</Title>
                <IconArrowRight color={color.gray900} width={24} height={24} />
            </Link>
            <Suspense fallback={<Loader />}>
                <MainFaqList />
            </Suspense>
        </StyledMainFaq>
    );
};

export default MainFaq;

const StyledMainFaq = styled.div`
    position: relative;
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    width: 596px;
    height: 100%;
`;

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;
