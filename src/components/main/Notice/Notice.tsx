import { color } from "@/styles/color";
import { font } from "@/styles/font";
import RightArrowIcon from "@/components/common/Icon/RightArrow";
import NoticeItem from "./NoticeItem";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { MainNoticeItemData } from "@/data/main";

const Notice = () => {
  const router = useRouter();

  return (
    <StyledNotice>
      <NoticeButton onClick={() => router.push("/notice")}>
        <Title>공지사항</Title>
        <RightArrowIcon color={color.gray900} size={22} />
      </NoticeButton>
      <NoticeList>
        {MainNoticeItemData?.map((item) => (
          <NoticeItem title={item.title} id={item.id} />
        ))}
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
  overflow-y: auto;
`;
