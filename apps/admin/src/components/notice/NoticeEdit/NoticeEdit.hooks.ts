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
    let fileNames: string[] = noticeData.fileNames ? noticeData.fileNames : [];

    if (fileData && fileData.length > 0) {
      const uploadedFileNames = await uploadFile(fileData);
      fileNames = [...fileNames, ...uploadedFileNames];
    }

    editNoticeMutate(
      { ...noticeData, fileNames },
      {
        onSuccess: () => {
          setFileData([]);
        },
      }
    );
  };

  return {
    handleNoticeEditButtonClick,
  };
};
