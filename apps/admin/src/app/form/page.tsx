'use client';

import ButtonMenu from '@/components/common/ButtonMenu/ButtonMenu';
import ButtonMenuItem from '@/components/common/ButtonMenu/ButtonMenuItem/ButtonMenuItem';
import ExportExcelModal from '@/components/form/ExportExcelModal/ExportExcelModal';
import FormTable from '@/components/form/FormTable/FormTable';
import SecondScoreUploadModal from '@/components/form/SecondScoreUploadModal/SecondScoreUploadModal';
import AppLayout from '@/layouts/AppLayout';
import initMockAPI from '@/mocks';
import { FORM_SORTING_CATEGORY } from '@/constants/form/constants';
import type {
  FormStatus,
  FormType,
  FormSort,
  FormListSortingType,
} from '@/types/form/client';
import { useSetFormToPrintStore } from '@/store/form/formToPrint';
import { useIsFormToPrintSelectingStore } from '@/store/form/isFormToPrintSelecting';
import { useIsSecondRoundResultEditingStore } from '@/store/form/isSecondRoundResultEditing';
import { useSetSecondRoundResultStore } from '@/store/form/secondRoundResult';
import { useFormListTypeStore, useFormListSortingTypeStore } from '@/store/form/type';
import {
  IconCheckDocument,
  IconClose,
  IconEditDocument,
  IconFilter,
  IconPrint,
  IconUpload,
} from '@maru/icon';
import { color } from '@maru/design-token';
import { Button, Column, Row, SubDropdown, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useOverlay } from '@toss/use-overlay';
import { styled } from 'styled-components';
import { usePrintFormURLAction, useSecondRoundResultEditAction } from './form.hooks';
import withAuth from '@/hocs/withAuth';

if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

const FormPage = () => {
  const [formListType, setFormListType] = useFormListTypeStore();
  const [formListSortingType, setFormListSortingType] = useFormListSortingTypeStore();

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

  const setIsSecondRoundResultEditingTrue = () => setIsSecondRoundResultEditing(true);
  const setIsSecondRoundResultEditingFalse = () => {
    setIsSecondRoundResultEditing(false);
    secondRoundResult({});
  };

  const { handleSecondRoundResultEditCompleteButtonClick } =
    useSecondRoundResultEditAction();

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

  const handleStatusCategoryChange = (value: string) => {
    setFormListType('정렬');
    console.log(value);
    setFormListSortingType((prev) => ({ ...prev, status: value as FormStatus }));
  };

  const handleTypeCategoryChange = (value: string) => {
    setFormListType('정렬');
    setFormListSortingType((prev) => ({ ...prev, type: value as FormType }));
  };

  const handleMessageCategoryChange = (value: string) => {
    setFormListType('정렬');
    setFormListSortingType((prev) => ({ ...prev, sort: value as FormSort }));
  };

  const getSelectedValue = (sortingType: FormListSortingType) => {
    return sortingType.status || sortingType.type || sortingType.sort || 'APPROVED';
  };

  return (
    <AppLayout>
      <StyledMainPage>
        <Text fontType="H1">원서 관리</Text>
        <Column gap={36}>
          <Row justifyContent="space-between">
            <SubDropdown
              name="sorting"
              data={[
                {
                  value: 'BY_STATUS',
                  label: '상태 별',
                  children: [
                    { value: 'RECEIVED', label: '접수' },
                    { value: 'FIRST_FAILED', label: '1차 불합격' },
                    { value: 'FAILED', label: '불합격' },
                    { value: 'FINAL_SUBMITTED', label: '최종 제출' },
                    { value: 'SUBMITTED', label: '제출' },
                    { value: 'APPROVED', label: '승인' },
                    { value: 'NO_SHOW', label: '불참' },
                    { value: 'FIRST_PASSED', label: '1차 합격' },
                    { value: 'PASSED', label: '최종 합격' },
                    { value: 'REJECTED', label: '반려' },
                  ],
                  onChange: handleStatusCategoryChange,
                  setNext: true,
                },
                {
                  value: 'BY_TYPE',
                  label: '전형 별',
                  children: [
                    { value: 'REGULAR', label: '일반전형' },
                    { value: 'MEISTER_TALENT', label: '마이스터인재전형' },
                    { value: 'NATIONAL_BASIC_LIVING', label: '국가기초생활수급권자' },
                    {
                      value: 'NATIONAL_VETERANS_EDUCATION',
                      label: '국가보훈대상자 중 교육지원대상자녀',
                    },
                    { value: 'NEAR_POVERTY', label: '차상위계층' },
                    { value: 'NATIONAL_VETERANS', label: '국가보훈자녀' },
                    { value: 'ONE_PARENT', label: '한부모가정' },
                    { value: 'FROM_NORTH_KOREA', label: '북한이탈주민' },
                    { value: 'MULTICULTURAL', label: '다문화가정' },
                    { value: 'TEEN_HOUSEHOLDER', label: '소년소녀가장' },
                    { value: 'MULTI_CHILDREN', label: '다자녀가정자녀' },
                    { value: 'FARMING_AND_FISHING', label: '농어촌지역출신자' },
                    { value: 'SPECIAL_ADMISSION', label: '특례입학대상자' },
                  ],
                  onChange: handleTypeCategoryChange,
                  setNext: true,
                },
                {
                  value: 'TOTAL_SCORE_DESC',
                  label: '최종 점수 높은 순',
                },
                { value: 'TOTAL_SCORE_ASC', label: '최종 점수 낮은 순' },
              ]}
              size="SMALL"
              placeholder="정렬"
              width={300}
              value={FORM_SORTING_CATEGORY[getSelectedValue(formListSortingType)]}
              onChange={handleMessageCategoryChange}
            />
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
                    onClick={handleSecondRoundResultEditCompleteButtonClick}
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
