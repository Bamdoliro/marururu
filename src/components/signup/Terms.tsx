import RightArrowIcon from "@/components/common/Icon/RightArrow";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const Terms = () => {
  return (
    <StyledTerms>
      <Agreement>
        <input type="checkbox" id="all-check" />
        <label htmlFor="all-check">이용약관 전체동의</label>
      </Agreement>
      <hr />
      <Agreement>
        <input type="checkbox" id="agreement1" />
        <label htmlFor="agreement1">개인정보 수집 이용동의</label>
        <AgreementLink>
          [ 필수 ] <RightArrowIcon color={color.maruDefault} />
        </AgreementLink>
      </Agreement>
      <Agreement>
        <input type="checkbox" id="agreement2" />
        <label htmlFor="agreement2">약관 전체동의</label>
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
