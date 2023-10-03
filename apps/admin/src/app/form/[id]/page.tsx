'use client';

import FormDetailContent from '@/components/form/FormDetailContent/FormDetailContent';
import { ROUTES } from '@/constants/common/constant';
import AppLayout from '@/layouts/AppLayout';
import { IconArrowLeft } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Loader } from '@maru/ui';
import { flex } from '@maru/utils';
import Link from 'next/link';
import { Suspense } from 'react';
import styled from 'styled-components';

interface Props {
    params: { id: number };
}

const FormDetailPage = ({ params: { id } }: Props) => {
    return (
        <AppLayout>
            <StyledFormDetail>
                <DirectLink href={ROUTES.MAIN}>
                    <IconArrowLeft width={18} height={18} />
                    돌아가기
                </DirectLink>
                <Suspense fallback={<Loader />}>
                    <FormDetailContent id={id} />
                </Suspense>
            </StyledFormDetail>
        </AppLayout>
    );
};

export default FormDetailPage;

const StyledFormDetail = styled.div`
    position: relative;
    ${flex({ flexDirection: 'column' })}
    gap: 24px;
    width: 100%;
    min-height: 100vh;
    padding: 48px 60px 82px;
`;

const DirectLink = styled(Link)`
    ${flex({ alignItems: 'center' })}
    gap: 2px;
    ${font.p3}
    color: ${color.gray600};
`;
