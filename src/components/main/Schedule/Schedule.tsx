import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Column from "../../common/Flex/column";
import ScheduleItem from "./ScheduleItem";
import { SchedulesData } from "@/data/schedule";

const Schedule = () => {
  return (
    <StyledSchedule>
      <Title>입학일정</Title>
      <StyledScheduleList>
        {SchedulesData?.map((item) => (
          <ScheduleItem date={item.date} plan={item.plan} />
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
