import { Column, Row, Td, Th } from '@maru/ui';

const FirstRoundPassed = () => {
  return (
    <Column>
      <Row>
        <Th width={100} height={56} borderTopLeftRadius={12}>
          ㅤ
        </Th>
        <Th width={100} height={56}>
          일반전형
        </Th>
        <Th width={100} height={56} borderTopRightRadius={12}>
          특별전형
        </Th>
      </Row>
      <Row>
        <Td styleType="SECONDARY" width={100} height={56}>
          최고 점수
        </Td>
        <Td width={100} height={56}>
          240.000
        </Td>
        <Td width={100} height={56}>
          240.000
        </Td>
      </Row>
      <Row>
        <Td styleType="SECONDARY" width={100} height={56}>
          최하 점수
        </Td>
        <Td width={100} height={56}>
          112.000
        </Td>
        <Td width={100} height={56}>
          122.000
        </Td>
      </Row>
      <Row>
        <Td styleType="SECONDARY" width={100} height={56} borderBottomLeftRadius={12}>
          평균
        </Td>
        <Td width={100} height={56}>
          210.000
        </Td>
        <Td width={100} height={56} borderBottomRightRadius={12}>
          190.000
        </Td>
      </Row>
    </Column>
  );
};

export default FirstRoundPassed;
