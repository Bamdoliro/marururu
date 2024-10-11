import { ROUTES } from '@/constants/common/constant';
import { useNoticeDetailQuery } from '@/services/notice/queries';
import { color, font } from '@maru/design-token';
import { Button, Column, Row, Text } from '@maru/ui';
import { convertLink, flex, formatCreatedAt } from '@maru/utils';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useNoticeDeleteAction } from './NoticeDetailContent.hooks';
import { IconClip } from '@maru/icon';
import { formatFileName } from '@/utils';

interface Props {
  id: number;
}
const NoticeDetailContent = ({ id }: Props) => {
  const router = useRouter();
  const { data: noticeDetailData } = useNoticeDetailQuery(id);
  const { handleDeleteNoticeButtonClick } = useNoticeDeleteAction(id);

  const handleFileDownload = async (fileUrl: string, fileName: string) => {
    const response = await fetch(fileUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return noticeDetailData ? (
    <StyledNoticeDetailContent>
      <Column gap={36}>
        <NoticeHeader>
          <Column gap={20}>
            <Text fontType="H1" color={color.gray900}>
              {noticeDetailData.title}
            </Text>
            <Text fontType="p2" color={color.gray600}>
              {noticeDetailData.updatedAt === null
                ? formatCreatedAt(noticeDetailData.createdAt)
                : formatCreatedAt(noticeDetailData.updatedAt)}
            </Text>
          </Column>
          <Row gap={16} alignItems="flex-end">
            <Button
              styleType="SECONDARY"
              size="SMALL"
              width={60}
              onClick={() => router.push(`${ROUTES.NOTICE_EDIT}/${id}`)}
            >
              수정
            </Button>
            <Button
              styleType="DELETE"
              size="SMALL"
              width={60}
              onClick={handleDeleteNoticeButtonClick}
            >
              삭제
            </Button>
          </Row>
        </NoticeHeader>
        <Column gap={36} alignItems="flex-start">
          <Content
            dangerouslySetInnerHTML={{ __html: convertLink(noticeDetailData.content) }}
          />
          {noticeDetailData.fileList && (
            <Column gap={12}>
              {noticeDetailData.fileList.map((file, index) => (
                <StyledNoticeFile
                  key={index}
                  onClick={() => handleFileDownload(file.downloadUrl, file.fileName)}
                >
                  <Row alignItems="center" gap={10}>
                    <IconClip width={19} height={12} />
                    <Text fontType="p3" color={color.gray750}>
                      {formatFileName(file.fileName)}
                    </Text>
                  </Row>
                </StyledNoticeFile>
              ))}
            </Column>
          )}
        </Column>
      </Column>
    </StyledNoticeDetailContent>
  ) : null;
};

export default NoticeDetailContent;

const StyledNoticeDetailContent = styled.div`
  ${flex({ flexDirection: 'column' })}
  padding: 0px 7px;
`;

const NoticeHeader = styled.div`
  ${flex({ justifyContent: 'space-between' })}
  width: 100%;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 16px;
`;
const Content = styled.div`
  ${font.p2};
  color: ${color.gray900};
`;

const StyledNoticeFile = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })};
  gap: 12px;
  height: 36px;
  padding: 0 15px 0 15px;
  border-radius: 999px;
  background: ${color.gray200};
  width: auto;
  min-width: fit-content;
  max-width: fit-content;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    background-color: ${color.gray300};
  }
`;
