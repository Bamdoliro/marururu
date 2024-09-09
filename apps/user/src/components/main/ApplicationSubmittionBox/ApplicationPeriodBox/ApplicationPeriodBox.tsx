import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { useSchoolRecruitDate } from './ApplicationPeriodBox.hooks';

const ApplicationPeriodBox = () => {
  const { applicationStart, applicationEnd } = useSchoolRecruitDate();

  return (
    <Column gap={36}>
      <Text fontType="H1" color={color.white}>
        지금은 입학전형 기간이 아닙니다.
        <br />
        현재 회원가입을 진행할 수 없습니다.
      </Text>
      <Text fontType="p2" color={color.gray300}>
        {applicationStart} ~ {applicationEnd}
      </Text>
    </Column>
  );
};

export default ApplicationPeriodBox;
