import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { useRemainDate } from './DdayBox.hooks';

const DdayBox = () => {
  const { status, remainTime, targetDate } = useRemainDate();
  return (
    <Column gap={16}>
      <Column gap={8}>
        <Text fontType="H2" color={color.gray400}>
          {status}
        </Text>
        <Text fontType="D1" color={color.white}>
          {remainTime}
        </Text>
      </Column>
      <Text fontType="p2" color={color.gray300}>
        {targetDate}
      </Text>
    </Column>
  );
};

export default DdayBox;
