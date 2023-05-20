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
      <Column gap="16px" height="72px">
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
  height: 80px;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 8px;
`;

const Title = styled.p`
  ${font.H3}
  color: ${color.gray900};
`;

const Date = styled.p`
  ${font.p3}
  color: ${color.gray750};
`;
