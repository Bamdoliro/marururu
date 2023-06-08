import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import ScheduleItem from "./items/ScheduleItem";

const SCHEDULE_DATA = [
  {
    id: 1,
    date: "10월 17일 (화) ~ 20일 (금)",
    plan: "1차 원서접수",
  },
  {
    id: 2,
    date: "10월 24일 (화)",
    plan: "1차 합격자 발표",
  },
  {
    id: 3,
    date: "10월 28일 (토)",
    plan: "2차 전형",
  },
  {
    id: 4,
    date: "11월 2일 (목)",
    plan: "최종 합격자 발표",
  },
];

const Schedule = () => {
  return (
    <StyledSchedule>
      <Title>입학일정</Title>
      <StyledScheduleList>
        {SCHEDULE_DATA.map((item) => (
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
