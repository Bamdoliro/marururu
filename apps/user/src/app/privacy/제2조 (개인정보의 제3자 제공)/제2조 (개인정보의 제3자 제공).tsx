import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import { Row, Text, Column } from '@maru/ui';

const 제2조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제2조 (개인정보의 제3자 제공)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          ① 우리학교는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한
          범위내에서 처리 하며, 다음의 경우를 제외하고는 정보주체의 사전 동의 없이는
          본래의 목적 범위를 초과하여 처리
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;하거나 제 3자에게 제공하지 않습니다.
          <br /> &nbsp;&nbsp;• 1. 다른 법률에 특별한 규정이 있는 경우 <br /> &nbsp;&nbsp;•
          2. 정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명
          등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한
          생명, 신체, 재산의 이익을 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;위하여 필요하다고 인정되는 경우
          <br /> &nbsp;&nbsp;• 3. 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게
          제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서
          보호위원회의 심의·의결을 거친 경우
          <br /> &nbsp;&nbsp;• 4. 조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는
          국제기구에 제공하기 위하여 필요한 경우
          <br /> &nbsp;&nbsp;• 5. 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우
          <br /> &nbsp;&nbsp;• 6. 법원의 재판업무 수행을 위하여 필요한 경우 <br />
          &nbsp;&nbsp;• 7. 형(刑) 및 감호, 보호처분의 집행을 위하여 필요한 경우
          <br />
          ➁&nbsp;
          <Text fontType="p3" color={color.maruDefault}>
            (목적 외 이용 또는 제3자제공이 없는 경우)&nbsp;
          </Text>
          개인정보를 목적 외 용도로 이용하거나 제3자에 제공할 경우 정보주체가 확인할 수
          있도록 개인정보처리방침을 통해 안내하겠습니다.
        </Text>
      </Column>
    </>
  );
};

export default 제2조;
