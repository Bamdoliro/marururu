import styled from "styled-components";
import { color } from "@/styles/color";
import LogoIcon from "../Icon/Logo";
import { useRouter } from "next/navigation";



const Footer = () => {
    const router = useRouter();

    return(
        <StyledFooter>
            <LogoIcon cursor="pointer" onClick={() => router.push("/")} />
            <StyledContent>
            <FooterWrap>
            주소: 부산광역시 강서구 가락대로 1393 봉림동 15 (46708)
            <p>교무실(입학처): 051-971-2153, Fax : 051-971-2061</p>
            <p>행정실: 051-971-2152, Fax : 051-971-6325</p>
            <p>Copyright (C) 밤돌이로 allrights reserved.</p>
            </FooterWrap>
            </StyledContent>
            <FooterUnder>
            Copyright © 밤돌이로 all rights reserved.
            </FooterUnder>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${color.gray100};
    height: 420px;
    width: 100%;
    padding : 40px 900px 94px 100px;
    color: ${color.gray600};
`;

const StyledContent = styled.p`
    gap:8px;
    padding-top: 40px;
`;

const FooterWrap = styled.div`
     display: flex;
    flex-direction: column;
    gap: 8px;
    border-bottom: 1px solid ${color.gray300};
    padding-bottom : 20px;
`


const FooterUnder = styled.div`
    padding-top: 20px;
`
