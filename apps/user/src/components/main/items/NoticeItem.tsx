import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import { NOTICE_PAGE_ROUTE } from '@/constants/routes';
import { font, color } from '@maru/theme';
import { flex } from '@maru/util';

interface PropsType {
    id: number;
    title: string;
}

const NoticeItem = ({ id, title }: PropsType) => {
    const router = useRouter();

    return (
        <StyledNoticeItem onClick={() => router.push(`${NOTICE_PAGE_ROUTE}/${id}`)}>
            <Title>{title}</Title>
        </StyledNoticeItem>
    );
};

export default NoticeItem;

const StyledNoticeItem = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 64px;
    padding: 0px 16px;
    border-bottom: 1px solid ${color.gray300};
    cursor: pointer;
`;

const Title = styled.a`
    ${font.p1}
    color: ${color.gray750};
    // 일정 길이 넘어가면 ... 처리
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
