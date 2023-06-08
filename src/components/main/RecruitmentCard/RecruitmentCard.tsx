import { font } from "@/styles/font";
import { styled } from "styled-components";
import moment from "moment";
import { color } from "@/styles/color";
import Column from "@/components/common/Flex/Column";
import Button from "@/components/common/Button";

interface DDayPropTypes {
  goal: string;
  date: string;
  status: "모집 중" | "1차 합격자 발표" | "최종 합격자 발표";
}

function RecruitementCard({ goal, date, status }: DDayPropTypes) {
  const isRecruiting = status === "모집 중";

  const formatter = new Intl.DateTimeFormat("ko", {
    dateStyle: "long",
  });

  const remainDays = isRecruiting || moment(date).diff(moment(), "days");
  const convertedDate = isRecruiting || formatter.format(new Date(date));

  return (
    <StyledApplicationCard>
      <Column gap="0" width="100%" height="100%" justifyContent="space-between">
        {isRecruiting ? (
          <Column gap="36px">
            <Announcement>
              부산소프트웨어마이스터고등학교
              <br />
              2024학년도 신입생 모집
            </Announcement>
            <Period>{date}</Period>
          </Column>
        ) : (
          <Column gap="16px">
            <Column gap="8px">
              <DDayGoal>{goal}</DDayGoal>
              <DDay>D-{remainDays}</DDay>
            </Column>
            <Period>{convertedDate}</Period>
          </Column>
        )}
        <Button width="321px">
          {isRecruiting ? "원서 접수하기" : "결과 확인하기"}
        </Button>
      </Column>
    </StyledApplicationCard>
  );
}

export default RecruitementCard;

const StyledApplicationCard = styled.div`
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

const Announcement = styled.p`
  ${font.H1};
  color: ${color.white};
`;

const Period = styled.p`
  ${font.H4}
  color: ${color.gray300};
`;

const DDayGoal = styled.p`
  ${font.H2}
  color: ${color.gray400};
`;

const DDay = styled.p`
  ${font.D1}
  color: ${color.white};
`;
