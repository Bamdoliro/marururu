import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const SignUpAgreement = () => {
  return (
    <StyledAgreement>
      <Agreement>
        <input type="checkbox" />
        이용약관 전체동의
      </Agreement>
      <hr />
      <Agreement>
        <input type="checkbox" />
        개인정보 수집 이용동의
        <AgreementLinkText>[ 필수 ] {">"}</AgreementLinkText>
      </Agreement>
      <Agreement>
        <input type="checkbox" />
        약관 전체동의
        <AgreementLinkText>[ 필수 ] {">"}</AgreementLinkText>
      </Agreement>
    </StyledAgreement>
  );
};

export default SignUpAgreement;

const StyledAgreement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
  height: 102px;
`;

const Agreement = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${font.btn3};
  color: ${color.gray500};
`;

const AgreementLinkText = styled.p`
  font-size: ${font.btn3};
  color: ${color.maruDefault};
  cursor: pointer;
`;
