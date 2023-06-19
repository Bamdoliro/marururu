import useFormPage from "@/hooks/useFormPage";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const PROGRESS_BAR_DATA = [
  {
    id: 0,
    name: "지원자 정보",
  },
  {
    id: 1,
    name: "보호자 정보",
  },
  {
    id: 2,
    name: "출신학교 및 학력",
  },
  {
    id: 3,
    name: "전형 선택",
  },
  {
    id: 4,
    name: "성적 입력",
  },
  {
    id: 5,
    name: "자기소개서",
  },
];

const ProgressBar = () => {
  const { currentPage, movePage } = useFormPage();

  return (
    <StyledProgressBar>
      {PROGRESS_BAR_DATA.map((item, index) => (
        <Circle
          key={item.id}
          name={item.name}
          active={currentPage === index + 1}
          onClick={movePage}
        >
          {index + 1}
        </Circle>
      ))}
    </StyledProgressBar>
  );
};

export default ProgressBar;

const StyledProgressBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 205px;
  margin-bottom: 61px;
  &::before {
    position: absolute;
    content: "";
    width: calc(100% - 410px);
    height: 2px;
    background-color: ${color.gray300};
  }
`;

const Circle = styled.div<{ active: boolean; name: string }>`
  z-index: 1;
  ${font.p1}
  color: ${(props) => (props.active ? color.maruDefault : color.gray600)};
  background-color: ${color.gray50};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: 2px solid
    ${(props) => (props.active ? color.maruDefault : color.gray300)};
  cursor: pointer;
  &::after {
    ${font.context}
    color: ${(props) => (props.active ? color.maruDefault : color.gray600)};
    content: "${(props) => props.name}";
    position: absolute;
    top: calc(100% + 4px);
  }
`;
