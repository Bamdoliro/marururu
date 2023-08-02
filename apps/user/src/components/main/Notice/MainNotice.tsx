import { useRouter } from 'next/navigation';
import { useNoticeListQuery } from '@/services/notice/queries';
import ROUTES from '@/constants/routes';
import { Link } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { IconArrowRight } from '@maru/icon';
import MainNoticeList from './MainNoticeList/MainNoticeList';
import styled from 'styled-components';

const MainNotice = () => {
    const router = useRouter();

    return (
        <StyledMainNotice>
            <Link onClick={() => router.push(ROUTES.NOTICE)} gap="8px">
                <Title>공지사항</Title>
                <IconArrowRight color={color.gray900} width={24} height={24} />
            </Link>
            <MainNoticeList />
        </StyledMainNotice>
    );
};

export default MainNotice;

const StyledMainNotice = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    width: 596px;
    height: 100%;
`;

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;
