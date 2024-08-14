import {
  usePostNoticeMutation,
  useUploadFileWithPresignedUrl,
} from '@/services/notice/mutations';
import type { PostNoticeReq } from '@/types/notice/remote';

export const useNoticePostAction = (noticeData: PostNoticeReq, file?: File) => {
  const { postNoticeMutate } = usePostNoticeMutation();
  const { mutateAsync: uploadFile } = useUploadFileWithPresignedUrl();

  const handleNoticePostButtonClick = async () => {
    let fileUrl = noticeData.fileUrl;

    if (file) {
      const response = await uploadFile(file);
      fileUrl = response?.data?.url;
    }

    postNoticeMutate({ ...noticeData, fileUrl });
  };

  return { handleNoticePostButtonClick };
};
