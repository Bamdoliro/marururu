import { color } from '@maru/theme';
import { Column, Confirm, Text } from '@maru/ui';

interface PropsType {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DraftFormConfirm = ({ isOpen, onClose, onConfirm }: PropsType) => {
    return (
        <Confirm
            isOpen={isOpen}
            title="원서 초안을 제출하시겠습니까?"
            content={
                <Column>
                    <Text color={color.red} fontType="p2">
                        원서 초안 제출 시 부산소프트웨어마이스터고등학교 입학전형에 응시한 것으로
                        처리되며 더 이상 입학원서 수정이 불가능합니다.
                    </Text>
                    <Text color={color.gray900} fontType="p2">
                        잘못 입력한 곳이 있는지 면밀히 검토해주시기 바랍니다.
                    </Text>
                </Column>
            }
            onClose={onClose}
            onConfirm={onConfirm}
            confirmButtonText="원서 초안 제출하기"
        />
    );
};

export default DraftFormConfirm;
