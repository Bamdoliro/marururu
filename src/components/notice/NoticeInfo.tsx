import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Column from "../common/Flex/column";

interface PropsType {
  title: string;
  date: string;
}

const NoticeInfo = ({ title, date }: PropsType) => {
  return (
    <StyledNoticeInfo>
      <Column gap="4px">
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Column>
    </StyledNoticeInfo>
  );
};

export default NoticeInfo;

const StyledNoticeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 59px;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 16px;
  cursor: pointer;
`;

const Title = styled.p`
  ${font.context}
  color: ${color.gray900};
`;

const Date = styled.p`
  ${font.caption}
  color: ${color.gray750};
`;
