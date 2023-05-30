import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Column } from "../common/Flex";
import RightArrowIcon from "../common/Icon/RightArrow";

interface PropsType {
  id: number;
  title: string;
  date: string;
}

const NoticeItem = ({ id, title, date }: PropsType) => {
  const router = useRouter();

  return (
    <StyledNoticeItem onClick={() => router.push(`/notice/${id}`)}>
      <Column gap="8px" height="55px">
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Column>
      <RightArrowIcon color={color.gray600} size={24} />
    </StyledNoticeItem>
  );
};

export default NoticeItem;

const StyledNoticeItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 71px;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 16px;
  cursor: pointer;
`;

const Title = styled.p`
  ${font.H5}
  color: ${color.gray900};
`;

const Date = styled.p`
  ${font.p3}
  color: ${color.gray750};
`;
