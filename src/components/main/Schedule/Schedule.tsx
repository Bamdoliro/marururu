import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import ScheduleItem from "./ScheduleItem";
import { ScheduleItemData } from "./data";

const Schedule = () => {
  return (
    <StyledSchedule>
      <Title>입학일정</Title>
      <StyledScheduleList>
        {ScheduleItemData.map((item) => (
          <ScheduleItem key={item.id} date={item.date} plan={item.plan} />
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
  flex-grow: 1;
  max-width: 489px;
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
function aysnc(): import("react").EffectCallback {
  throw new Error("Function not implemented.");
}
