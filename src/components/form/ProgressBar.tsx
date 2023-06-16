import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Column from "../common/Flex/Column";

const ProgressBar = () => {
  return (
    <StyledProgressBar>
      <Column gap="4px" alignItems="center">
        <Circle activate={false}>1</Circle>
        <Name activate={false}>지원자 정보</Name>
      </Column>
      <Line />
    </StyledProgressBar>
  );
};

export default ProgressBar;

const StyledProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 69px;
  padding: 0px 205px;
  border: 1px solid black;
`;

const Circle = styled.div<{ activate: boolean }>`
  ${font.p1}
  color: ${(props) => (props.activate ? color.maruDefault : color.gray300)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: 2px solid
    ${(props) => (props.activate ? color.maruDefault : color.gray300)};
`;

const Name = styled.div<{ activate: boolean }>`
  ${font.context}
  color: ${(props) => (props.activate ? color.maruDefault : color.gray300)};
`;

const Line = styled.div`
  width: 146.5px;
  border: 1px solid ${color.gray300};
`;
