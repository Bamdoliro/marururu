import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface PropsType {
  id: number;
  title: string;
}

const NoticeItem = ({ title, id }: PropsType) => {
  const router = useRouter();

  return (
    <StyledNoticeItem>
      <Title onClick={() => router.push(`/notice/${id}`)}>{title}</Title>
    </StyledNoticeItem>
  );
};

export default NoticeItem;

const StyledNoticeItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 33.3%;
  padding: 0px 16px;
  border-bottom: 1px solid ${color.gray300};
`;

const Title = styled.a`
  ${font.p1}
  color: ${color.gray750};
  cursor: pointer;
  // 일정 길이 넘어가면 ... 처리
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
