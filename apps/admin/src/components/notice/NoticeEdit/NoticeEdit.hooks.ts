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
    let fileNameList: Array<string> = noticeData.fileNameList
      ? noticeData.fileNameList
      : [];

    if (fileData && fileData.length > 0) {
      const uploadedfileNameList = await uploadFile(fileData);
      fileNameList = [...fileNameList, ...uploadedfileNameList];
    }

    editNoticeMutate(
      { ...noticeData, fileNameList },
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
