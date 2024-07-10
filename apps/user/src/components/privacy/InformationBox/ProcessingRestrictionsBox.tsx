import { color } from '@maru/design-token';
import { Box, Text } from '@maru/ui';

const ProcessingRestrictions = () => {
  return (
    <Box>
      <Text fontType="p3" color={color.gray900}>
        제15조(처리의 제한) 정보주체의 영상정보는 영상정보처리기기의 설치목적 외의 용도로
        활용되거나 접근권한을 부여받은 자 이외의 타인에게 열람‧제공되어서는 아니된다.
        <br />
        다만 다음 각호의 1에 해당하는 경우에는 그러하지 아니하다.
        <br />
        <Text fontType="p3" color={color.maruDefault}>
          1. 정보주체로부터 별도의 동의를 받은 경우
          <br />
          2. 다른 법률에 특별한 규정이 있는 경우
          <br />
          3. 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명
          등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제 자의 급박한
          생명
          <br />
          신체 재산의 이익을 위하여 필요하다고 인정되는 경우
          <br />
          4. 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아볼 수
          없는 형태로 개인정보를 제공하는 경우
          <br />
          5. 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우
          <br />
          6. 법원의 재판업무 수행을 위하여 필요한 경우
          <br />
          7. 형 및 감호 보호처분의 집행을 위하여 필요한 경우
        </Text>
      </Text>
    </Box>
  );
};

export default ProcessingRestrictions;
