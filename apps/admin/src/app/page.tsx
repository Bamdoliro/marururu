'use client';

import ConfirmButton from '@/components/common/ConfirmButton/ConfirmButton';
import ButtonMenu from '@/components/form/ButtonMenu/ButtonMenu';
import ButtonMenuItem from '@/components/form/ButtonMenu/ButtonMenuItem/ButtonMenuItem';
import ExportExcelModal from '@/components/form/ExportExcelModal/ExportExcelModal';
import FormTable from '@/components/form/FormTable/FormTable';
import ReviewFilterChip from '@/components/form/ReviewFilterChip/ReviewFilterChip';
import SecondScoreUploadModal from '@/components/form/SecondScoreUploadModal/SecondScoreUploadModal';
import AppLayout from '@/layouts/AppLayout';
import initMockAPI from '@/mocks';
import { useSetFormToPrintStore } from '@/store/form/formToPrint';
import { useIsFormToPrintSelectingStore } from '@/store/form/isFormToPrintSelecting';
import { useIsSecondRoundResultEditingStore } from '@/store/form/isSecondRoundResultEditing';
import { useSetSecondRoundResultStore } from '@/store/form/secondRoundResult';
import { useFormListTypeStore } from '@/store/form/type';
import { IconCheckDocument, IconEditDocument, IconPrint, IconUpload } from '@maru/icon';
import { color } from '@maru/theme';
import { Column, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import { styled } from 'styled-components';
import { useDownloadFormURLAction, useSecondRoundResultEditAction } from './form.hooks';

if (process.env.NODE_ENV === 'development') {
    initMockAPI();
}

const MainPage = () => {
    const [formListType, setFormListType] = useFormListTypeStore();

    const setFormListTypeReview = () => setFormListType('검토해야 하는 원서 모아보기');
    const setFormListTypeAll = () => setFormListType('모두 보기');

    const overlay = useOverlay();

    const openSecondScoreUplaodModal = () => {
        overlay.open(({ isOpen, close }) => (
            <SecondScoreUploadModal isOpen={isOpen} onClose={close} />
        ));
    };

    const [isSecondRoundResultEditing, setIsSecondRoundResultEditing] =
        useIsSecondRoundResultEditingStore();
    const secondRoundResult = useSetSecondRoundResultStore();

    const setIsSecondRoundResultEditingTrue = () => setIsSecondRoundResultEditing(true);
    const setIsSecondRoundResultEditingFalse = () => {
        setIsSecondRoundResultEditing(false);
        secondRoundResult({});
    };

    const { handleSecondRoundResultEditCompleteButtonClick } = useSecondRoundResultEditAction();

    const openExportExcelModal = () => {
        overlay.open(({ isOpen, close }) => <ExportExcelModal isOpen={isOpen} onClose={close} />);
    };

    const [isFormToPrintSelecting, setIsFormToPrintSelecting] = useIsFormToPrintSelectingStore();
    const setFormToPrint = useSetFormToPrintStore();

    const setIsFormToPrintSelectingTrue = () => {
        setIsFormToPrintSelecting(true);
    };
    const setIsFormToPrintSelectingFalse = () => {
        setIsFormToPrintSelecting(false);
        setFormToPrint({});
    };

    const { handleDownloadFormUrlButtonClick } = useDownloadFormURLAction();

    return (
        <AppLayout>
            <StyledMainPage>
                <Text fontType="H1">원서 관리</Text>
                <Column gap={36}>
                    <Row justifyContent="space-between">
                        <SearchInput placeholder="통합검색" />
                        <Row gap={16}>
                            {formListType === '검토해야 하는 원서 모아보기' ? (
                                <ReviewFilterChip onClose={setFormListTypeAll} />
                            ) : null}
                            {isSecondRoundResultEditing ? (
                                <ConfirmButton
                                    onClickConfirm={setIsSecondRoundResultEditingTrue}
                                    onClickCancel={handleSecondRoundResultEditCompleteButtonClick}
                                />
                            ) : isFormToPrintSelecting ? (
                                <ConfirmButton
                                    onClickConfirm={setIsFormToPrintSelectingFalse}
                                    onClickCancel={handleDownloadFormUrlButtonClick}
                                    confirmText="출력하기"
                                />
                            ) : (
                                <ButtonMenu
                                    width={280}
                                    menuItemList={[
                                        <ButtonMenuItem onClick={setFormListTypeReview}>
                                            <IconCheckDocument
                                                color={color.gray600}
                                                width={24}
                                                height={24}
                                            />
                                            <Text fontType="p2" color={color.gray900}>
                                                검토해야 하는 원서 모아보기
                                            </Text>
                                        </ButtonMenuItem>,
                                        <ButtonMenuItem onClick={openSecondScoreUplaodModal}>
                                            <IconEditDocument
                                                color={color.gray600}
                                                width={24}
                                                height={24}
                                            />
                                            <Text fontType="p2" color={color.gray900}>
                                                2차 전형 점수 입력하기
                                            </Text>
                                        </ButtonMenuItem>,
                                        <ButtonMenuItem onClick={setIsSecondRoundResultEditingTrue}>
                                            <IconEditDocument
                                                color={color.gray600}
                                                width={24}
                                                height={24}
                                            />
                                            <Text fontType="p2" color={color.gray900}>
                                                2차 합격 여부 변경하기
                                            </Text>
                                        </ButtonMenuItem>,
                                        <ButtonMenuItem onClick={openExportExcelModal}>
                                            <IconUpload
                                                color={color.gray600}
                                                width={24}
                                                height={24}
                                            />
                                            <Text fontType="p2" color={color.gray900}>
                                                명단 엑셀로 내보내기
                                            </Text>
                                        </ButtonMenuItem>,
                                        <ButtonMenuItem onClick={setIsFormToPrintSelectingTrue}>
                                            <IconPrint
                                                color={color.gray600}
                                                width={24}
                                                height={24}
                                            />
                                            <Text fontType="p2" color={color.gray900}>
                                                원서 출력하기
                                            </Text>
                                        </ButtonMenuItem>,
                                    ]}
                                />
                            )}
                        </Row>
                    </Row>
                    <FormTable />
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
