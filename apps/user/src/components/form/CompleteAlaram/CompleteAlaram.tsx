import { IconCancelCircle, IconLoader, IconIngCircle } from '@maru/icon';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';

interface Props {
  isComplete: boolean | string;
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
      {isComplete === 'load' ? (
        <IconLoader width={150} height={150} />
      ) : isComplete === 'cancel' ? (
        <IconCancelCircle width={150} height={150} />
      ) : (
        <IconIngCircle width={150} height={150} />
      )}
      <Text fontType="D2" color={color.gray900}>
        {isComplete === 'check' ? completeText : incompleteText}
      </Text>
    </Column>
  );
};

export default CompleteAlarm;
