'use client';

import FormList from '@/components/main/FormList/FormList';
import AppLayout from '@/layouts/AppLayout';
import { IconAdd } from '@maru/icon';
import { Button, Column, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

const Home = () => {
    return (
        <AppLayout>
            <StyledHome>
                <Text fontType="H1">원서 관리</Text>
                <Column gap={36}>
                    <Row justifyContent="space-between">
                        <Button
                            width={141}
                            size="SMALL"
                            style={{ padding: '0 16px 0 10px', justifyContent: 'space-between' }}>
                            <IconAdd width={24} height={24} />
                            공지사항 작성
                        </Button>
                        <Row gap={8}>
                            <SearchInput placeholder="검색어를 입력하세요." />
                            <Button size="SMALL">검색</Button>
                        </Row>
                    </Row>
                    <FormList />
                </Column>
            </StyledHome>
        </AppLayout>
    );
};

export default Home;

const StyledHome = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 40px;
    width: 100%;
    height: 100%;
    padding: 64px 75px;

    overflow: auto;
`;
