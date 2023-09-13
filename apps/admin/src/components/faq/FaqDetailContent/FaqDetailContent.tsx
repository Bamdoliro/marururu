import { useFaqDetailQuery } from '@/services/faq/queries';
import { color, font } from '@maru/theme';
import { Button, Column, Row, Text } from '@maru/ui';
import { convertLink, flex, formatCreatedAt } from '@maru/utils';
import styled from 'styled-components';

interface Props {
    id: number;
}

const FaqDetailContent = ({ id }: Props) => {
    const { data: faqDetailData } = useFaqDetailQuery(id);

    return faqDetailData ? (
        <StyledNoticeDetailContent>
            <Column gap={36}>
                <NoticeHeader>
                    <Column gap={20}>
                        <Text fontType="H1" color={color.gray900}>
                            {faqDetailData.title}
                        </Text>
                        <Text fontType="p2" color={color.gray600}>
                            {formatCreatedAt(faqDetailData.createdAt)}
                        </Text>
                    </Column>
                    <Row gap={16} alignItems="flex-end">
                        <Button option="SECONDARY" size="SMALL" width={60}>
                            수정
                        </Button>
                        <Button option="DELETE" size="SMALL" width={60}>
                            삭제
                        </Button>
                    </Row>
                </NoticeHeader>
                <Content dangerouslySetInnerHTML={{ __html: convertLink(faqDetailData.content) }} />
            </Column>
        </StyledNoticeDetailContent>
    ) : null;
};

export default FaqDetailContent;

const StyledNoticeDetailContent = styled.div`
    ${flex({ flexDirection: 'column' })}
    padding: 0px 7px;
`;

const NoticeHeader = styled.div`
    ${flex({ justifyContent: 'space-between' })}
    width: 100%;
    border-bottom: 1px solid ${color.gray300};
    padding-bottom: 8px;
`;
const Content = styled.div`
    ${font.p2};
    color: ${color.gray900};
`;
