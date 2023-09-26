import { ROUTES } from '@/constants/common/constant';
import { IconFaq } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

interface Props {
    title: string;
}

const FaqBoxItem = ({ title }: Props) => {
    const router = useRouter();

    return (
        <StyledFaqBoxItem onClick={() => router.push(ROUTES.FAQ)}>
            <IconFaq color={color.maruDefault} width={24} height={24} />
            <Question>{title}</Question>
        </StyledFaqBoxItem>
    );
};

export default FaqBoxItem;

const StyledFaqBoxItem = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 64px;
    padding: 0px 16px;
    border-bottom: 1px solid ${color.gray300};
    cursor: pointer;
`;

const Question = styled.a`
    ${font.p1}
    color: ${color.gray750};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 12px;
`;
