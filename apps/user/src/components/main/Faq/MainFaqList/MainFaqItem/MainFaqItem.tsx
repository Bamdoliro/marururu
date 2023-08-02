import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';
import { font, color } from '@maru/theme';
import { IconFaq } from '@maru/icon';
import { styled } from 'styled-components';

interface PropsType {
    title: string;
}

const MainFaqItem = ({ title }: PropsType) => {
    const router = useRouter();

    return (
        <StyledMainFaqItem onClick={() => router.push(ROUTES.FAQ)}>
            <IconFaq color={color.maruDefault} width={24} height={24} />
            <Question>{title}</Question>
        </StyledMainFaqItem>
    );
};

export default MainFaqItem;

const StyledMainFaqItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0px 16px;
    border-bottom: 1px solid ${color.gray300};
    cursor: pointer;
`;

const Question = styled.a`
    ${font.p1}
    color: ${color.gray750};
    // 일정 길이 넘어가면 ... 처리
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 12px;
`;
