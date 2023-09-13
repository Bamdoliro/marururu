import { Loader } from '@/components/common';
import { ROUTES } from '@/constants/common/constant';
import { IconArrowRight } from '@maru/icon';
import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import styled from 'styled-components';
import MainFaqList from './MainFaqList/MainFaqList';

const MainFaq = () => {
    const router = useRouter();

    return (
        <StyledMainFaq>
            <DirectLink href={ROUTES.FAQ}>
                <Text fontType="H3" color={color.gray900}>
                    자주묻는 질문
                </Text>
                <IconArrowRight color={color.gray900} width={24} height={24} />
            </DirectLink>
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

const DirectLink = styled(Link)`
    ${flex({ alignItems: 'center' })};
    gap: 8px;
`;
