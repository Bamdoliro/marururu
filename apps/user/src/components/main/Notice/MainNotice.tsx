import { useRouter } from 'next/navigation';
import { Loader } from '@/components/common';
import { ROUTES } from '@/constants/common/constant';
import { IconArrowRight } from '@maru/icon';
import { color } from '@maru/theme';
import { Link, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import styled from 'styled-components';
import MainNoticeList from './MainNoticeList/MainNoticeList';

const MainNotice = () => {
    const router = useRouter();

    return (
        <StyledMainNotice>
            <Link onClick={() => router.push(ROUTES.NOTICE)} gap="8px">
                <Text fontType="H3" color={color.gray900}>
                    공지사항
                </Text>
                <IconArrowRight color={color.gray900} width={24} height={24} />
            </Link>
            <Suspense fallback={<Loader />}>
                <MainNoticeList />
            </Suspense>
        </StyledMainNotice>
    );
};

export default MainNotice;

const StyledMainNotice = styled.div`
    position: relative;
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    width: 596px;
    height: 100%;
`;
