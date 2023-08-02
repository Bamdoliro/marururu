import { useRouter } from 'next/navigation';
import { useNoticeListQuery } from '@/services/notice/queries';
import NoticeItem from './MainNoticeList/MainNoticeItem/MainNoticeItem';
import ROUTES from '@/constants/routes';
import { Link } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { IconArrowRight } from '@maru/icon';
import styled from 'styled-components';
import MainNoticeList from './MainNoticeList/MainNoticeList';

const MainNotice = () => {
    const router = useRouter();
    const { data: mainNoticeList } = useNoticeListQuery();

    if (!mainNoticeList) return null;

    return (
        <StyledMainNotice>
            <Link onClick={() => router.push(ROUTES.NOTICE)} gap="8px">
                <Title>공지사항</Title>
                <IconArrowRight color={color.gray900} width={24} height={24} />
            </Link>
            <MainNoticeList mainNoticeList={mainNoticeList} />
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
