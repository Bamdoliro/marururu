import { color } from '@maru/theme';

const applicationStatusColor = (status: string) => {
    switch (status) {
        case 'APPLICATION_IN_PROGRESS':
            return { color: color.maruDefault, backgroundColor: 'rgba(37, 124, 255, 0.10)' };
        default:
            return { color: color.red, backgroundColor: 'rgba(244, 67, 54, 0.10)' };
    }
};

export default applicationStatusColor;
