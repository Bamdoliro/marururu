import { IconCancelCircle, IconCheckCircle } from '@maru/icon';
import { color } from '@maru/theme';
import { Column, Text } from '@maru/ui';

interface Props {
  isComplete: boolean;
  completeText: string;
  incompleteText?: string;
}

const CompleteAlarm = ({ isComplete, completeText, incompleteText }: Props) => {
  return (
    <Column
      style={{ marginTop: '173px' }}
      width="100%"
      height="100%"
      gap={34}
      alignItems="center"
    >
      {isComplete ? (
        <IconCheckCircle width={150} height={150} />
      ) : (
        <IconCancelCircle width={150} height={150} />
      )}
      <Text fontType="D2" color={color.gray900}>
        {isComplete ? completeText : incompleteText}
      </Text>
    </Column>
  );
};

export default CompleteAlarm;
