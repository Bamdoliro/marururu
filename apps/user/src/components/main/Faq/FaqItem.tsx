import { FaqIcon } from '@/components/common/Icons';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import ROUTES from '@/constants/routes';
import { font, color } from '@maru/theme';

interface PropsType {
    id: number;
    question: string;
}

const FaqItem = ({ id, question }: PropsType) => {
    const router = useRouter();

    return (
        <StyledFaqItem onClick={() => router.push(`${ROUTES.FAQ}/${id}`)}>
            <FaqIcon color={color.maruDefault} />
            <Faq>{question}</Faq>
        </StyledFaqItem>
    );
};

export default FaqItem;

const StyledFaqItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0px 16px;
    border-bottom: 1px solid ${color.gray300};
    cursor: pointer;
`;

const Faq = styled.a`
    ${font.p1}
    color: ${color.gray750};
    // 일정 길이 넘어가면 ... 처리
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 12px;
`;
