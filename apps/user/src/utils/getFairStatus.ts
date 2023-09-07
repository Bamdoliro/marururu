import { color } from '@maru/theme';

const getFairStatus = (status: string) => {
    switch (status) {
        case 'APPLICATION_IN_PROGRESS':
            return {
                color: color.maruDefault,
                backgroundColor: 'rgba(37, 124, 255, 0.10)',
                fairStatus: '신청 진행 중',
            };
        case 'CLOSED':
            return {
                color: color.red,
                backgroundColor: 'rgba(244, 67, 54, 0.10)',
                fairStatus: '종료됨',
            };
        case 'APPLICATION_ENDED':
            return {
                color: color.red,
                backgroundColor: 'rgba(244, 67, 54, 0.10)',
                fairStatus: '신청 종료됨',
            };
        case 'APPLICATION_NOT_STARTED':
            return {
                color: color.red,
                backgroundColor: 'rgba(244, 67, 54, 0.10)',
                fairStatus: '신청 시작 전',
            };
        case 'APPLICATION_EARLY_CLOSED':
            return {
                color: color.red,
                backgroundColor: 'rgba(244, 67, 54, 0.10)',
                fairStatus: '신청 조기 종료됨',
            };
        default:
            return {
                color: '',
                backgroundColor: '',
                fairStatus: '',
            };
    }
};

export default getFairStatus;
