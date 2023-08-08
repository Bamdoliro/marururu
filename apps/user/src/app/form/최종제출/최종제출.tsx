import { AppLayout } from '@/layouts';
import { Button, Column, Row, Text } from '@maru/ui';
import { color } from '@maru/theme';
import { FinalFormTable } from '@/components/form';
import { flex } from '@maru/utils';
import { useFileUploadButton, useInput, useUploadFormDocumentAction } from './최종제출.hooks';
import { useFormDocumentState } from './최종제출.state';
import styled from 'styled-components';

const 최종제출 = () => {
    const { formDocument } = useFormDocumentState();
    const { fileInputRef, handleFileUploadButtonClick } = useFileUploadButton();
    const { handleUploadFormDocumentButtonClick } = useUploadFormDocumentAction();
    const { handleFileDataChange } = useInput();

    return (
        <AppLayout header style={{ padding: '58px 96px 0px' }}>
            <Styled최종제출>
                <ContentBox>
                    <Column gap={36}>
                        <Text fontType="H1" color={color.gray900}>
                            원서 최종 제출
                        </Text>
                        <Column gap={4}>
                            <Text fontType="p2" color={color.gray900}>
                                제출서류들은 스캔해서 하나의 PDF파일로 첨부해주시기 바랍니다.
                            </Text>
                            <Text fontType="p2" color={color.red}>
                                원서를 최종 제출됐을 경우 재업로드는 불가능합니다.
                            </Text>
                        </Column>
                    </Column>
                    <Row gap={16} alignItems="center">
                        <Button onClick={handleFileUploadButtonClick} size="SMALL">
                            첨부파일 업로드
                        </Button>
                        {formDocument.file.name ? (
                            <Text fontType="p2" color={color.gray900}>
                                {formDocument.file.name}
                            </Text>
                        ) : (
                            <Text fontType="p2" color={color.gray900}>
                                선택된 파일 없음
                            </Text>
                        )}
                    </Row>
                    <FinalFormTable />
                </ContentBox>
                <SideBar>
                    <Column style={{ position: 'sticky', top: '0px' }} gap={10}>
                        <FormFinalSubmitInfoBox>as</FormFinalSubmitInfoBox>
                        <Button
                            onClick={handleUploadFormDocumentButtonClick}
                            width="100%"
                            size="LARGE">
                            원서 최종 제출
                        </Button>
                    </Column>
                </SideBar>
            </Styled최종제출>
            <input
                ref={fileInputRef}
                onChange={handleFileDataChange}
                type="file"
                accept=".pdf"
                hidden
            />
        </AppLayout>
    );
};

export default 최종제출;

const Styled최종제출 = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    width: 100%;
    height: 100%;
`;

const ContentBox = styled.div`
    ${flex({ flexDirection: 'column' })};
    gap: 64px;
    width: 816px;
    height: 100%;
`;

const SideBar = styled.div`
    position: relative;
    width: 276px;
    height: 100%;
`;

const FormFinalSubmitInfoBox = styled.div`
    height: 360px;
    width: 100%;
    padding: 28px 24px;
    border-radius: 12px;
    border: 1px solid ${color.gray300};
`;
