import {
  usePostNoticeMutation,
  useUploadFileWithPresignedUrl,
} from '@/services/notice/mutations';
import { useNoticeFileStore } from '@/store/notice/noticeFile';
import type { PostNoticeReq } from '@/types/notice/remote';

export const useNoticePostAction = (noticeData: PostNoticeReq) => {
  const { postNoticeMutate } = usePostNoticeMutation();
  const { mutateAsync: uploadFile } = useUploadFileWithPresignedUrl();
  const [fileData, setFileData] = useNoticeFileStore();

  const handleNoticePostButtonClick = async () => {
    let fileNameList: Array<string> = noticeData.fileNameList
      ? noticeData.fileNameList
      : [];

    if (fileData && fileData.length > 0) {
      const uploadedfileNameList = await uploadFile(fileData);
      fileNameList = fileNameList.filter(
        (fileName) =>
          !uploadedfileNameList.some((uploadedFile) => uploadedFile.includes(fileName))
      );
      fileNameList = [...fileNameList, ...uploadedfileNameList];
    }

    postNoticeMutate(
      { ...noticeData, fileNameList },
      {
        onSuccess: () => {
          setFileData([]);
        },
      }
    );
  };

  return { handleNoticePostButtonClick };
};
