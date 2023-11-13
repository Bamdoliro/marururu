import { useFormValueStore } from '@/store';
import { color, font } from '@maru/design-token';
import { CellInput, Column, Row, Td, Text, Th } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';
import { useInput } from './VolunteerCalculator.hooks';

const VolunteerCalculator = () => {
  const form = useFormValueStore();
  const { handleVolunteerTimeChange } = useInput();

  return (
    <StyledVolunteerCalculator>
      <Text fontType="p3" color={color.red}>
        *2023.09.27까지의 봉사시간을 기재해주세요. 졸업생은 졸업일 기준으로 기재해주세요.
      </Text>
      <Column>
        <Row>
          <Th borderTopLeftRadius={12} width={162} height={56}>
            학년
          </Th>
          <Th borderTopRightRadius={12} width={654} height={56}>
            봉사시간
          </Th>
        </Row>
        <Row>
          <Td width={162} height={56} styleType="SECONDARY">
            1학년
          </Td>
          <Td width={654} height={56}>
            <CellInput
              name="volunteerTime1"
              onChange={handleVolunteerTimeChange}
              value={form.grade.volunteerTime1}
              isError={Number(form.grade.volunteerTime1) < 0}
            />
            <Hour>시간</Hour>
          </Td>
        </Row>
        <Row>
          <Td width={162} height={56} styleType="SECONDARY">
            2학년
          </Td>
          <Td width={654} height={56}>
            <CellInput
              name="volunteerTime2"
              onChange={handleVolunteerTimeChange}
              value={form.grade.volunteerTime2}
              isError={Number(form.grade.volunteerTime2) < 0}
            />
            <Hour>시간</Hour>
          </Td>
        </Row>
        <Row>
          <Td borderBottomLeftRadius={12} width={162} height={56} styleType="SECONDARY">
            3학년
          </Td>
          <Td borderBottomRightRadius={12} width={654} height={56}>
            <CellInput
              name="volunteerTime3"
              onChange={handleVolunteerTimeChange}
              value={form.grade.volunteerTime3}
              isError={Number(form.grade.volunteerTime3) < 0}
            />
            <Hour>시간</Hour>
          </Td>
        </Row>
      </Column>
    </StyledVolunteerCalculator>
  );
};

export default VolunteerCalculator;

const StyledVolunteerCalculator = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 16px;
  width: 100%;
`;

const Hour = styled.p`
  ${font.p2}
  color: ${color.gray900};
  margin-left: 8px;
`;
