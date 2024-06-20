import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { useSchoolRecruitDate } from './ApplicationPeriodBox.hooks';

const ApplicationPeriodBox = () => {
  const { applicationStart, applicationEnd } = useSchoolRecruitDate();
  // const year = 2025;

  return (
    <Column gap={36}>
      <Text fontType="H1" color={color.white}>
        부산소프트웨어마이스터고등학교
        <br />
        테스트 중입니다. (학교 외부인 원서 작성 X)
        {/* {year}학년도 신입생 모집 */}
      </Text>
      <Text fontType="p2" color={color.gray300}>
        {applicationStart} ~ {applicationEnd}
      </Text>
    </Column>
  );
};

export default ApplicationPeriodBox;
