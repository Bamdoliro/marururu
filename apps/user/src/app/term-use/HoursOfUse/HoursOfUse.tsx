import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Column, Row, Text } from '@maru/ui';

const HoursOfUse = () => {
  return (
    <Column gap={6}>
      <Row gap={3} alignItems="center">
        <IconTerms />
        <Text fontType="H4" color={color.gray900}>
          제18조 (서비스 이용시간)
        </Text>
      </Row>
      <Text fontType="p3" color={color.gray900}>
        ① 서비스의 이용은 운영기관의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일
        24시간 가능함을 원칙으로 합니다. 다만 정기 점검 등의 필요로 사이트가 정한 날이나
        시간은 그러하지 않습니다. <br />② 사이트는 서비스를 일정범위로 분할하여 각
        범위별로 이용가능 시간을 별도로 정할 수 있습니다. 이 경우 사전에 공지를 통해 그
        내용을 알립니다.
      </Text>
    </Column>
  );
};

export default HoursOfUse;
