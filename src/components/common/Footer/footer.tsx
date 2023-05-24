import styled from "styled-components";
import { color } from "@/styles/color";
import GrayLogoIcon from "../Icon/GrayLogo";
import Column from "../Flex/column";
import IgIcon from "../Icon/Ig";
import BIcon from "../Icon/B";

const Footer = () => {
  return (
    <StyledFooter>
      <Lala>
        <LeftFooterConetnt>
          <GrayLogoIcon />
          <Column gap="20px">
            <StyledContent>
              <p>주소: 부산광역시 강서구 가락대로 1393 봉림동 15 (46708)</p>
              <p>교무실(입학처): 051-971-2153, Fax: 051-971-2061</p>
              <p> 행정실:051-971-2152, Fax: 051-971-6325</p>
            </StyledContent>
            <LeftUnderFooter>
              Copyright © 밤돌이로 all rights reserved.
            </LeftUnderFooter>
          </Column>
        </LeftFooterConetnt>
        <RightFooterContent>
          <Five>
            <p>원서접수</p>
            <p>공지사항</p>
            <p>자주묻는질문</p>
            <p>학교소개</p>
            <p>마루소개</p>
          </Five>
          <Three>
            <p>이용약관</p>
            <p>개인정보처리방침</p>
            <p>학교 홈페이지</p>
          </Three>
        </RightFooterContent>
        <FooterIcon>
          <IgIcon />
          <BIcon />
        </FooterIcon>
      </Lala>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  background-color: ${color.gray100};
  height: 350px;
  width: 100%;
  padding: 40px 0px 0px 100px;
  color: ${color.gray600};
`;

const LeftFooterConetnt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 1px solid black;
  width: 489px;
  height: 216px;
`;

const StyledContent = styled.p`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 20px;
`;

const LeftUnderFooter = styled.p`
  color: ${color.gray600};
`;

const Lala = styled.div`
  display: flex;
  flex-direction: row;
  gap: 155px;
  width: 1163px;
  height: 216px;
`;

const RightFooterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 132px;
  width: 326px;
  height: 201px;
  border: 1px solid black;
`;

const Five = styled.div`
  width: 120px;
  height: 201px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Three = styled.div`
  height: 111px;
  width: 145px;
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  gap: 24px;
`;

const FooterIcon = styled.div`
  width: 90px;
  height: 36px;
  border: 1px solid black;
`;
