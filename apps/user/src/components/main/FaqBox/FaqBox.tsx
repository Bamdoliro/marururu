import { ROUTES } from '@/constants/common/constant';
import { IconArrowRight } from '@maru/icon';
import { color } from '@maru/theme';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Link from 'next/link';
import { Suspense } from '@suspensive/react';
import styled from 'styled-components';
import FaqBoxList from './FaqBoxList/FaqBoxList';

const FaqBox = () => {
    return (
        <StyledFaqBox>
            <DirectLink href={ROUTES.FAQ}>
                <Text fontType="H3" color={color.gray900}>
                    자주묻는 질문
                </Text>
                <IconArrowRight color={color.gray900} width={24} height={24} />
            </DirectLink>
            <Suspense.CSROnly>
                <FaqBoxList />
            </Suspense.CSROnly>
        </StyledFaqBox>
    );
};

export default FaqBox;

const StyledFaqBox = styled.div`
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
