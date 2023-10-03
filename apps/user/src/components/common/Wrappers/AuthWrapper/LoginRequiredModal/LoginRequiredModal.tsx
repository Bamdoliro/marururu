import { ROUTES } from '@/constants/common/constant';
import { color } from '@maru/theme';
import { Confirm, Text } from '@maru/ui';
import { useRouter } from 'next/navigation';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const LoginRequiredModal = ({ isOpen, onClose }: Props) => {
    const router = useRouter();

    return (
        <Confirm
            isOpen={isOpen}
            title="로그인 필요"
            content={
                <Text color={color.gray900} fontType="p2">
                    로그인 후에 편리하게 서비스를 이용하실 수 있습니다.
                </Text>
            }
            onClose={onClose}
            onConfirm={() => {
                router.push(ROUTES.LOGIN);
                onClose();
            }}
            confirmButtonText="로그인 하러 가기"
            height={280}
        />
    );
};

export default LoginRequiredModal;
