import { Column, Row, Td, Th } from '@maru/ui';

const FinalRoundPassed = () => {
  return (
    <Column>
      <Row>
        <Th width={166} height={56} borderTopLeftRadius={12}>
          ㅤ
        </Th>
        <Th width={166} height={56}>
          일반전형
        </Th>
        <Th width={166} height={56}>
          특별전형
        </Th>
      </Row>
      <Row>
        <Td styleType="SECONDARY" width={166} height={56}>
          최고 점수
        </Td>
        <Td width={166} height={56}>
          240.000
        </Td>
        <Td width={166} height={56}>
          240.000
        </Td>
      </Row>
      <Row>
        <Td styleType="SECONDARY" width={166} height={56}>
          최하 점수
        </Td>
        <Td width={166} height={56}>
          192.000
        </Td>
        <Td width={166} height={56}>
          172.000
        </Td>
      </Row>
      <Row>
        <Td styleType="SECONDARY" width={166} height={56}>
          평균
        </Td>
        <Td width={166} height={56}>
          210.000
        </Td>
        <Td width={166} height={56}>
          190.000
        </Td>
      </Row>
    </Column>
  );
};

export default FinalRoundPassed;
