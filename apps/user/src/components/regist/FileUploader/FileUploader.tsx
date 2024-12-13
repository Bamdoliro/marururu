import { color } from '@maru/design-token';
import { Button, Row, Text } from '@maru/ui';
import type { ChangeEventHandler, ForwardedRef } from 'react';
import { forwardRef } from 'react';

interface FileUploaderProps {
  onClick: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  document: string;
}

const FileUploader = forwardRef(
  (
    { onClick, document, onChange }: FileUploaderProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <Row gap={16} alignItems="center">
          <Button onClick={onClick} size="SMALL">
            첨부파일 업로드
          </Button>
          <Text fontType="p2" color={color.gray900}>
            {document || '선택된 파일 없음'}
          </Text>
        </Row>
        <input ref={ref} onChange={onChange} type="file" accept=".pdf, .hwpx" hidden />
      </>
    );
  }
);

FileUploader.displayName = 'FileUploader';

export default FileUploader;
