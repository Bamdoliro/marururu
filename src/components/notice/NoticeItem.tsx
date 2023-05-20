import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Column from "../common/Flex/column";
import RightArrowIcon from "../common/Icon/RightArrow";

interface PropsType {
  title: string;
  date: string;
}

const NoticeItem = ({ title, date }: PropsType) => {
  return (
    <StyledNoticeItem>
      <Column gap="4px">
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Column>
      <RightArrowIcon color={color.gray900} size={22} />
    </StyledNoticeItem>
  );
};

export default NoticeItem;

const StyledNoticeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 59px;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 16px;
`;

const Title = styled.p`
  ${font.context}
  color: ${color.gray900};
`;

const Date = styled.p`
  ${font.caption}
  color: ${color.gray750};
`;
