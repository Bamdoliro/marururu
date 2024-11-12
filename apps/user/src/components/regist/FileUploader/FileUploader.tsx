import { color } from '@maru/design-token';
import { Button, Row, Text } from '@maru/ui';

const FileUploader = () => {
  return (
    <Row gap={16} alignItems="center">
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
  );
};

export default FileUploader;
