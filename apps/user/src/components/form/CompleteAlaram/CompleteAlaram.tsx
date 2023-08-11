import { IconCancelCircle, IconCheckCircle } from '@maru/icon';
import { color } from '@maru/theme';
import { Column, Text } from '@maru/ui';

interface PropsType {
    isComplete: boolean;
    completeText: string;
    inCompleteText?: string;
}

const CompleteAlaram = ({ isComplete, completeText, inCompleteText }: PropsType) => {
    return (
        <Column
            style={{ marginTop: '173px' }}
            width="100%"
            height="100%"
            gap={34}
            alignItems="center">
            {isComplete ? (
                <IconCheckCircle width={150} height={150} />
            ) : (
                <IconCancelCircle width={150} height={150} />
            )}
            {isComplete ? (
                <Text fontType="D2" color={color.gray900}>
                    {completeText}
                </Text>
            ) : (
                <Text fontType="D2" color={color.gray900}>
                    {inCompleteText}
                </Text>
            )}
        </Column>
    );
};

export default CompleteAlaram;
