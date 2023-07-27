import { RightArrowIcon } from '../../common/Icons';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useMainNoticeListQuery } from '@/services/main/queries';
import NoticeItem from './NoticeItem/NoticeItem';
import ROUTES from '@/constants/routes';
import { Link } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';

const Notice = () => {
    const router = useRouter();
    const mainNoticeListQuery = useMainNoticeListQuery();

    return (
        <StyledNotice>
            <Link onClick={() => router.push(ROUTES.NOTICE)} gap="8px">
                <Title>공지사항</Title>
                <RightArrowIcon color={color.gray900} size={22} />
            </Link>
            <NoticeList>
                {mainNoticeListQuery.data?.map((item) => (
                    <NoticeItem key={item.id} id={item.id} title={item.title} />
                ))}
            </NoticeList>
        </StyledNotice>
    );
};

export default Notice;

const StyledNotice = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    width: 596px;
    height: 100%;
`;

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;

const NoticeList = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;
