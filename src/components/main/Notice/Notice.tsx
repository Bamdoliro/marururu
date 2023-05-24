import { color } from "@/styles/color";
import { font } from "@/styles/font";
import RightArrowIcon from "@/components/common/Icon/RightArrow";
import NoticeItem from "./NoticeItem";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "@/components/common/Link/link";
import { MainNoticeItemData } from "@/data/main";

const Notice = () => {
  const router = useRouter();

  return (
    <StyledNotice>
      <Link onClick={() => router.push("/notice")} gap="8px">
        <Title>공지사항</Title>
        <RightArrowIcon color={color.gray900} size={22} />
      </Link>
      <NoticeList>
        {MainNoticeItemData?.map((item) => (
          <NoticeItem key={item.id} title={item.title} id={item.id} />
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

const Title = styled.p`
  ${font.H3}
  color: ${color.gray900};
`;

const NoticeList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
