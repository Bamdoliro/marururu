'use client';

import ButtonMenu from '@/components/common/ButtonMenu/ButtonMenu';
import ButtonMenuItem from '@/components/common/ButtonMenu/ButtonMenuItem/ButtonMenuItem';
import FormList from '@/components/form/FormList/FormList';
import SecondScoreInputModal from '@/components/form/SecondScoreUploadModal/SecondScoreUploadModal';
import AppLayout from '@/layouts/AppLayout';
import initMockAPI from '@/mocks';
import { useFormListTypeStore } from '@/store/form/type';
import {
    IconCheckDocument,
    IconClose,
    IconEditDocument,
    IconFilter,
    IconPrint,
    IconUpload,
} from '@maru/icon';
import { color } from '@maru/theme';
import { Column, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import { styled } from 'styled-components';

if (process.env.NODE_ENV === 'development') {
    initMockAPI();
}

const MainPage = () => {
    const [formListType, setFormListType] = useFormListTypeStore();

    const handleFormListTypeReview = () => setFormListType('검토해야 하는 원서 모아보기');
    const handleFormListTypeAll = () => setFormListType('모두 보기');

    const overlay = useOverlay();

    const openSecondScoreInputModal = () => {
        overlay.open(({ isOpen, close }) => (
            <SecondScoreInputModal isOpen={isOpen} onClose={close} />
        ));
    };

    return (
        <AppLayout>
            <StyledMainPage>
                <Text fontType="H1">원서 관리</Text>
                <Column gap={36}>
                    <Row justifyContent="space-between">
                        <SearchInput placeholder="통합검색" />
                        <Row gap={16}>
                            {formListType === '검토해야 하는 원서 모아보기' ? (
                                <ReviewFilterBox>
                                    <Row alignItems="center" gap={4}>
                                        <IconFilter width={24} height={24} />
                                        <Text fontType="context" color={color.maruDefault}>
                                            검토해야 하는 원서
                                        </Text>
                                    </Row>
                                    <IconClose
                                        width={18}
                                        height={18}
                                        color={color.maruDefault}
                                        cursor="pointer"
                                        onClick={handleFormListTypeAll}
                                    />
                                </ReviewFilterBox>
                            ) : null}
                            <ButtonMenu
                                width={280}
                                menuItemList={[
                                    <ButtonMenuItem onClick={handleFormListTypeReview}>
                                        <IconCheckDocument
                                            color={color.gray600}
                                            width={24}
                                            height={24}
                                        />
                                        <Text fontType="p2" color={color.gray900}>
                                            검토해야 하는 원서 모아보기
                                        </Text>
                                    </ButtonMenuItem>,
                                    <ButtonMenuItem onClick={openSecondScoreInputModal}>
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

const ReviewFilterBox = styled.div`
    ${flex({ alignItems: 'center' })};
    gap: 12px;
    height: 40px;
    padding: 0 10px 0 8px;
    border-radius: 6px;
    background: ${color.maruLightBlue};
`;
