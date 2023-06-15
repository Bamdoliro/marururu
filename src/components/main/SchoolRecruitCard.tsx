import { font } from "@/styles/font";
import { styled } from "styled-components";
import { color } from "@/styles/color";
import Column from "@/components/common/Flex/Column";
import Button from "@/components/common/Button";
import moment from "moment";
import {
  finalTime,
  firstTime,
  submitEndTime,
  submitStartTime,
} from "@/models/submitTime";

const SchoolRecruitCard = () => {
  const remainDays = Math.ceil(
    moment().isBefore(firstTime)
      ? firstTime.diff(moment(), "days")
      : finalTime.diff(moment(), "days")
  );

  return (
    <StyledSchoolRecruitCard>
      <Column width="100%" height="100%" justifyContent="space-between">
        {moment().isAfter(submitStartTime) ? (
          <Column gap="36px">
            <Notice>
              부산소프트웨어마이스터고등학교
              <br />
              2024학년도 신입생 모집
            </Notice>
            <Period>
              {submitStartTime.locale("ko").format("yyyy년 MM월 DD일")} ~
              {submitEndTime.locale("ko").format("yyyy년 MM월 DD일")}
            </Period>
          </Column>
        ) : (
          <Column gap="16px">
            <Column gap="8px">
              <Status>
                {moment().isAfter(submitStartTime) &&
                moment().isBefore(submitEndTime)
                  ? "1차 합격자 발표"
                  : "최종합격자 발표"}
              </Status>
              {/* TODO: 남은 시간이 하루보다 적을 때 시간으로 나타내야함 */}
              <RemainDays>D-{remainDays}</RemainDays>
            </Column>
            <Period>
              {moment().isBefore(firstTime)
                ? firstTime.locale("ko").format("yyyy년 MM월 DD일")
                : finalTime.locale("ko").format("yyyy년 MM월 DD일")}
            </Period>
          </Column>
        )}
        <Button
          width="250px"
          size="LARGE"
          option={moment().isBefore(submitStartTime) ? "DISABLED" : "PRIMARY"}
        >
          {" "}
          {moment().isBefore(submitEndTime) ? "원서 접수하기" : "결과 확인하기"}
        </Button>
      </Column>
    </StyledSchoolRecruitCard>
  );
};

export default SchoolRecruitCard;

const StyledSchoolRecruitCard = styled.div`
  width: 702px;
  height: 436px;
  border-radius: 32px;
  padding: 60px;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.65) url("/assets/SchoolBackground.png");
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
  background-blend-mode: darken;
  background-attachment: fixed;
`;

const Notice = styled.p`
  ${font.H1};
  color: ${color.white};
`;

const Period = styled.p`
  ${font.H4}
  color: ${color.gray300};
`;

const Status = styled.p`
  ${font.H2}
  color: ${color.gray400};
`;

const RemainDays = styled.p`
  ${font.D1}
  color: ${color.white};
`;
