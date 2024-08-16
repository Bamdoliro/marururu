import {
  useEditNoticeMutation,
  useUploadFileWithPresignedUrl,
} from '@/services/notice/mutations';
import type { PutNoticeReq } from '@/types/notice/remote';
import { useNoticeFileStore } from '@/store/notice/noticeFile';

export const useNotieEditAction = (id: number, noticeData: PutNoticeReq) => {
  const { editNoticeMutate } = useEditNoticeMutation(id);
  const { mutateAsync: uploadFile } = useUploadFileWithPresignedUrl();
  const [fileData, setFileData] = useNoticeFileStore();

  const handleNoticeEditButtonClick = async () => {
    let fileName = noticeData.fileName || '';

    if (fileData) {
      fileName = await uploadFile(fileData);
    }

    editNoticeMutate(
      { ...noticeData, fileName },
      {
        onSuccess: () => {
          setFileData(null);
        },
      }
    );
  };

  return {
    handleNoticeEditButtonClick,
  };
};
