import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color, font } from '@maru/design-token';
import { Column, Row, Text, Button } from '@maru/ui';
import { useOverlay } from '@toss/use-overlay';
import { useFormDocumentValueStore } from '@/store';
import { useBooleanState } from '@maru/hooks';
import { AppLayout } from '@/layouts';
import { FinalFormConfirm, FinalFormTable, PdfGeneratedLoader } from '@/components/form';
import { useOpenFileUploader } from '@/hooks';
import {
  useExportFormAction,
  useInput,
  useSubmitFinalFormAction,
} from './최종제출.hooks';

const 최종제출 = () => {
  const overlay = useOverlay();
  const formDocument = useFormDocumentValueStore();
  const {
    value: isOpenPdfGeneratedLoader,
    setTrue: openPdfGeneratedLoader,
    setFalse: closePdfGeneratedLoader,
  } = useBooleanState();
  const { openFileUploader: openPdfFileUploader, ref: pdfFileUploaderRef } =
    useOpenFileUploader();

  const { handleExportForm } = useExportFormAction(
    openPdfGeneratedLoader,
    closePdfGeneratedLoader
  );
  const { handleSubmitFinalForm } = useSubmitFinalFormAction();

  const { handleFormDocumentChange, isUploadSuccessful } = useInput(
    openPdfGeneratedLoader,
    closePdfGeneratedLoader
  );

  const openFinalFormConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <FinalFormConfirm
        isOpen={isOpen}
        onClose={close}
        onConfirm={() => {
          handleSubmitFinalForm();
          close();
        }}
      />
    ));
  };

  return (
    <AppLayout header>
      <PdfGeneratedLoader isOpen={isOpenPdfGeneratedLoader} />
      <Styled최종제출>
        <ContentBox>
          <Column gap={36} alignItems="flex-start">
            <Text fontType="H1" color={color.gray900}>
              원서 최종 제출
            </Text>
            <Column gap={4}>
              <Text fontType="p2" color={color.gray900}>
                (공통,해당자)제출서류들은 스캔해서 하나의 PDF파일로 첨부해주시기 바랍니다.
              </Text>
              <Text fontType="p2" color={color.gray900}>
                사회통합전형 및 정원 외 전형 대상자 제출서류 중 각 지원 자격 증명서류는
                우편으로 제출해야 합니다.
              </Text>
              <Text fontType="p2" color={color.red}>
                원서를 최종 제출했을 경우 재업로드는 불가능합니다.
              </Text>
            </Column>
            <ExportFormButton onClick={handleExportForm}>
              [ 작성한 원서(pdf) 다운로드 ]
            </ExportFormButton>
          </Column>
          <Row gap={16} alignItems="center" style={{ margin: '72px 0 56px 0' }}>
            <Button onClick={openPdfFileUploader} size="SMALL">
              제출 서류 업로드
            </Button>
            <Text fontType="p2" color={color.gray900}>
              {formDocument.fileName || '선택된 파일 없음'}
            </Text>
          </Row>
          <FinalFormTable />
        </ContentBox>
        <SideBar>
          <Column style={{ position: 'sticky', top: '0px' }} gap={10}>
            <FormFinalSubmitInfoBox>
              <Text fontType="H4" color={color.gray900}>
                제출 하기 전에 잠깐!
              </Text>
              <Column gap={12} alignItems="flex-start">
                <Text fontType="p2" color={color.gray900}>
                  1. 제출해야 하는 서류 확인하기
                </Text>
                <Text fontType="p2" color={color.gray900}>
                  2. 잘못 입력되어 있는지 확인하기
                </Text>
                <Text fontType="p2" color={color.gray900}>
                  3. 첨부 안 한 서류 있는지 확인하기
                </Text>
              </Column>
            </FormFinalSubmitInfoBox>
            <Button
              onClick={openFinalFormConfirm}
              width="100%"
              size="LARGE"
              styleType={
                !formDocument.fileName || !isUploadSuccessful ? 'DISABLED' : 'PRIMARY'
              }
            >
              원서 최종 제출
            </Button>
          </Column>
        </SideBar>
      </Styled최종제출>
      <input
        ref={pdfFileUploaderRef}
        onChange={handleFormDocumentChange}
        type="file"
        accept=".pdf"
        hidden
      />
    </AppLayout>
  );
};

export default 최종제출;

const Styled최종제출 = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })};
  max-width: 1448px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 58px 96px 240px;
`;

const ContentBox = styled.div`
  ${flex({ flexDirection: 'column' })};
  width: 816px;
  height: 100%;
`;

const ExportFormButton = styled.button`
  ${font.btn2};
  color: ${color.gray500};
`;

const SideBar = styled.div`
  position: relative;
  width: 276px;
  height: 100%;
`;

const FormFinalSubmitInfoBox = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 20px;
  height: 360px;
  width: 100%;
  padding: 28px 24px;
  border-radius: 12px;
  border: 1px solid ${color.gray300};
`;
