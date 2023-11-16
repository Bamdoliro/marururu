import { Column, Row, Th } from '@maru/ui';

const 교과성적Header = () => {
  return (
    <Row>
      <Th width={123} height={100} borderTopLeftRadius={12}>
        과목
      </Th>
      <Column>
        <Th width={279} height={50}>
          2학년
        </Th>
        <Row>
          <Th styleType="SECONDARY" width="50%" height={50}>
            1학기
          </Th>
          <Th styleType="SECONDARY" width="50%" height={50}>
            2학기
          </Th>
        </Row>
      </Column>
      <Column>
        <Th width={140} height={50} borderTopRightRadius={12}>
          3학년
        </Th>
        <Th styleType="SECONDARY" width={140} height={50}>
          1학기
        </Th>
      </Column>
    </Row>
  );
};

export default 교과성적Header;
