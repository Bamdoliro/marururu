import { useDeleteNoticeMutation } from '@/services/notice/mutations';

export const useNoticeDeleteAction = (id: number) => {
  const { deleteNoticeMutate } = useDeleteNoticeMutation(id);

  const handleDeleteNoticeButtonClick = () => {
    deleteNoticeMutate();
  };

  return { handleDeleteNoticeButtonClick };
};

export const handleFileDownload = async (fileUrl: string, fileName: string) => {
  const response = await fetch(fileUrl);
  const blob = await response.blob();

  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};
