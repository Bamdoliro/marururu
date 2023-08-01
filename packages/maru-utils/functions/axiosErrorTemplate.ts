import { isAxiosError } from 'axios';

type ErrorStatusType =
    | '400'
    | '401'
    | '402'
    | '403'
    | '404'
    | '407'
    | '408'
    | '409'
    | '429'
    | '500';

const errorMessages: { [key in ErrorStatusType]?: string } = {
    403: '유저의 권한이 없습니다.',
    429: '너무 많이 요청하였습니다. 조금 뒤 다시 이용해주세요.',
    500: '서버에 알 수 없는 오류가 발생하였습니다.',
};

const axiosErrorTemplate = (e: unknown, errorMessage?: string) => {
    // let pickErrorMessage = '';
    // if (isAxiosError(e)) {
    //     const status = e.response?.status as unknown as ErrorStatusType;
    //     const message = e.response?.data.message;
    //     pickErrorMessage = message ?? errorMessages[status];
    // } else {
    //     pickErrorMessage = '알 수 없는 오류가 발생하였습니다.';
    // }
    // pickErrorMessage && alert(pickErrorMessage);
    console.log(e);
};

export default axiosErrorTemplate;
