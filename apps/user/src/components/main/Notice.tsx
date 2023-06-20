import RightArrowIcon from '../common/Icons/RightArrow';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useMainNoticeListQuery } from '@/services/main/queries';
import NoticeItem from './items/NoticeItem';
import { NOTICE_PAGE_ROUTE } from '@/constants/routes';
import { Link } from '@maru/ui';
import { color, font } from '@maru/global-style';

const Notice = () => {
    const router = useRouter();
    const { data } = useMainNoticeListQuery();

    return (
        <StyledNotice>
            <Link onClick={() => router.push(NOTICE_PAGE_ROUTE)} gap="8px">
                <Title>공지사항</Title>
                <RightArrowIcon color={color.gray900} size={22} />
            </Link>
            <NoticeList>
                {data.map((item) => (
                    <NoticeItem key={item.id} id={item.id} title={item.title} />
                ))}
            </NoticeList>
        </StyledNotice>
    );
};

export default Notice;

const StyledNotice = styled.div`
    display: flex;
    flex-direction: column;
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
