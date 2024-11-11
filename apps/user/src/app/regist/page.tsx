'use client';

import { AppLayout } from '@/layouts';
import { color, font } from '@maru/design-token';
import { Button, Column, Row, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

const RegistPage = () => {
  return (
    <AppLayout header footer>
      <StyledRegistPage>
        <Column alignItems="left" gap={24}>
          <Text color={color.gray900} fontType="H1">
            입학 등록원 & 금연 동의서 제출
          </Text>
          <Text color={color.gray900} fontType="p2">
            기간 내에 서류를 제출하지 않으면 자동으로
            <Text color={color.red} fontType="p2">
              입학 포기 처리
            </Text>
            됩니다.
            <br />
            입학을 포기할 경우, 2025학년도에는 타 학교 진학이 불가합니다.
            <br />
            서류는 가장 최근 제출된 것을 기준으로 반영되며,
            <br />
            재제출하는 경우에도 반드시 기간 내에 제출해 주시기 바랍니다.
          </Text>
          <ExportFormButton
            onClick={() => {
              alert('다운로드됨');
            }}
          >
            [ 입학 등록원 PDF 다운로드 ]
          </ExportFormButton>
          <Row gap={16} alignItems="center" style={{ margin: '72px 0 56px 0' }}>
            <Button
              onClick={() => {
                alert('파일 업로드 열림');
              }}
              size="SMALL"
            >
              첨부파일 업로드
            </Button>
            <Text fontType="p2" color={color.gray900}>
              선택된 파일 없음
            </Text>
          </Row>
          <Button
            onClick={() => {
              alert('눌림');
            }}
            width="30%"
            size="LARGE"
            styleType="PRIMARY"
          >
            서류 제출하기
          </Button>
        </Column>
      </StyledRegistPage>
    </AppLayout>
  );
};

export default RegistPage;

const StyledRegistPage = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 82px 20% 240px;
`;

const ExportFormButton = styled.button`
  align-self: flex-start;
  ${font.btn2};
  color: ${color.gray500};
`;
