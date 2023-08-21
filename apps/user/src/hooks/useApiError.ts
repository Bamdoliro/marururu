import { AxiosError, isAxiosError } from 'axios';

type ErrorStatus = 400 | 401 | 402 | 403 | 404 | 407 | 408 | 409 | 429 | 500;

const errorMessages: { [key in ErrorStatus]?: string } = {
    403: '유저의 권한이 없습니다.',
    429: '너무 많이 요청하였습니다. 조금 뒤 다시 이용해주세요.',
    500: '서버에 알 수 없는 오류가 발생하였습니다.',
};

const useApiError = () => {
    const handleError = (e: AxiosError) => {
        let errorMessage = '';
        if (isAxiosError(e)) {
            const status = e.response?.status as ErrorStatus;
            const message = e.response?.data.message;
            errorMessage = message ?? errorMessages[status];
        } else {
            errorMessage = '알 수 없는 오류가 발생하였습니다.';
        }
        errorMessage && alert(errorMessage);
    };

    return { handleError };
};

export default useApiError;
