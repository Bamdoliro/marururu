import { ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';
import { IconArrowRight } from '@maru/icon';
import { Column } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex, formatCreatedAt } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    id: number;
    title: string;
    createdAt: string;
}

const NoticeItem = ({ id, title, createdAt }: PropsType) => {
    const router = useRouter();

    return (
        <StyledNoticeItem onClick={() => router.push(`${ROUTES.NOTICE}/${id}`)}>
            <Column gap="8px" height="55px">
                <Title>{title}</Title>
                <Date>{formatCreatedAt(createdAt)}</Date>
            </Column>
            <IconArrowRight color={color.gray600} width={24} height={24} />
        </StyledNoticeItem>
    );
};

export default NoticeItem;

const StyledNoticeItem = styled.div`
    ${flex({ justifyContent: 'space-between' })}
    width: 100%;
    height: 71px;
    border-bottom: 1px solid ${color.gray300};
    padding-bottom: 16px;
    cursor: pointer;
`;

const Title = styled.p`
    ${font.H5}
    color: ${color.gray900};
`;

const Date = styled.p`
    ${font.p3}
    color: ${color.gray750};
`;
