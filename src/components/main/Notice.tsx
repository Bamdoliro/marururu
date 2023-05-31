import { color } from "@/styles/color";
import { font } from "@/styles/font";
import RightArrowIcon from "@/components/common/Icon/RightArrow";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "@/components/common/Link";
import { useMainNoticeListQuery } from "@/services/main/queries";

const Notice = () => {
  const router = useRouter();
  const { data } = useMainNoticeListQuery();

  return (
    <StyledNotice>
      <Link onClick={() => router.push("/notice")} gap="8px">
        <Title>공지사항</Title>
        <RightArrowIcon color={color.gray900} size={22} />
      </Link>
      <NoticeList>
        {data.map((item) => (
          <NoticeItem>
            <NoticeItemTitle onClick={() => router.push(`/notice/${item.id}`)}>
              {item.title}
            </NoticeItemTitle>
          </NoticeItem>
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

const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 33.3%;
  padding: 0px 16px;
  border-bottom: 1px solid ${color.gray300};
`;

const NoticeItemTitle = styled.a`
  ${font.p1}
  color: ${color.gray750};
  cursor: pointer;
  // 일정 길이 넘어가면 ... 처리
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
