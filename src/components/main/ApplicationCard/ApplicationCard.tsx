import { font } from "@/styles/font";
import { styled } from "styled-components";
import { color } from "@/styles/color";
import Column from "@/components/common/Flex/Column";
import Button from "@/components/common/Button";
import { formatDate, getRemainDays } from "@/utils/timer";

export enum ApplicationStatus {
  RECRUITING = "모집 중",
  FIRST_PASS = "1차 합격자 발표",
  FINAL_PASS = "최종합격자 발표",
}

interface ApplicationCardPropsType {
  period: string;
  status: ApplicationStatus;
}

const ApplicationCard = ({ period, status }: ApplicationCardPropsType) => {
  const isRecruiting = status === "모집 중";

  return (
    <StyledApplicationCard>
      <Column gap="0" width="100%" height="100%" justifyContent="space-between">
        {isRecruiting ? (
          <Column gap="36px">
            <Notice>
              부산소프트웨어마이스터고등학교
              <br />
              2024학년도 신입생 모집
            </Notice>
            <Period>{period}</Period>
          </Column>
        ) : (
          <Column gap="16px">
            <Column gap="8px">
              <Status>{status}</Status>
              <RemainDays>D-{getRemainDays(period)}</RemainDays>
            </Column>
            <Period>{formatDate(period)}</Period>
          </Column>
        )}

        {isRecruiting ? (
          <Button width="321px" size="LARGE">
            원서 접수하기
          </Button>
        ) : (
          <Button
            width="321px"
            size="LARGE"
            option={getRemainDays(period) === 0 ? "PRIMARY" : "DISABLED"}
          >
            결과 확인하기
          </Button>
        )}
      </Column>
    </StyledApplicationCard>
  );
};

export default ApplicationCard;

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
