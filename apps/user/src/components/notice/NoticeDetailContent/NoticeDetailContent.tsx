import { useNoticeDetailQuery } from '@/services/notice/queries';
import { formatFileName } from '@/utils';
import { color, font } from '@maru/design-token';
import { IconClip } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';
import { convertLink, flex, formatCreatedAt } from '@maru/utils';
import styled from 'styled-components';

interface Props {
  id: number;
}

const NoticeDetailContent = ({ id }: Props) => {
  const { data: noticeDetailData } = useNoticeDetailQuery(id);

  const handleFileDownload = async (fileUrl: string, fileName: string) => {
    const response = await fetch(fileUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = formatFileName(fileName || '');

    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  const handleViewNow = async (fileUrl: string) => {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    window.open(blobUrl);
    window.URL.revokeObjectURL(blobUrl);
  };

  return noticeDetailData ? (
    <StyledNoticeDetailContent>
      <NoticeHeader>
        <Column gap={16} height={72}>
          <Text fontType="H3" color={color.gray900}>
            {noticeDetailData.title}
          </Text>
          <Text fontType="p2" color={color.gray600}>
            {noticeDetailData.updatedAt === null
              ? formatCreatedAt(noticeDetailData.createdAt)
              : formatCreatedAt(noticeDetailData.updatedAt)}
          </Text>
        </Column>
      </NoticeHeader>
      <Column gap={36} alignItems="left">
        <Content
          dangerouslySetInnerHTML={{ __html: convertLink(noticeDetailData.content) }}
        />
        {noticeDetailData.fileList && (
          <Column gap={12}>
            {noticeDetailData.fileList.map((file, index) => (
              <Row alignItems="center" gap={12} key={index}>
                <StyledNoticeFile
                  onClick={() => handleFileDownload(file.downloadUrl, file.fileName)}
                >
                  <Row alignItems="center" gap={10}>
                    <IconClip width={19} height={12} />
                    <Text fontType="p3" color={color.gray750}>
                      {formatFileName(file.fileName)}
                    </Text>
                  </Row>
                </StyledNoticeFile>
                {!file.fileName.endsWith('.hwp') && (
                  <DeleteButton onClick={() => handleViewNow(file.downloadUrl)}>
                    <Text fontType="p2" color={color.maruDefault}>
                      [바로보기]
                    </Text>
                  </DeleteButton>
                )}
              </Row>
            ))}
          </Column>
        )}
      </Column>
    </StyledNoticeDetailContent>
  ) : null;
};

export default NoticeDetailContent;

const StyledNoticeDetailContent = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 24px;
  padding: 0px 7px;
`;

const NoticeHeader = styled.div`
  ${flex({ justifyContent: 'space-between' })}
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${color.gray300};
  margin-bottom: 8px;
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

const DeleteButton = styled.div`
  cursor: pointer;
`;
