"use client";

import { font } from "@/styles/font";
import { styled } from "styled-components";
import { color } from "@/styles/color";
import Column from "@/components/common/Flex/Column";
import Button from "@/components/common/Button";
import moment, { utc } from "moment";
import {
  finalTime,
  firstStartTime,
  submitEndTime,
  submitStartTime,
} from "@/models/submitTime";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getDay } from "@/utils/functions/dayFormatter";

const SchoolRecruitCard = () => {
  const router = useRouter();
  const currentTime = moment().isBefore(submitStartTime)
    ? submitStartTime
    : moment().isBefore(submitEndTime)
    ? submitEndTime
    : moment().isBefore(firstStartTime.clone().add(2, "days"))
    ? firstStartTime
    : finalTime;

  const [remainDays, setRemainDays] = useState(
    currentTime.diff(moment(), "days", true)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainDays(currentTime.diff(moment(), "days", true));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isSubmitPeriod = moment().isBetween(submitStartTime, submitEndTime);
  const timeDiff = utc(currentTime.diff(moment())).format("HH:mm:ss");
  const buttonOption =
    isSubmitPeriod || (-2 < remainDays && remainDays <= 0)
      ? "PRIMARY"
      : "DISABLED";
  const buttonOnClick = isSubmitPeriod
    ? () => router.push("/form")
    : -2 < remainDays && remainDays <= 0
    ? () => console.log("결과 확인하기 페이지 이동")
    : undefined;
  const buttonText = moment().isBefore(submitEndTime)
    ? "원서 접수하기"
    : "결과 확인하기";

  return (
    <StyledSchoolRecruitCard>
      <Column width="100%" height="100%" justifyContent="space-between">
        {isSubmitPeriod ? (
          <Column gap="36px">
            <Notice>
              부산소프트웨어마이스터고등학교
              <br />
              2024학년도 신입생 모집
            </Notice>
            <Period>
              {submitStartTime.format("yyyy년 MM월 DD일")} ~
              {submitEndTime.format("yyyy년 MM월 DD일")}
            </Period>
          </Column>
        ) : (
          <Column gap="16px">
            <Column gap="8px">
              <Status>
                {currentTime === submitStartTime
                  ? "원서 접수 시작까지"
                  : currentTime === firstStartTime
                  ? "1차 합격자 발표"
                  : currentTime === finalTime
                  ? "최종합격자 발표"
                  : null}
              </Status>
              <RemainDays>
                {remainDays >= 1 || remainDays < 0
                  ? getDay(remainDays)
                  : timeDiff}
              </RemainDays>
            </Column>
            <Period>{currentTime.format("yyyy년 MM월 DD일")}</Period>
          </Column>
        )}
        <Button
          width="250px"
          size="LARGE"
          option={buttonOption}
          onClick={buttonOnClick}
        >
          {buttonText}
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
