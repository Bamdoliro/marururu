import { color } from "@/styles/color";
import { font } from "@/styles/font";
import RightArrowIcon from "@/components/common/Icon/RightArrow";
import NoticeItem from "./NoticeItem";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Notice = () => {
  const router = useRouter();

  return (
    <StyledNotice>
      <NoticeButton onClick={() => router.push("/notice")}>
        <Title>공지사항</Title>
        <RightArrowIcon color={color.gray900} size={22} />
      </NoticeButton>
      <NoticeList>
        <NoticeItem
          title="2023학년도 부산소프트웨어마이스터고등학교 입학설명회 참가 신청"
          id={1}
        />
        <NoticeItem
          title="2023학년도 부산소프트웨어마이스터고등학교 입학설명회 참가 신청"
          id={2}
        />
      </NoticeList>
    </StyledNotice>
  );
};

export default Notice;

const StyledNotice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 48%;
  height: 33%;
`;

const NoticeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.p`
  ${font.H3}
  color: ${color.gray900};
`;

const NoticeList = styled.div`
  width: 100%;
  height: 100%;
`;
