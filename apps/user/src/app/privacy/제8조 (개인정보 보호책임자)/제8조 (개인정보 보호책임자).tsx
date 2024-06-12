import { IconTerms } from '@maru/icon';
import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';
import { PrivacyResponsibilityTeacher } from '@/components/privacy';

const 제8조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제8조 (개인정보 보호책임자)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          우리학교는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
          정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
          지정하고 있습니다.
        </Text>
        <PrivacyResponsibilityTeacher />
      </Column>
    </>
  );
};

export default 제8조;
