import type { AxiosError } from 'axios';
import { isAxiosError } from 'axios';

type ErrorStatus = 403 | 429 | 500;

const ERROR: Record<ErrorStatus, string> = {
  403: '유저의 권한이 없습니다.',
  429: '너무 많이 요청하였습니다. 조금 뒤 다시 이용해주세요.',
  500: '서버에 알 수 없는 오류가 발생하였습니다.',
};

const useApiError = () => {
  const handleError = (error: AxiosError) => {
    let errorMessage = '';
    if (isAxiosError(error)) {
      const status = error.status as ErrorStatus;
      const message = error.message;
      errorMessage = message ?? ERROR[status];
      if (status === 500) {
        throw new Error('500');
      }
    } else {
      errorMessage = '알 수 없는 오류가 발생하였습니다.';
    }
    errorMessage && alert(errorMessage);
  };

  return { handleError };
};

export default useApiError;
