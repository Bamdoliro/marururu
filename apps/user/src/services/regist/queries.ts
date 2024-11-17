import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getExportRegistForm } from './api';

export const useDownloadRegistFormQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.REGIST_FORM],
    queryFn: getExportRegistForm,
    suspense: false,
  });

  return { data, ...restQuery };
};
