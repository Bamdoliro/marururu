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
    <StyledNoticeItem onClick={() => router.push(`/notice/${id}`)}>
      <QuestionIcon>Q.</QuestionIcon>
      <Title>{title}</Title>
    </StyledNoticeItem>
  );
};

export default NoticeItem;

const StyledNoticeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 64px;
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

// 디자인 결정되면 바꿀 예정
const QuestionIcon = styled.p`
  ${font.H3}
  color: ${color.maruDefault};
`;
