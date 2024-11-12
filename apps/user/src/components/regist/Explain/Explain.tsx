import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';

const Explain = () => {
  return (
    <Column alignItems="left" gap={24}>
      <Text color={color.gray900} fontType="H1">
        입학 등록원 & 금연 동의서 제출
      </Text>
      <Text color={color.gray900} fontType="p2">
        기간 내에 서류를 제출하지 않으면 자동으로
        <Text color={color.red} fontType="p2">
          입학 포기 처리
        </Text>
        됩니다.
        <br />
        입학을 포기할 경우, 2025학년도에는 타 학교 진학이 불가합니다.
        <br />
        서류는 가장 최근 제출된 것을 기준으로 반영되며,
        <br />
        재제출하는 경우에도 반드시 기간 내에 제출해 주시기 바랍니다.
        <br />
        입학등록원과 금연동의서를 한 개의 파일로 탑재해서 제출해 주시길 바랍니다.
      </Text>
    </Column>
  );
};

export default Explain;
