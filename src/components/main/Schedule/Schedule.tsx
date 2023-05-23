import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Column from "../../common/Flex/column";
import ScheduleItem from "./ScheduleItem";
import { SchedulesData } from "@/data/schedule";

const Schedule = () => {
    return(
        <StyledSchedule>
            <Column gap="16px" height="72px">
            <Title>입학일정</Title>
            <StyledScheduleList>
                {SchedulesData?.map((item) => (
                    <ScheduleItem
                    date={item.date}
                    plan={item.plan}
                    />
                ))}
            </StyledScheduleList>
            </Column>
        </StyledSchedule>
    )
}


export default Schedule;

const StyledSchedule = styled.div`
  width: 40%;
  height: 60%;
  border: 1px solid black;
`;

const StyledScheduleList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

const SchduleWrap = styled.div`
    width: 100%;
    height: 100%;

`;

const Title = styled.p`
  ${font.H3}
  color: ${color.gray900};
`;

