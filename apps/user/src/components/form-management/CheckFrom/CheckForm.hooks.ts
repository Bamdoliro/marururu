import { ROUTES } from '@/constants/common/constant';
import { useUser } from '@/hooks';
import { useExportFormQuery } from '@/services/form/queries';
import { useRouter } from 'next/navigation';

export const useDownloadForm = () => {
  const { userData } = useUser();
  const { data: exportFormData } = useExportFormQuery();
  const router = useRouter();

  const handlleDownloadFormButtonClick = () => {
    if (!exportFormData) {
      alert('로그인이 필요합니다.');
      router.push(ROUTES.LOGIN);
      return;
    }
    const pdfBlobUrl = window.URL.createObjectURL(new Blob([exportFormData]));

    const link = document.createElement('a');
    link.href = pdfBlobUrl;
    link.download = `${userData.name} 부산소프트웨어마이스터고등학교 원서.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(pdfBlobUrl);
  };

  return { handlleDownloadFormButtonClick };
};
