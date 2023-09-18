'use client';

import ButtonMenu from '@/components/common/ButtonMenu/ButtonMenu';
import ButtonMenuItem from '@/components/common/ButtonMenu/ButtonMenuItem/ButtonMenuItem';
import FormList from '@/components/main/FormList/FormList';
import AppLayout from '@/layouts/AppLayout';
import initMockAPI from '@/mocks';
import { IconCheckDocument, IconEditDocument, IconPrint, IconUpload } from '@maru/icon';
import { color } from '@maru/theme';
import { Column, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

if (process.env.NODE_ENV === 'development') {
    initMockAPI();
}

const MainPage = () => {
    return (
        <AppLayout>
            <StyledMainPage>
                <Text fontType="H1">원서 관리</Text>
                <Column gap={36}>
                    <Row justifyContent="space-between">
                        <SearchInput placeholder="통합검색" />
                        <ButtonMenu
                            width={280}
                            menuItemList={[
                                <ButtonMenuItem>
                                    <IconCheckDocument
                                        color={color.gray600}
                                        width={24}
                                        height={24}
                                    />
                                    <Text fontType="p2" color={color.gray900}>
                                        검토해야 하는 원서 모아보기
                                    </Text>
                                </ButtonMenuItem>,
                                <ButtonMenuItem>
                                    <IconEditDocument
                                        color={color.gray600}
                                        width={24}
                                        height={24}
                                    />
                                    <Text fontType="p2" color={color.gray900}>
                                        2차 전형 점수 입력하기
                                    </Text>
                                </ButtonMenuItem>,
                                <ButtonMenuItem>
                                    <IconUpload color={color.gray600} width={24} height={24} />
                                    <Text fontType="p2" color={color.gray900}>
                                        명단 엑셀로 내보내기
                                    </Text>
                                </ButtonMenuItem>,
                                <ButtonMenuItem>
                                    <IconPrint color={color.gray600} width={24} height={24} />
                                    <Text fontType="p2" color={color.gray900}>
                                        원서 출력하기
                                    </Text>
                                </ButtonMenuItem>,
                            ]}
                        />
                    </Row>
                    <FormList />
                </Column>
            </StyledMainPage>
        </AppLayout>
    );
};

export default MainPage;

const StyledMainPage = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 40px;
    width: 100%;
    height: 100%;
    padding: 64px 75px;

    overflow: auto;
`;
