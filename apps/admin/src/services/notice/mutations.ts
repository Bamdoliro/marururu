import { ROUTES } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import type { PostNoticeReq, PutNoticeReq } from '@/types/notice/remote';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {
  deleteNotice,
  postNotice,
  postNoticePresignedUrl,
  putEditNotice,
  putNoticeFileUrl,
} from './api';

export const usePostNoticeMutation = () => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: postNoticeMutate, ...restMutation } = useMutation({
    mutationFn: (noticeData: PostNoticeReq) => postNotice(noticeData),
    onSuccess: ({ data }) => {
      toast('공지사항이 게시되었습니다.', {
        type: 'success',
      });
      router.push(`${ROUTES.NOTICE}/${data.id}`);
    },
    onError: handleError,
  });

  return { postNoticeMutate, ...restMutation };
};

export const useEditNoticeMutation = (id: number) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: editNoticeMutate, ...restMutation } = useMutation({
    mutationFn: (noticeData: PutNoticeReq) => putEditNotice(id, noticeData),
    onSuccess: () => {
      toast('공지사항이 수정되었습니다.', {
        type: 'success',
      });
      router.push(`${ROUTES.NOTICE}/${id}`);
    },
    onError: handleError,
  });

  return { editNoticeMutate, ...restMutation };
};

export const useDeleteNoticeMutation = (id: number) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: deleteNoticeMutate, ...restMutation } = useMutation({
    mutationFn: () => deleteNotice(id),
    onSuccess: () => {
      toast('공지사항이 삭제되었습니다.', {
        type: 'success',
      });
      router.push(ROUTES.NOTICE);
    },
    onError: handleError,
  });
  return { deleteNoticeMutate, ...restMutation };
};

import { useNoticeFileValueStore } from '@/store/notice/noticeFile';

export const useUploadFileWithPresignedUrl = () => {
  const { handleError } = useApiError();
  const fileData = useNoticeFileValueStore();

  const mutation = useMutation(
    async (file: File) => {
      if (!fileData) {
        throw new Error('파일이 선택되지 않았습니다.');
      }

      const presignedData = await postNoticePresignedUrl(fileData.name);
      await putNoticeFileUrl(file, presignedData);
      return presignedData.fileName;
    },
    {
      onError: handleError,
      onSuccess: () => {
        toast('파일이 업로드되었습니다.', {
          type: 'success',
        });
      },
    }
  );

  return mutation;
};
