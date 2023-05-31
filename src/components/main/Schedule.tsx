import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import ScheduleItemData from "./data/ScheduleItemData";
import Row from "@/components/common/Flex/Row";

const Schedule = () => {
  return (
    <StyledSchedule>
      <Title>입학일정</Title>
      <StyledScheduleList>
        {ScheduleItemData.map((item) => (
          <ScheduleItem>
            <Date>{item.date}</Date>
            <Row gap="6px" alignItems="center">
              <Bar />
              <Plan>{item.plan}</Plan>
            </Row>
          </ScheduleItem>
        ))}
      </StyledScheduleList>
    </StyledSchedule>
  );
};

export default Schedule;

const StyledSchedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 40%;
  height: 60%;
`;

const StyledScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const Title = styled.p`
  ${font.H3}
  color: ${color.gray900};
`;

const ScheduleItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  height: 58px;
  width: 100%;
`;

const Date = styled.p`
  ${font.context}
  color: ${color.gray900};
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 3px;
`;

const Plan = styled.p`
  ${font.H5}
  color: ${color.gray900};
`;

const Bar = styled.div`
  width: 4px;
  height: 100%;
  background-color: ${color.maruDefault};
  border-radius: 2px;
`;
