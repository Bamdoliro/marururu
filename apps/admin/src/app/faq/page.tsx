'use client';

import AppLayout from '@/layouts/AppLayout';
import { Button, Column, Dropdown, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

const FaqPage = () => {
    return (
        <AppLayout>
            <StyledFaqPage>
                <Text fontType="H1">자주 묻는 질문</Text>
                <Column gap={36}>
                    <Row justifyContent="space-between">
                        <Button size="SMALL" icon="ADD_ICON">
                            자주 묻는 질문 작성
                        </Button>
                        <Row gap={16}>
                            <Dropdown
                                data={[]}
                                size="SMALL"
                                width={140}
                                placeholder="카테고리"
                                onChange={() => console.log('이잉')}
                                name="category"
                            />
                            <Row gap={8}>
                                <SearchInput placeholder="검색어를 입력하세요." />
                                <Button size="SMALL">검색</Button>
                            </Row>
                        </Row>
                    </Row>
                </Column>
            </StyledFaqPage>
        </AppLayout>
    );
};

export default FaqPage;

const StyledFaqPage = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 40px;
    width: 100%;
    height: 100%;
    padding: 64px 75px;
`;
