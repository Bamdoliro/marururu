import { useFormDetailQuery } from '@/services/form/queries';
import { color, font } from '@maru/theme';
import { CellInput, Column, Row, Td, Th } from '@maru/ui';
import { styled } from 'styled-components';

interface Props {
  id: number;
}

const 봉사시간 = ({ id }: Props) => {
  const { data: formDetailData } = useFormDetailQuery(id);

  return (
    <Column>
      <Row>
        <Th borderTopLeftRadius={12} width={162} height={56}>
          학년
        </Th>
        <Th borderTopRightRadius={12} width={318} height={56}>
          봉사시간
        </Th>
      </Row>
      <Row>
        <Td width={162} height={56} option="SECONDARY">
          1학년
        </Td>
        <Td width={318} height={56}>
          <CellInput value={formDetailData?.grade.volunteerTime1} readOnly />
          <Hour>시간</Hour>
        </Td>
      </Row>
      <Row>
        <Td width={162} height={56} option="SECONDARY">
          2학년
        </Td>
        <Td width={318} height={56}>
          <CellInput value={formDetailData?.grade.volunteerTime2} readOnly />
          <Hour>시간</Hour>
        </Td>
      </Row>
      <Row>
        <Td borderBottomLeftRadius={12} width={162} height={56} option="SECONDARY">
          3학년
        </Td>
        <Td borderBottomRightRadius={12} width={318} height={56}>
          <CellInput value={formDetailData?.grade.volunteerTime3} readOnly />
          <Hour>시간</Hour>
        </Td>
      </Row>
    </Column>
  );
};

export default 봉사시간;

const Hour = styled.p`
  ${font.p2}
  color: ${color.gray900};
  margin-left: 8px;
`;
