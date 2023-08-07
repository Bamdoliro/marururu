import { useFormStepState } from '@/hooks';
import { IconCancelCircle, IconCheck, IconCheckCircle, IconClose } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Column, Text } from '@maru/ui';
import styled from 'styled-components';

interface PropsType {
    isFilledForm: boolean;
}

const CompleteAlaram = ({ isFilledForm }: PropsType) => {
    const { formStep } = useFormStepState();

    return (
        <Column
            style={{ marginTop: '173px' }}
            width="100%"
            height="100%"
            gap={34}
            alignItems="center">
            {isFilledForm ? (
                <IconCheckCircle width={150} height={150} />
            ) : (
                <IconCancelCircle width={150} height={150} />
            )}
            {formStep === '초안작성완료' ? (
                isFilledForm ? (
                    <Text fontType="D2" color={color.gray900}>
                        원서 초안 작성 완료
                    </Text>
                ) : (
                    <Text fontType="D2" color={color.gray900}>
                        아직 작성하지 않은 곳이 있어요
                    </Text>
                )
            ) : (
                <Text fontType="D2" color={color.gray900}>
                    원서 초안 제출 완료
                </Text>
            )}
        </Column>
    );
};

export default CompleteAlaram;
