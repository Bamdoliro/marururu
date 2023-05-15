import RightArrowIcon from "@/components/Common/Icon/RightArrow";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const Terms = () => {
  return (
    <StyledTerms>
      <Agreement>
        <input type="checkbox" name="all" />
        이용약관 전체동의
      </Agreement>
      <hr />
      <Agreement>
        <input type="checkbox" />
        개인정보 수집 이용동의
        <AgreementLink>
          [ 필수 ] <RightArrowIcon color={color.maruDefault} />
        </AgreementLink>
      </Agreement>
      <Agreement>
        <input type="checkbox" />
        약관 전체동의
        <AgreementLink>
          [ 필수 ] <RightArrowIcon color={color.maruDefault} />
        </AgreementLink>
      </Agreement>
    </StyledTerms>
  );
};

export default Terms;

const StyledTerms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Agreement = styled.div`
  font-size: ${font.btn3};
  color: ${color.gray500};
  display: flex;
  gap: 5px;
`;

const AgreementLink = styled.div`
  font-size: ${font.btn3};
  color: ${color.maruDefault};
  display: flex;
  cursor: pointer;
`;
