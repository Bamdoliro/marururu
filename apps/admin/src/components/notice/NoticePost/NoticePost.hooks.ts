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
    let fileUuid = null;

    if (fileData) {
      fileUuid = await uploadFile(fileData);
    }

    postNoticeMutate(
      { ...noticeData, fileUuid },
      {
        onSuccess: () => {
          setFileData(null);
        },
      }
    );
  };

  return { handleNoticePostButtonClick };
};
