import { font } from "@/styles/font";
import { styled } from "styled-components";
import moment from "moment";
import { color } from "@/styles/color";
import Column from "@/components/common/Flex/Column";
import Button from "@/components/common/Button";

interface DDayPropTypes {
  goal: string;
  date: string;
}

function DDayCard({ goal, date }: DDayPropTypes) {
  const formatter = new Intl.DateTimeFormat("ko", {
    dateStyle: "long",
  });

  const remainDays = moment(date).diff(moment(), "days");
  const convertedDate = formatter.format(new Date(date));

  return (
    <StyledDDayCard>
      <Column
        gap="0"
        width="321px"
        height="100%"
        justifyContent="space-between"
      >
        <Column gap="16px">
          <Column gap="8px">
            <DDayGoal>{goal}</DDayGoal>
            <DDay>D-{remainDays}</DDay>
          </Column>
          <TargetDate>{convertedDate}</TargetDate>
        </Column>
        <Button>결과 확인하기</Button>
      </Column>
    </StyledDDayCard>
  );
}

export default DDayCard;

const StyledDDayCard = styled.div`
  position: relative;
  width: 56%;
  height: 436px;
  border-radius: 32px;
  padding: 72px 60px 64px;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.65) url("/assets/SchoolView.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  background-blend-mode: darken;
`;

const DDayGoal = styled.p`
  ${font.H2}
  color: ${color.gray400};
`;

const DDay = styled.p`
  ${font.D1}
  color: ${color.white};
`;

const TargetDate = styled.p`
  ${font.H4}
  color: ${color.gray300};
`;
