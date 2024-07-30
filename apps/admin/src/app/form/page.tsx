'use client';

import ButtonMenu from '@/components/common/ButtonMenu/ButtonMenu';
import ButtonMenuItem from '@/components/common/ButtonMenu/ButtonMenuItem/ButtonMenuItem';
import ExportExcelModal from '@/components/form/ExportExcelModal/ExportExcelModal';
import FormTable from '@/components/form/FormTable/FormTable';
import SecondScoreUploadModal from '@/components/form/SecondScoreUploadModal/SecondScoreUploadModal';
import AppLayout from '@/layouts/AppLayout';
import initMockAPI from '@/mocks';
import { useSetFormToPrintStore } from '@/store/form/formToPrint';
import { useIsFormToPrintSelectingStore } from '@/store/form/isFormToPrintSelecting';
import { useIsSecondRoundResultEditingStore } from '@/store/form/isSecondRoundResultEditing';
import {
  useSetSecondRoundResultStore,
  useSecondRoundResultValueStore,
} from '@/store/form/secondRoundResult';
import { useFormListTypeStore } from '@/store/form/type';
import {
  IconCheckDocument,
  IconClose,
  IconEditDocument,
  IconFilter,
  IconPrint,
  IconUpload,
} from '@maru/icon';
import { color } from '@maru/design-token';
import { Button, Column, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import { styled } from 'styled-components';
import { usePrintFormURLAction, useSecondRoundResultEditAction } from './form.hooks';
import withAuth from '@/hocs/withAuth';
import { useEffect, useState } from 'react';

if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

const FormPage = () => {
  const [formListType, setFormListType] = useFormListTypeStore();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFormListTypeReview = () => setFormListType('검토해야 하는 원서 모아보기');
  const handleFormListTypeAll = () => setFormListType('모두 보기');

  const overlay = useOverlay();

  const openSecondScoreUplaodModal = () => {
    overlay.open(({ isOpen, close }) => (
      <SecondScoreUploadModal isOpen={isOpen} onClose={close} />
    ));
  };

  const [isSecondRoundResultEditing, setIsSecondRoundResultEditing] =
    useIsSecondRoundResultEditingStore();
  const secondRoundResult = useSetSecondRoundResultStore();
  const secondRoundResultValue = useSecondRoundResultValueStore();

  const setIsSecondRoundResultEditingTrue = () => setIsSecondRoundResultEditing(true);
  const setIsSecondRoundResultEditingFalse = () => {
    setIsSecondRoundResultEditing(false);
    secondRoundResult({});
  };

  const { handleSecondRoundResultEditCompleteButtonClick } =
    useSecondRoundResultEditAction();

  useEffect(() => {
    setIsButtonDisabled(Object.keys(secondRoundResultValue).length === 0);
  }, [secondRoundResultValue]);

  const handleEditCompleteButtonClick = () => {
    if (!isButtonDisabled) {
      handleSecondRoundResultEditCompleteButtonClick();
    }
  };

  const openExportExcelModal = () => {
    overlay.open(({ isOpen, close }) => (
      <ExportExcelModal isOpen={isOpen} onClose={close} />
    ));
  };

  const [isFormToPrintSelecting, setIsFormToPrintSelecting] =
    useIsFormToPrintSelectingStore();
  const setFormToPrint = useSetFormToPrintStore();

  const setIsFormToPrintSelectingTrue = () => {
    setIsFormToPrintSelecting(true);
  };
  const setIsFormToPrintSelectingFalse = () => {
    setIsFormToPrintSelecting(false);
    setFormToPrint({});
  };

  const { handlePrintFormUrlButtonClick } = usePrintFormURLAction();

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
              {isSecondRoundResultEditing ? (
                <Row gap={16}>
                  <Button
                    styleType="SECONDARY"
                    size="SMALL"
                    onClick={setIsSecondRoundResultEditingFalse}
                  >
                    취소
                  </Button>
                  <Button
                    size="SMALL"
                    onClick={handleEditCompleteButtonClick}
                    disabled={isButtonDisabled}
                    styleType={isButtonDisabled ? 'DISABLED' : 'PRIMARY'}
                  >
                    완료
                  </Button>
                </Row>
              ) : isFormToPrintSelecting ? (
                <Row gap={16}>
                  <Button
                    styleType="SECONDARY"
                    size="SMALL"
                    onClick={setIsFormToPrintSelectingFalse}
                  >
                    취소
                  </Button>
                  <Button size="SMALL" onClick={handlePrintFormUrlButtonClick}>
                    출력하기
                  </Button>
                </Row>
              ) : (
                <ButtonMenu
                  width={280}
                  menuItemList={[
                    <ButtonMenuItem onClick={handleFormListTypeReview}>
                      <IconCheckDocument color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        검토해야 하는 원서 모아보기
                      </Text>
                    </ButtonMenuItem>,
                    <ButtonMenuItem onClick={openSecondScoreUplaodModal}>
                      <IconEditDocument color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        2차 전형 점수 입력하기
                      </Text>
                    </ButtonMenuItem>,
                    <ButtonMenuItem onClick={setIsSecondRoundResultEditingTrue}>
                      <IconEditDocument color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        2차 합격 여부 변경하기
                      </Text>
                    </ButtonMenuItem>,
                    <ButtonMenuItem onClick={openExportExcelModal}>
                      <IconUpload color={color.gray600} width={24} height={24} />
                      <Text fontType="p2" color={color.gray900}>
                        명단 엑셀로 내보내기
                      </Text>
                    </ButtonMenuItem>,
                    <ButtonMenuItem onClick={setIsFormToPrintSelectingTrue}>
                      <IconPrint color={color.gray600} width={24} height={24} />
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

export default withAuth(FormPage);

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
