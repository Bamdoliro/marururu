import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';

const Explain = () => {
  return (
    <Column alignItems="left" gap={12}>
      <Text color={color.gray900} fontType="H1">
        입학 등록원 제출
      </Text>
      <Text color={color.gray900} fontType="p2">
        기간 내에 서류를 제출하지 않으면 자동으로 <b>입학 포기 처리</b>됩니다.
        <br />
        입학을 포기할 경우, 2025학년도에는 <b>타 학교 진학이 불가</b>합니다.
      </Text>
      <Text color={color.gray900} fontType="p2">
        서류는 <b>가장 최근 제출</b>된 것을 기준으로 반영되며,
        <br />
        재제출하는 경우에도 반드시 기간 내에 제출해 주시기를 바랍니다.
      </Text>
      <Text color={color.gray900} fontType="p2">
        '입학 등록원'은 학교 홈페이지(입학 공지 사항) 또는 마루(공지 사항)에서 다운받아
        <b>수기 작성</b> 후 탑재하시길 바랍니다.
      </Text>
      <Text color={color.gray900} fontType="p2">
        수기 작성한 입학 등록원 원본은 <b>신입생 예비 소집일에 제출</b> 바랍니다.
      </Text>
    </Column>
  );
};

export default Explain;
