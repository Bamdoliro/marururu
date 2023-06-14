import { color } from "@/styles/color";
import GrayLogoIcon from "../Icon/GrayLogo";
import Column from "../Flex/Column";
import Row from "../Flex/Row";
import InstagramIcon from "../Icon/Instagram";
import BIcon from "../Icon/B";
import Link from "../Link";
import { font } from "@/styles/font";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import {
  FAQ_PAGE_ROUTE,
  FORM_PAGE_ROUTE,
  NOTICE_PAGE_ROUTE,
} from "@/constants/router";

const Footer = () => {
  const router = useRouter();

  return (
    <StyledFooter>
      <InfoBox>
        <GrayLogoIcon />
        <Column gap="20px">
          <ContentBox>
            <p>주소: 부산광역시 강서구 가락대로 1393 봉림동 15 (46708)</p>
            <p>교무실(입학처): 051-971-2153, Fax: 051-971-2061</p>
            <p> 행정실:051-971-2152, Fax: 051-971-6325</p>
          </ContentBox>
          <Copyright>Copyright © 밤돌이로 all rights reserved.</Copyright>
        </Column>
      </InfoBox>
      <Row gap="95px" alignItems="flex-start">
        <NavigationBox>
          <Column gap="24px">
            <Link onClick={() => router.push(FORM_PAGE_ROUTE)}>원서접수</Link>
            <Link onClick={() => router.push(NOTICE_PAGE_ROUTE)}>공지사항</Link>
            <Link onClick={() => router.push(FAQ_PAGE_ROUTE)}>
              자주묻는질문
            </Link>
            <Link onClick={() => console.log("학교 소개 페이지")}>
              학교소개
            </Link>
            <Link onClick={() => console.log("마루 소개 페이지")}>
              마루소개
            </Link>
          </Column>
          <Column gap="24px">
            <Link onClick={() => console.log("test")}>이용약관</Link>
            <Link onClick={() => console.log("test")}>개인정보처리방침</Link>
            <Link onClick={() => console.log("test")}>학교 홈페이지</Link>
          </Column>
        </NavigationBox>
        <Row gap="16px" alignItems="center">
          <InstagramIcon cursor="pointer" />
          <BIcon cursor="pointer" />
        </Row>
      </Row>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  background-color: ${color.gray100};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 155px;
  height: 350px;
  width: 100%;
  padding: 40px 100px;
`;

const InfoBox = styled.div`
  ${font.p3}
  color: ${color.gray600};
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 20px;
`;

const Copyright = styled.p`
  ${font.p3}
  color: ${color.gray600};
`;

const NavigationBox = styled.div`
  ${font.p3}
  color: ${color.gray600};
  display: flex;
  gap: 132px;
`;
