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
    let fileNames: string[] = noticeData.fileNames ? noticeData.fileNames : [];

    if (fileData && fileData.length > 0) {
      const uploadedFileNames = await uploadFile(fileData);
      fileNames = [...fileNames, ...uploadedFileNames];
    }

    postNoticeMutate(
      { ...noticeData, fileNames },
      {
        onSuccess: () => {
          setFileData([]);
        },
      }
    );
  };

  return { handleNoticePostButtonClick };
};
